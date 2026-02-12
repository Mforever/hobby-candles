import { Link } from 'react-router-dom';
import { FaFire, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Анимированные свечи на фоне */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1
            }}
          >
            <FaFire className="text-6xl text-amber-300" />
          </div>
        ))}
      </div>

      <div className={`container-custom relative z-10 text-center transition-all duration-1000 transform ${
        loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
          Создай свою{' '}
          <span className="text-amber-600 relative inline-block">
            идеальную свечу
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-200 rounded-full"></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Рецепты, техники и секреты от опытных свечеваров.
          100+ статей, 50+ рецептов, сообщество единомышленников.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/category/wax" className="group btn-primary inline-flex items-center gap-2 text-lg">
            Начать творить
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/about" className="btn-secondary text-lg">
            О проекте
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center gap-2">🔥 500+ свечеваров</span>
          <span className="flex items-center gap-2">📚 100+ статей</span>
          <span className="flex items-center gap-2">⭐️ 4.9 ★★★★★</span>
        </div>
      </div>
    </div>
  );
}