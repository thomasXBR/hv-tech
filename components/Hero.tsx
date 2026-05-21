"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronRight } from "lucide-react"; // Sugestão: use um ícone para dar direção

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden px-4 py-20 sm:px-6"
      aria-label="Página inicial HVTech"
    >
      {/* Background com Overlay Dinâmico */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 19, 43, 0.8), rgba(11, 19, 43, 0.95)), url('/thumb_projetos.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Efeito de Luz Difusa para despertar curiosidade visual */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00B4D8] opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="max-w-3xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B4D8]"></span>
              </span>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#00B4D8] sm:text-xs">
                Sistemas Ininterruptos • Bem vindo à HVTECH  
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              A engenharia invisível por trás das <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#90E0EF]">empresas imparáveis.</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg mb-10">
              Não entregamos apenas software. Arquitetamos estabilidade e 
              segurança para operações que exigem performance absoluta. 
              Descubra como blindamos o crescimento da sua infraestrutura.
            </p>

            {/* --- BLOCO DE CTAs --- */}
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/#contato">
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-[#00B4D8] text-[#0B132B] font-bold rounded-lg transition-all hover:bg-[#90E0EF] hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] flex items-center justify-center gap-2">
                Entre em contato
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              <Link href="/projetos">
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all text-center">
                Ver os serviços
                </button>
              </Link>
            </div>
            {/* ------------------- */}
            
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}