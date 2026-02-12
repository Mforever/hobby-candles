import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';

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

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-amber-100">
      <Link to={`/article/${slug}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image || 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format'}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            loading="lazy"
          />
          <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
            {categoryNames[category] || category}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <FaRegCalendarAlt className="mr-2" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <h2 className="font-serif text-2xl font-bold mb-3 group-hover:text-amber-700 transition line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 line-clamp-3 mb-4">{excerpt}</p>
          <span className="text-amber-600 font-medium hover:text-amber-800 transition">
            Читать далее →
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;