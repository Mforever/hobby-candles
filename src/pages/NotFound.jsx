import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-amber-600 mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Страница не найдена
        </h2>
        <p className="text-gray-600 mb-8">
          Возможно, она была удалена или вы перешли по неверной ссылке.
        </p>
        <Link
          to="/"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-xl hover:bg-amber-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}