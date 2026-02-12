import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegHeart, FaRegComment } from 'react-icons/fa';
import { articleImages } from '../assets/images/categories/categories';

const ArticleCard = ({ slug, title, excerpt, image, date, category }) => {
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('ru-RU', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  const categoryNames = {
    wax: 'Воск',
    fragrances: 'Ароматы',
    wicks: 'Фитили',
    molds: 'Формы',
    decor: 'Декор'
  };

  // Используем локальное изображение или плейсхолдер
  const getImage = () => {
    if (image && !image.includes('unsplash')) return image;

    if (category === 'wax') return articleImages.soevye;
    if (category === 'fragrances') return articleImages.lavanda;
    if (category === 'wicks') return articleImages.fitil;
    return articleImages.articlePlaceholder;
  };

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-amber-300 hover:-translate-y-2">
      <Link to={`/article/${slug}`} className="block">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={getImage()}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider shadow-lg">
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
            {excerpt}
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