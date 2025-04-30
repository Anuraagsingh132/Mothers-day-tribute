
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import ArticleHeader from '@/components/Article/ArticleHeader';
import ArticleContent from '@/components/Article/ArticleContent';
import RelatedArticles from '@/components/Article/RelatedArticles';
import AuthorSidebar from '@/components/Home/AuthorSidebar';
import Newsletter from '@/components/Home/Newsletter';
import { articles } from '@/data/articles';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = articles.find(article => article.id === id);
  
  useEffect(() => {
    if (!article) {
      navigate('/not-found', { replace: true });
    }
    
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [article, navigate]);
  
  if (!article) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <ArticleHeader article={article} />
            <ArticleContent article={article} />
            <RelatedArticles currentArticle={article} articles={articles} />
          </div>
          
          <div className="lg:w-1/3 space-y-8">
            <AuthorSidebar />
            <Newsletter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
