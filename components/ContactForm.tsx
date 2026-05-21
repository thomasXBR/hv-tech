"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.get("nome"),
          email: formData.get("email"),
          telefone: formData.get("telefone"),
          mensagem: formData.get("mensagem"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Erro ao enviar.");
        return;
      }

      setStatus("success");
      setMessage("Mensagem enviada! Entraremos em contato em breve.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Erro de conexão. Tente novamente.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1 block text-sm font-medium text-[#E0E1DD]">
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Seu nome"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-[#E0E1DD] placeholder:text-[#E0E1DD]/50 focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#E0E1DD]">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-[#E0E1DD] placeholder:text-[#E0E1DD]/50 focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="telefone" className="mb-1 block text-sm font-medium text-[#E0E1DD]">
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-[#E0E1DD] placeholder:text-[#E0E1DD]/50 focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-medium text-[#E0E1DD]">
          Mensagem/Problemática *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          placeholder="Como podemos ajudar?"
          className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-[#E0E1DD] placeholder:text-[#E0E1DD]/50 focus:border-[#00B4D8] focus:outline-none focus:ring-1 focus:ring-[#00B4D8]"
        />
      </div>

      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-[#00B4D8]" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#00B4D8] py-3 text-sm font-semibold text-[#0B132B] shadow-sm transition-all duration-300 hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
