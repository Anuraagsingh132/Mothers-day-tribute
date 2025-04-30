
import { useState } from 'react';
import { Article } from '@/data/articles';
import ArticleCard from './ArticleCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArticlesGridProps {
  articles: Article[];
  title?: string;
  selectedCategory: string | null;
}

const ArticlesGrid = ({ articles, title = "Recent Articles", selectedCategory }: ArticlesGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  
  // Filter articles if category is selected
  const filteredArticles = selectedCategory 
    ? articles.filter(article => article.category === selectedCategory)
    : articles;
  
  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif">
            {selectedCategory ? `Articles in ${selectedCategory}` : title}
          </h2>
          
          {totalPages > 1 && (
            <div className="flex space-x-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${
                  currentPage === 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-black hover:bg-gray-100'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${
                  currentPage === totalPages 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-black hover:bg-gray-100'
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-blog-muted-text">No articles found in this category.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      currentPage === 1 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'bg-black text-white hover:bg-blog-accent'
                    }`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentPage(index + 1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        currentPage === index + 1
                          ? 'bg-black text-white'
                          : 'border border-gray-200 hover:bg-gray-100'
                      }`}
                      aria-label={`Page ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      currentPage === totalPages 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'bg-black text-white hover:bg-blog-accent'
                    }`}
                    aria-label="Next page"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ArticlesGrid;
