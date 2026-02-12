import { Link } from 'react-router-dom';
import { FaFire, FaFlask, FaLeaf, FaPalette, FaCubes, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const CategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Данные категорий с красивыми градиентами и эмодзи вместо картинок
  const categoryData = {
    wax: {
      name: 'Воск',
      slug: 'wax',
      icon: FaFire,
      emoji: '🕯️',
      bgGradient: 'from-amber-100 to-amber-200',
      hoverGradient: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200',
      description: 'Соевый, кокосовый, пальмовый — выбирай свой идеальный воск',
      articleCount: 15,
      gradient: 'from-amber-400 to-orange-500',
      tags: ['🌱 Соевый', '🥥 Кокосовый', '🌴 Пальмовый'],
      pattern: '🔵🔴🟡'
    },
    fragrances: {
      name: 'Ароматы',
      slug: 'fragrances',
      icon: FaFlask,
      emoji: '🌸',
      bgGradient: 'from-purple-100 to-purple-200',
      hoverGradient: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
      description: 'Эфирные масла, отдушки, парфюмерные композиции',
      articleCount: 12,
      gradient: 'from-purple-400 to-pink-500',
      tags: ['🌿 Лаванда', '🍊 Цитрус', '🌲 Хвоя'],
      pattern: '🌸🌺🌹'
    },
    wicks: {
      name: 'Фитили',
      slug: 'wicks',
      icon: FaLeaf,
      emoji: '🪵',
      bgGradient: 'from-green-100 to-green-200',
      hoverGradient: 'from-green-500 to-emerald-500',
      textColor: 'text-green-700',
      borderColor: 'border-green-200',
      description: 'Хлопковые, деревянные, с бумажным наполнителем',
      articleCount: 8,
      gradient: 'from-green-400 to-emerald-500',
      tags: ['🧵 Хлопок', '🪵 Дерево', '📄 Бумага'],
      pattern: '🌿🍃🌱'
    },
    molds: {
      name: 'Формы',
      slug: 'molds',
      icon: FaCubes,
      emoji: '🧊',
      bgGradient: 'from-blue-100 to-blue-200',
      hoverGradient: 'from-blue-500 to-indigo-500',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      description: 'Силикон, пластик, металл — любые формы для твоих идей',
      articleCount: 10,
      gradient: 'from-blue-400 to-indigo-500',
      tags: ['🧴 Силикон', '🥤 Пластик', '⚙️ Металл'],
      pattern: '◻️◼️◻️'
    },
    decor: {
      name: 'Декор',
      slug: 'decor',
      icon: FaPalette,
      emoji: '✨',
      bgGradient: 'from-pink-100 to-pink-200',
      hoverGradient: 'from-pink-500 to-rose-500',
      textColor: 'text-pink-700',
      borderColor: 'border-pink-200',
      description: 'Сухоцветы, красители, блёстки — сделай свечу искусством',
      articleCount: 14,
      gradient: 'from-pink-400 to-rose-500',
      tags: ['🌸 Сухоцветы', '✨ Блёстки', '🎨 Красители'],
      pattern: '✨💫⭐'
    }
  };

  const data = categoryData[category];
  if (!data) return null;

  const Icon = data.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      to={`/category/${data.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Фон с градиентом и узором */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.bgGradient} transition-opacity duration-500 ${
        isHovered ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Декоративные элементы */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl transform rotate-12">
            {data.emoji}
          </div>
          <div className="absolute bottom-10 right-10 text-8xl opacity-20">
            {data.emoji}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl opacity-10">
            {data.pattern}
          </div>
        </div>
      </div>

      {/* Hover градиент */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.hoverGradient} transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Анимированные частицы при наведении */}
        {isHovered && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="relative z-10 p-8 flex flex-col h-full min-h-[320px]">
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Верхняя часть с иконкой и заголовком */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`
                relative w-16 h-16 rounded-2xl flex items-center justify-center
                bg-gradient-to-br ${data.hoverGradient} text-white
                transform group-hover:scale-110 transition-all duration-500
                shadow-lg group-hover:shadow-xl
              `}>
                <Icon className="text-3xl" />

                {/* Эффект пульсации */}
                <div className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-white" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {data.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    isHovered
                      ? 'bg-white/30 text-white'
                      : `bg-amber-100 ${data.textColor}`
                  } transition-all duration-300`}>
                    {data.articleCount} статей
                  </span>
                </div>
              </div>
            </div>

            {/* Эмодзи-иконка */}
            <div className={`
              text-4xl transform transition-all duration-500
              ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}
            `}>
              {data.emoji}
            </div>
          </div>

          {/* Описание */}
          <p className={`
            text-lg mb-6 line-clamp-2 transition-colors duration-300
            ${isHovered ? 'text-white' : 'text-gray-600'}
          `}>
            {data.description}
          </p>

          {/* Теги */}
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-300 transform hover:scale-105
                  ${isHovered
                    ? 'bg-white/30 text-white backdrop-blur'
                    : `bg-white ${data.textColor} border ${data.borderColor}`
                  }
                `}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Стрелка внизу */}
          <div className="absolute bottom-8 right-8">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center
              transition-all duration-500 transform
              ${isHovered
                ? 'bg-white translate-x-2 -translate-y-2'
                : 'bg-gray-100'
              }
            `}>
              <FaArrowRight className={`
                text-xl transition-colors duration-300
                ${isHovered ? 'text-amber-600' : 'text-gray-400'}
              `} />
            </div>
          </div>

          {/* Счетчик внизу слева */}
          <div className="absolute bottom-8 left-8 flex items-center gap-1">
            <span className={`
              text-sm font-medium transition-colors duration-300
              ${isHovered ? 'text-white/90' : 'text-gray-500'}
            `}>
              {data.articleCount}+ материалов
            </span>
          </div>
        </div>
      </div>

      {/* Анимированная граница снизу */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-1
        bg-gradient-to-r ${data.hoverGradient}
        transform scale-x-0 group-hover:scale-x-100
        transition-transform duration-500 origin-left
      `} />
    </Link>
  );
};

export default CategoryCard;