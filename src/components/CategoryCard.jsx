import { Link } from 'react-router-dom';
import { FaFire, FaFlask, FaLeaf, FaPalette, FaCubes, FaArrowRight } from 'react-icons/fa';
import { categoryImages } from '../assets/images/categories/categories';

const CategoryCard = ({ category }) => {
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
      tags: ['🌱 Соевый', '🥥 Кокосовый', '🌴 Пальмовый'],
      image: categoryImages.wax
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
      tags: ['🌿 Лаванда', '🍊 Цитрус', '🌲 Хвоя'],
      image: categoryImages.fragrances
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
      tags: ['🧵 Хлопок', '🪵 Дерево', '📄 Бумага'],
      image: categoryImages.wicks
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
      tags: ['🧴 Силикон', '🥤 Пластик', '⚙️ Металл'],
      image: categoryImages.molds
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
      tags: ['🌸 Сухоцветы', '✨ Блёстки', '🎨 Красители'],
      image: categoryImages.decor
    }
  };

  const data = categoryData[category];
  if (!data) return null;

  const Icon = data.icon;

  return (
    <Link
      to={`/category/${data.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Фоновое изображение (Base64) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${data.image})` }}
      />

      {/* Затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

      {/* Hover градиент */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.hoverGradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

      {/* Контент */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full min-h-[320px] sm:min-h-[360px] text-white">
        {/* Верхняя часть с иконкой и заголовком */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={`
              w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center
              bg-white/20 backdrop-blur-sm text-white
              transform group-hover:scale-110 group-hover:bg-white/30
              transition-all duration-500 shadow-lg flex-shrink-0
            `}>
              <Icon className="text-2xl sm:text-3xl" />
            </div>

            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold drop-shadow-lg">
                {data.name}
              </h3>
              <span className="inline-block text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-sm mt-1">
                {data.articleCount} статей
              </span>
            </div>
          </div>

          {/* Эмодзи */}
          <div className="hidden sm:block text-3xl sm:text-4xl drop-shadow-lg flex-shrink-0">
            {data.emoji}
          </div>
        </div>

        {/* Описание */}
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 drop-shadow-lg">
          {data.description}
        </p>

        {/* Теги */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Стрелка */}
        <div className="flex justify-end mt-auto">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:translate-x-2 group-hover:-translate-y-2">
            <FaArrowRight className="text-sm sm:text-xl text-white group-hover:text-amber-600 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;