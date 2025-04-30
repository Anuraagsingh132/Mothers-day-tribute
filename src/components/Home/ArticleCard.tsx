
import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';
import { Button } from '@/components/ui/button';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="article-card mb-8 overflow-hidden">
      <Link to={`/articles/${article.id}`} className="block">
        <div className="mb-4 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="px-1">
        <div className="mb-3 flex items-center">
          <span className="text-xs uppercase tracking-wider text-blog-muted-text">{article.category}</span>
          <span className="mx-2 text-blog-muted-text">•</span>
          <span className="text-xs text-blog-muted-text">{article.readingTime} read</span>
        </div>
        <h3 className="text-xl font-serif mb-3">
          <Link to={`/articles/${article.id}`} className="hover:text-blog-accent">
            {article.title}
          </Link>
        </h3>
        <p className="text-blog-muted-text mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <Link to={`/articles/${article.id}`}>
          <Button variant="outline" className="border-black hover:bg-black hover:text-white rounded-none transition-colors">
            Read more
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
