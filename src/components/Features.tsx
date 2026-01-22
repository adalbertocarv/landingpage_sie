import { Settings, Users, BarChart3, Shield, Smartphone, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Settings,
      title: 'Painel Administrativo Completo',
      description: 'Crie e gerencie questionários com total flexibilidade. Adicione perguntas abertas, múltipla escolha, escalas e muito mais.',
      color: 'emerald',
    },
    {
      icon: Users,
      title: 'Gestão de Pesquisadores',
      description: 'Controle total sobre sua equipe. Adicione, remova e monitore a atividade de cada pesquisador em tempo real.',
      color: 'blue',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Analítico',
      description: 'Visualize resultados instantaneamente com gráficos interativos, filtros avançados e exportação de relatórios detalhados.',
      color: 'emerald',
    },
    {
      icon: Smartphone,
      title: 'Interface do Pesquisador',
      description: 'App otimizado para campo. Pesquisadores recebem perguntas dinamicamente e coletam respostas mesmo offline.',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Segurança Máxima',
      description: 'Escolha entre armazenar dados puros ou criptografados. Cumpra todas as regulamentações de proteção de dados.',
      color: 'emerald',
    },
    {
      icon: Zap,
      title: 'Resultados em Tempo Real',
      description: 'Acompanhe as respostas conforme chegam. Tome decisões rápidas baseadas em dados atualizados ao minuto.',
      color: 'blue',
    },
  ];

  return (
    <section id="funcionalidades" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tudo que Você Precisa em Um Só Lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma completa para conduzir pesquisas políticas profissionais com eficiência e segurança
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
