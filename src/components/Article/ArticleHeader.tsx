
import { Article } from '@/data/articles';

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <span className="text-sm uppercase tracking-wider text-blog-muted-text">{article.category}</span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
        {article.title}
      </h1>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img 
            src={article.author.image} 
            alt={article.author.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{article.author.name}</p>
          <div className="flex text-blog-muted-text text-sm">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readingTime} read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
