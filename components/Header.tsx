"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/80 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <a
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="rounded-2xl bg-white/5 p-1.5 shadow-sm transition-all duration-300 group-hover:translate-y-[1px] group-hover:bg-white/10 group-hover:shadow-md">
            <Logo size="sm" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-[#00B4D8] transition-colors duration-300 group-hover:text-[#4fd3ff] sm:text-2xl">
            HVTech
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a
            href="/#apresentacao"
            className="rounded-full px-3 py-1 text-[#E0E1DD]/80 transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            Sobre
          </a>
          <a
            href="/#historia"
            className="rounded-full px-3 py-1 text-[#E0E1DD]/80 transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            História
          </a>
          <a
            href="/#contato"
            className="rounded-full px-3 py-1 text-[#E0E1DD]/80 transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            Contato
          </a>
          <a
            href="/projetos"
            className="rounded-full border border-[#00B4D8]/60 px-4 py-1.5 text-[#00B4D8] shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-[#4fd3ff] hover:bg-[#00B4D8]/10 hover:text-[#4fd3ff]"
          >
            Serviços
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-[#E0E1DD] shadow-sm transition-all duration-200 hover:scale-105 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] md:hidden"
          aria-label="Abrir menu de navegação"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Abrir menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 text-sm md:hidden">
          <a
            href="/#apresentacao"
            className="rounded-lg px-3 py-2 text-[#E0E1DD]/90 transition-colors duration-200 hover:bg-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="/#historia"
            className="rounded-lg px-3 py-2 text-[#E0E1DD]/90 transition-colors duration-200 hover:bg-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            História
          </a>
          <a
            href="/#contato"
            className="rounded-lg px-3 py-2 text-[#E0E1DD]/90 transition-colors duration-200 hover:bg-white/5"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </a>
          <a
            href="/projetos"
            className="rounded-lg px-3 py-2 text-[#00B4D8] transition-colors duration-200 hover:bg-[#00B4D8]/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </a>
        </nav>
      )}
    </header>
  );
}

