import EstimationForm from '../components/EstimationForm';

export default function Estimation() {
  return (
    <main className="flex-1 py-8 md:py-12">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Estimez votre bien
          </h1>
          <p className="text-slate-600">
            Remplissez le formulaire ci-dessous pour obtenir une estimation gratuite
          </p>
        </div>
        <EstimationForm />
      </div>
    </main>
  );
}
