import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticleBySlug } from '../utils/markdownLoader';
import ReactMarkdown from 'react-markdown';
import Comments from '../components/Comments';
import Newsletter from '../components/Newsletter';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaFolder } from 'react-icons/fa';

export default function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    setArticle(getArticleBySlug(slug));
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold">Статья не найдена</h1>
      </div>
    );
  }

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
        <title>{article.title} | СвечнойБлог</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <article className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <FaCalendar className="text-amber-600" />
                {new Date(article.date).toLocaleDateString('ru-RU')}
              </span>
              <span className="flex items-center gap-1">
                <FaFolder className="text-amber-600" />
                {categoryNames[article.category] || article.category}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600">
              {article.excerpt}
            </p>
          </header>

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg mb-12"
          />

          <AdBanner slot="article-top" />

          <div className="prose prose-lg prose-amber max-w-none mt-12">
            <ReactMarkdown>
              {article.content}
            </ReactMarkdown>
          </div>

          <AdBanner slot="article-bottom" />

          <Comments articleSlug={slug} />
          <Newsletter />
        </div>
      </article>
    </>
  );
}