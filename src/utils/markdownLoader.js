// Загрузчик Markdown файлов
const articlesContext = import.meta.glob('../data/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

export const getAllArticles = () => {
  const articles = [];

  for (const path in articlesContext) {
    try {
      const content = articlesContext[path];
      const slug = path.split('/').pop().replace('.md', '');

      // Парсим frontmatter
      const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
      const match = content.match(frontmatterRegex);

      let metadata = {
        title: 'Без названия',
        excerpt: '',
        image: '',
        date: new Date().toISOString().split('T')[0],
        category: 'base'
      };
      let markdown = content;

      if (match) {
        const frontmatter = match[1];
        markdown = content.replace(frontmatterRegex, '').trim();

        // Парсим YAML-like
        frontmatter.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(':').trim().replace(/^['"]|['"]$/g, '');
          }
        });
      }

      articles.push({
        slug,
        ...metadata,
        content: markdown || 'Контент скоро появится'
      });
    } catch (error) {
      console.error(`Ошибка загрузки ${path}:`, error);
    }
  }

  // Сортируем по дате (новые сверху)
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getArticleBySlug = (slug) => {
  return getAllArticles().find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  return getAllArticles().filter(article => article.category === category);
};

// Для отладки - выведи в консоль количество статей
console.log(`📚 Загружено статей: ${getAllArticles().length}`);