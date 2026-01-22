import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              Plataforma Completa de Pesquisa Política
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pesquisas Políticas
              <span className="text-emerald-600"> Inteligentes</span> e
              <span className="text-blue-600"> Seguras</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Crie questionários dinâmicos, gerencie equipes de pesquisadores e obtenha insights em tempo real com a plataforma mais completa para pesquisas eleitorais e de opinião pública.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Solicitar Demonstração
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-all font-semibold text-lg">
                Ver Como Funciona
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Questionários 100% personalizáveis</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Dados criptografados e seguros</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Dashboard com análises em tempo real</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg">Painel de Controle</h3>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Ao Vivo
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-xl">
                    <p className="text-emerald-700 text-sm font-medium mb-1">Respostas Coletadas</p>
                    <p className="text-3xl font-bold text-emerald-900">12,847</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl">
                    <p className="text-blue-700 text-sm font-medium mb-1">Pesquisadores Ativos</p>
                    <p className="text-3xl font-bold text-blue-900">24</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Intenção de Voto</span>
                      <span className="text-sm font-bold text-gray-900">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Aprovação Governo</span>
                      <span className="text-sm font-bold text-gray-900">62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
              <p className="text-sm font-medium mb-1">Taxa de Resposta</p>
              <p className="text-4xl font-bold">94%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
