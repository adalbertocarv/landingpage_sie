import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-sie.png" alt="SIE Logo" className="h-20 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              A plataforma mais completa para pesquisas políticas no Brasil.
            </p>
            <p className="text-sm text-gray-500">
              Tecnologia de ponta para decisões estratégicas.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#funcionalidades"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#seguranca"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Segurança
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Casos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">contato@SIE.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">(11) 3000-0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Distrito Federal, DF - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            2024 SIE. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
