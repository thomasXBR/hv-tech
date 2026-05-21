export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C2541] text-[#E0E1DD] py-12 mt-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">HV Tech</h3>
            <p className="text-sm">Soluções em Automação e Hardware</p>
            <p className="text-xs text-gray-400 mt-2">
              Transformando indústrias com tecnologia inovadora
            </p>
          </div>

          {/* Services */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/projetos#automacao" className="hover:text-[#00B4D8] transition">Automação Industrial</a></li>
              <li><a href="/projetos#hardware" className="hover:text-[#00B4D8] transition">Hardware</a></li>
              <li><a href="/projetos#consultoria" className="hover:text-[#00B4D8] transition">Consultoria Técnica</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-sm">Email: contato@hvtech.com</p>
            <p className="text-sm">Telefone: +55 (11) 99999-9999</p>
            <p className="text-sm">São Paulo, SP - Brasil</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00B4D8] my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {currentYear} HV Tech. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com inovação e excelência técnica</p>
        </div>
      </div>
    </footer>
  );
}