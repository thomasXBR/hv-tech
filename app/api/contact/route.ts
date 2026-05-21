import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, mensagem } = body;

    if (!nome?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    const contact = {
      id: Date.now().toString(),
      nome: String(nome).trim(),
      email: String(email).trim(),
      telefone: String(telefone || "").trim(),
      mensagem: String(mensagem || "").trim(),
      createdAt: new Date().toISOString(),
    };

    let contacts: typeof contact[] = [];
    try {
      const data = await readFile(CONTACTS_FILE, "utf-8");
      contacts = JSON.parse(data);
    } catch {
      await mkdir(DATA_DIR, { recursive: true });
    }

    contacts.push(contact);
    await writeFile(
      CONTACTS_FILE,
      JSON.stringify(contacts, null, 2),
      "utf-8"
    );

    return NextResponse.json({ success: true, id: contact.id });
  } catch (err) {
    console.error("Erro ao salvar contato:", err);
    return NextResponse.json(
      { error: "Erro ao salvar. Tente novamente." },
      { status: 500 }
    );
  }
}
