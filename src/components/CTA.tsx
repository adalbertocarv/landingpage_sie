import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 to-blue-600">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto Para Revolucionar Suas Pesquisas Políticas?
        </h2>
        <p className="text-xl text-emerald-50 mb-10 max-w-3xl mx-auto leading-relaxed">
          Junte-se a dezenas de campanhas, institutos de pesquisa e partidos políticos que já confiam em nossa plataforma
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl flex items-center gap-2 group">
            Agendar Demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Falar com Especialista
          </button>
        </div>
        <p className="text-emerald-100 text-sm">
          Resposta em até 24 horas • Demonstração gratuita • Sem compromisso
        </p>
      </div>
    </section>
  );
}
