export default function AdBanner({ slot, className = '' }) {
  return (
    <div className={`my-8 p-6 bg-amber-50/50 rounded-2xl border border-amber-200 text-center ${className}`}>
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-amber-600 mb-2">Реклама</p>
        <div className="bg-white rounded-xl p-4 shadow-inner">
          <div className="w-full h-24 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
            <span className="text-amber-700 font-medium">
              {slot ? `Рекламное место: ${slot}` : 'Здесь будет ваш AdSense код'}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Реклама помогает нам развивать проект
          </p>
        </div>
      </div>
    </div>
  );
}