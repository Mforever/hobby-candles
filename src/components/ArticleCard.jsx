import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegHeart, FaRegComment } from 'react-icons/fa';
import { getArticleImage } from '../assets/images/placeholders';

const ArticleCard = ({ slug, title, excerpt, date, category }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Дата неизвестна';
    try {
      return new Date(dateStr).toLocaleDateString('ru-RU', {
        day: 'numeric', month: 'long', year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  const categoryNames = {
    wax: 'Воск',
    fragrances: 'Ароматы',
    wicks: 'Фитили',
    molds: 'Формы',
    decor: 'Декор',
    business: 'Бизнес',
    base: 'Статья'
  };

  // 🎨 Градиенты для каждой категории
  const categoryGradients = {
    wax: 'from-amber-500/30 via-amber-300/20 to-transparent',
    fragrances: 'from-purple-500/30 via-purple-300/20 to-transparent',
    wicks: 'from-green-500/30 via-green-300/20 to-transparent',
    molds: 'from-blue-500/30 via-blue-300/20 to-transparent',
    decor: 'from-pink-500/30 via-pink-300/20 to-transparent',
    business: 'from-gray-500/30 via-gray-300/20 to-transparent'
  };

  const gradientClass = categoryGradients[category] || 'from-amber-500/30 via-amber-300/20 to-transparent';

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 border border-amber-100 hover:border-amber-300 hover:shadow-[inset_0_0_0_1px_rgba(217,119,6,0.2),0_4px_12px_rgba(0,0,0,0.05)]"
    >
      <Link to={`/article/${slug}`} className="block">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={getArticleImage(category)}
            alt={title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* 🎨 ГРАДИЕНТ ПРИ НАВЕДЕНИИ - РАЗНЫЙ ДЛЯ КАЖДОЙ КАТЕГОРИИ */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Категория */}
          <span className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider shadow-lg group-hover:bg-amber-700 transition-colors duration-300">
            {categoryNames[category] || category}
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-amber-600" />
              <time dateTime={date}>{formatDate(date)}</time>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><FaRegHeart /> 24</span>
              <span className="flex items-center gap-1"><FaRegComment /> 7</span>
            </div>
          </div>

          <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-amber-700 transition line-clamp-2">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 line-clamp-3 mb-3 sm:mb-4">
            {excerpt || 'Нет описания'}
          </p>

          <span className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-800 transition group">
            Читать далее
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;