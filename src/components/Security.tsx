import { Lock, Database, Eye, Shield } from 'lucide-react';

export function Security() {
  return (
    <section id="seguranca" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Segurança e Privacidade em Primeiro Lugar
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Entendemos que dados de pesquisas políticas são extremamente sensíveis. Por isso, oferecemos controle total sobre como seus dados são armazenados e protegidos.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Criptografia Opcional</h3>
                  <p className="text-gray-600">
                    Escolha armazenar dados puros para análise rápida ou criptografados para máxima segurança. Você decide o nível de proteção.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Conformidade LGPD</h3>
                  <p className="text-gray-600">
                    Totalmente adequado à Lei Geral de Proteção de Dados. Gerencie consentimentos e exclua dados quando necessário.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Controle de Acesso</h3>
                  <p className="text-gray-600">
                    Defina permissões granulares. Controle quem pode criar pesquisas, coletar dados e visualizar resultados.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Auditoria Completa</h3>
                  <p className="text-gray-600">
                    Registros detalhados de todas as ações. Saiba exatamente quem acessou, modificou ou exportou dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-12 text-white shadow-2xl">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Criptografia Ativa</span>
                  </div>
                  <p className="text-emerald-100 text-sm">Todos os dados em trânsito protegidos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Backup Automático</span>
                  </div>
                  <p className="text-blue-100 text-sm">Seus dados replicados e seguros em múltiplas regiões</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Anonimização</span>
                  </div>
                  <p className="text-emerald-100 text-sm">Opções avançadas para proteger identidade dos entrevistados</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-center text-lg font-semibold">Compliance</p>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">ISO 27001</div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">LGPD</div>
                  {/* <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">SOC 2</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
