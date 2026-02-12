import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { heroImages, uiImages } from '../assets/images/index';

export default function Hero() {
  return (
    <div
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImages.heroBg})` }}
    >
      {/* Фоновые свечи (паттерн) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImages.candles})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Плавающие иконки свечей */}
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
            <img src={uiImages.candleBg} alt="" className="w-16 h-16" />
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-gray-900">
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
          <Link to="/category/wax" className="bg-amber-600 text-white px-8 py-4 rounded-xl hover:bg-amber-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-lg group">
            Начать творить
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/about" className="bg-white text-amber-700 px-8 py-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 font-medium shadow-lg text-lg">
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