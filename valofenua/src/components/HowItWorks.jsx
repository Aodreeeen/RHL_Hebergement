import { Home, Settings, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Home,
      title: 'Decrivez votre bien',
      description: 'Renseignez la commune et la categorie de votre bien.',
    },
    {
      number: '2',
      icon: Settings,
      title: 'Precisez les criteres',
      description: 'Ajoutez le type de bien et la surface habitable.',
    },
    {
      number: '3',
      icon: TrendingUp,
      title: 'Obtenez votre estimation',
      description: 'Recevez une fourchette de prix basee sur le marche local.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">
          Comment ca marche ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0077B6] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {step.number}
              </div>
              <step.icon className="w-8 h-8 text-[#0077B6] mb-3" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
