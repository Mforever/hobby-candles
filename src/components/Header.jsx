import { Link, NavLink } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { useState } from 'react';

const categories = [
  { name: 'Воск', slug: 'wax' },
  { name: 'Ароматы', slug: 'fragrances' },
  { name: 'Фитили', slug: 'wicks' },
  { name: 'Формы', slug: 'molds' },
  { name: 'Декор', slug: 'decor' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-amber-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <FaFire className="text-3xl text-amber-600 group-hover:text-amber-700 transition" />
            <span className="font-serif text-2xl font-bold text-gray-900">
              Свечной<span className="text-amber-600">Блог</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {categories.map(cat => (
              <NavLink
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-amber-600 ${
                    isActive ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-700'
                  }`
                }
              >
                {cat.name}
              </NavLink>
            ))}
            <NavLink to="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600">
              О проекте
            </NavLink>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-amber-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100">
            <nav className="flex flex-col space-y-3">
              {categories.map(cat => (
                <NavLink
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="text-gray-700 hover:text-amber-600 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.name}
                </NavLink>
              ))}
              <NavLink to="/about" className="text-gray-700 hover:text-amber-600 px-2 py-1">
                О проекте
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}