import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';
import { getAllArticles } from '../utils/markdownLoader';
import { FaFire, FaLeaf, FaPalette, FaFlask } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getAllArticles().slice(0, 6));
  }, []);

  const categories = [
    { name: 'Воск', slug: 'wax', icon: FaFire, color: 'bg-amber-500' },
    { name: 'Ароматы', slug: 'fragrances', icon: FaFlask, color: 'bg-purple-500' },
    { name: 'Фитили', slug: 'wicks', icon: FaLeaf, color: 'bg-green-500' },
    { name: 'Декор', slug: 'decor', icon: FaPalette, color: 'bg-pink-500' },
  ];

  return (
    <>
      <Helmet>
        <title>СвечнойБлог | Всё о создании свечей своими руками</title>
        <meta name="description" content="Блог о свечеварении: рецепты, техники, обзоры материалов. Научись создавать ароматические свечи с нуля." />
      </Helmet>

      <section className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Создай свою <span className="text-amber-600">идеальную свечу</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Рецепты, техники и секреты от опытных свечеваров.
              Всё, что нужно для творчества.
            </p>
            <Link to="/category/wax" className="btn-primary inline-block">
              Начать знакомство
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Популярные <span className="text-amber-600">рубрики</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition border border-amber-100 text-center"
                >
                  <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                    <Icon className="text-white text-3xl" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{cat.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Новые <span className="text-amber-600">статьи</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}