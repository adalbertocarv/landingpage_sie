import { FileText, Send, PieChart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Configure Sua Pesquisa',
      description: 'No painel administrativo, crie questionários personalizados. Adicione quantas perguntas quiser, escolha tipos de resposta e defina a lógica de ramificação.',
      step: '01',
    },
    {
      icon: Send,
      title: 'Despache Seus Pesquisadores',
      description: 'Sua equipe acessa a interface otimizada para campo. As perguntas aparecem dinamicamente, guiando cada entrevista de forma fluida e profissional.',
      step: '02',
    },
    {
      icon: PieChart,
      title: 'Analise os Resultados',
      description: 'Acompanhe as respostas em tempo real no dashboard. Visualize tendências, cruze dados e exporte relatórios completos para tomada de decisão.',
      step: '03',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três etapas simples para conduzir pesquisas políticas profissionais
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200">
                <div className="absolute -top-6 left-8">
                  <span className="bg-emerald-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>
                <div className="mt-8 mb-6 w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
