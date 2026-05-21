"use client";

import { useState } from "react";
import Footer from "@/components/diretosautorais";


interface Case {
  title: string;
  client: string;
  summary: string;
  image: string;
}

interface Service {
  title: string;
  description: string; // description now includes any glossary/explanation inline
  explanation?: string; // kept optional for legacy but generally unused
  averageTicket: string;
  image: string;
  cases: Case[];
}

const services: Service[] = [
  {
    title: "Automação Industrial",
    image: "/automacao.jpg",
    description:
      "Projetos para tornar fábricas e linhas de produção mais eficientes por meio da instalação de sensores que coletam dados em tempo real, controladores lógicos programáveis (CLPs) — computadores industriais que comandam a sequência de máquinas — e sistemas supervisórios (SCADA), que permitem monitorar e controlar processos remotamente. Atuamos desde a modelagem de fluxos até a programação e integração com ERP, reduzindo erros e paradas não planejadas.",
    explanation: "",
    averageTicket: "R$ 75.000",
    cases: [
      {
        title: "Linha de Montagem Automática",
        client: "Fábrica ABC",
        image: "/images (3).jpg",
        summary:
          "Implementamos um sistema de visão para separar peças defeituosas, reduzindo retrabalho em 40%.",
      },
      {
        title: "Sistema de Embalagem Inteligente",
        client: "Embalagens Silva",
        image: "/images (4).jpg",
        summary:
          "Desenvolvemos controladores que ajustam a velocidade de embalo conforme tamanho do produto, aumentando a produtividade.",
      },
      {
        title: "Monitoramento de Falhas com SCADA",
        client: "Metalúrgica Vale",
        image: "/images (5).jpg",
        summary:
          "Integramos sensores a um SCADA, que é um sistema de supervisão que permite visualizar e comandar processos à distância, para detectar falhas em tempo real e gerar alertas imediatos. ",
      },
    ],
  },
  {
    title: "Desenvolvimento de Hardware",
    image: "/hardware.jpg",
    description:
      "Criação de placas eletrônicas e dispositivos customizados voltados para Internet das Coisas (IoT) — redes de objetos conectados que trocam dados — e equipamentos embarcados, onde o software roda diretamente no circuito sem um sistema operacional convencional. Projetamos desde o esquemático até a fabricação de protótipos, incluindo desenvolvimento de firmware, certificação e produção em série.",
    explanation: "",
    averageTicket: "R$ 45.000",
    cases: [
      {
        title: "Placa IoT para Monitoramento",
        client: "AgroTech Ltda",
        image: "/images (6).jpg",
        summary:
          "Desenvolvemos um dispositivo que monitora temperatura e envia alertas via SMS para fazendas.",
      },
      {
        title: "Dispositivo USB Customizado",
        client: "LabNet Engenharia",
        image: "/images (7).jpg",
        summary:
          "Criamos um dongle USB para coletar dados de sensores e replicar via rede para sistema central.",
      },
      {
        title: "Módulo Sensor de Umidade",
        client: "AgroSol",
        image: "/images (11).jpg",
        summary:
          "Projetamos um módulo compacto que mede umidade e envia dados via LoRa, ou seja usando comunicação sem fio de baixo consumo, para aplicações agrícolas.",
      },
    ],
  },
  {
    title: "Consultoria e Suporte Técnico",
    image: "/consultoria.jpg",
    description:
      "Análise detalhada de instalações existentes, treinamento de equipes para operação e manutenção, e atendimento remoto ou in‑loco para minimizar tempos de parada — os períodos em que máquinas ficam inoperantes devido a falhas ou manutenção. Nosso suporte in‑loco garante presença física rápida quando necessário, complementado por diagnósticos remotos e planos de contingência.",
    explanation: "",
    averageTicket: "R$ 12.000",
    cases: [
      {
        title: "Treinamento de Operadores",
        client: "Fábrica Brasil",
        image: "/images (9).jpg",
        summary:
          "Capacitamos 50 colaboradores em operação de novos CLPs (Controladores Lógicos Programáveis), agilizando a integração de uma nova linha.",
      },
      {
        title: "Análise de Torque em Máquina",
        client: "AutoMotores",
        image: "/images (13).jpg",
        summary:
          "Realizamos auditoria de torque e calibramos equipamentos para reduzir quebras de ferramentas.",
      },
      {
        title: "Suporte 24/7 para Sistema de Controle",
        client: "Distribuidora XYZ",
        image: "/images (10).jpg",
        summary:
          "Oferecemos atendimento contínuo e correções remotas que diminuíram o tempo médio de resposta em 60%.",
      },
    ],
  },
];

