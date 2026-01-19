import { FileText, MapPin, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: FileText,
      value: '1300+',
      label: 'annonces analysees',
    },
    {
      icon: MapPin,
      value: '12',
      label: 'communes couvertes',
    },
    {
      icon: Clock,
      value: '2 min',
      label: 'temps moyen',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50"
            >
              <stat.icon className="w-8 h-8 text-[#0077B6] mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
