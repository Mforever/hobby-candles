import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getArticlesByCategory } from '../utils/markdownLoader';
import { Helmet } from 'react-helmet-async';

export default function Category() {
  const { cat } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getArticlesByCategory(cat));
  }, [cat]);

  const categoryNames = {
    wax: 'Воск',
    fragrances: 'Ароматы',
    wicks: 'Фитили',
    molds: 'Формы',
    decor: 'Декор'
  };

  return (
    <>
      <Helmet>
        <title>{categoryNames[cat]} | СвечнойБлог</title>
      </Helmet>

      <section className="bg-amber-50 py-12 md:py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {categoryNames[cat] || cat}
          </h1>
          <p className="text-xl text-gray-700">
            {articles.length} {articles.length === 1 ? 'статья' : articles.length < 5 ? 'статьи' : 'статей'}
          </p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </>
  );
}