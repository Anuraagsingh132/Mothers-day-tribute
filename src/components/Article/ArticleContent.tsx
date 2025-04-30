
import { Article } from '@/data/articles';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  return (
    <div className="article-content">
      <div className="mb-8">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
      
      <div 
        className="prose max-w-none" 
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default ArticleContent;
