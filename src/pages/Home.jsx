import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import CategoryCard from '../components/CategoryCard';
import Newsletter from '../components/Newsletter';
import Hero from '../components/Hero';
import { getAllArticles } from '../utils/markdownLoader';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getAllArticles().slice(0, 6));
  }, []);

  const categories = ['wax', 'fragrances', 'wicks', 'molds', 'decor'];

  return (
    <>
      <Helmet>
        <title>СвечнойБлог | Всё о создании свечей своими руками</title>
        <meta name="description" content="Блог о свечеварении: рецепты, техники, обзоры материалов" />
      </Helmet>

      <Hero />

      {/* Категории */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm mb-4 block">
              Категории
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Выбери свою <span className="text-amber-600">рубрику</span>
            </h2>
            <p className="text-xl text-gray-600">
              5 направлений, 50+ статей — всё для твоего творчества
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div
                key={cat}
                className="transform transition-all duration-700"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slideUp 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <CategoryCard category={cat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            Новые <span className="text-amber-600">статьи</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={article.slug}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}