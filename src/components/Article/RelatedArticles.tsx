
import { Article } from '@/data/articles';
import ArticleCard from '../Home/ArticleCard';

interface RelatedArticlesProps {
  currentArticle: Article;
  articles: Article[];
}

const RelatedArticles = ({ currentArticle, articles }: RelatedArticlesProps) => {
  // Find articles in the same category, excluding the current article
  const relatedArticles = articles
    .filter(article => 
      article.category === currentArticle.category && 
      article.id !== currentArticle.id
    )
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-serif mb-8">Related Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