function ServiceBlock({ service }: { service: Service }) {
  const [current, setCurrent] = useState<number>(0);
  const [animClass, setAnimClass] = useState<string>("");
  const next = () => {
    const nextIndex = (current + 1) % service.cases.length;
    setAnimClass("swipe-out-left");
    setTimeout(() => {
      setCurrent(nextIndex);
      setAnimClass("swipe-in-right");
      setTimeout(() => setAnimClass(""), 360);
    }, 280);
  };
  const prev = () => {
    const prevIndex = (current - 1 + service.cases.length) % service.cases.length;
    setAnimClass("swipe-out-right");
    setTimeout(() => {
      setCurrent(prevIndex);
      setAnimClass("swipe-in-left");
      setTimeout(() => setAnimClass(""), 360);
    }, 280);
  };

  return (
    <div className="rounded-lg bg-[#1C2541] p-4 shadow-lg sm:p-6 lg:p-8">
      <h3 className="mb-6 text-center text-3xl font-bold sm:text-4xl text-white">
        {service.title}
      </h3>
      <div className="mb-8 flex justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="h-48 w-48 rounded-lg object-cover sm:h-56 sm:w-56 md:h-72 md:w-72"
        />
      </div>
      <p className="mb-6 text-sm sm:text-lg">{service.description}</p>

      <div>
        <h4 className="mb-2 text-center text-lg font-semibold sm:text-2xl text-[#00B4D8]">
          Cases de Sucesso
        </h4>
        <div className="relative mx-auto max-w-md">
          <div className={`rounded-lg bg-[#0B132B] p-4 sm:p-6 ${animClass}`}>
                    <div className="mb-4 flex justify-center">
                      <img
                        src={service.cases[current].image}
                        alt={service.cases[current].title}
                        className="h-36 w-36 rounded-lg object-cover sm:h-44 sm:w-44 md:h-56 md:w-56"
                      />
                    </div>
                    <h5 className="mb-2 text-center text-lg font-bold sm:text-xl">
                      {service.cases[current].title}
                    </h5>
                    <p className="mb-1 text-center text-xs italic text-[#E0E1DD]/70 sm:text-sm">
                      Cliente: {service.cases[current].client}
                    </p>
                    <p className="text-center text-sm sm:text-base">
                      {service.cases[current].summary}
                    </p>
                  </div>

                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-[#00B4D8] w-8 h-8 flex items-center justify-center text-[#0B132B] hover:opacity-90"
                    aria-label="Anterior"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-[#00B4D8] w-8 h-8 flex items-center justify-center text-[#0B132B] hover:opacity-90"
                    aria-label="Próximo"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-[#E0E1DD] font-sans">
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }
        .header-background {
          animation: zoomIn 1.5s ease-out forwards;
        }
      `}</style>

      <div
        className="relative mb-10 h-64 w-full overflow-hidden sm:h-80 md:h-96"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 19, 43, 0.75), rgba(11, 19, 43, 0.75)), url('/thumb_projetos.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="header-background absolute inset-0 bg-cover bg-center" />
        <div className="relative flex h-full items-center justify-center px-4">
          <h1 className="text-3xl font-bold text-center text-[#E0E1DD] drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Nossos serviços
          </h1>
        </div>
      </div>

      <section className="px-4 py-8 sm:px-6 md:px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
          O ecossistema de soluções para operações de alta qualidade.
          </h2>
          <p className="mb-8 text-sm leading-relaxed sm:text-base md:text-lg">
          Na HVTech, transformamos desafios complexos em sistemas de alta performance. Nossos projetos de engenharia e automação são desenhados sob medida para garantir que sua operação alcance o máximo de eficiência com o uso inteligente de recursos. Explore nossa estrutura de serviços e veja como nossas soluções entregam estabilidade técnica e viabilidade financeira para o seu negócio. 
          </p>
          <div className="space-y-8">
            {services.map((s, i) => {
              const sectionIds = ["automacao", "hardware", "consultoria"];
              return (
                <div key={i} id={sectionIds[i]}>
                  <ServiceBlock service={s} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
