
import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { categories, articles } from '@/data/articles';
import ArticleCard from '@/components/Home/ArticleCard';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  
  const filteredArticles = articles.filter(article => article.category === activeCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">Categories</h1>
        
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 ${
                  activeCategory === category
                    ? 'bg-blog-accent text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl font-serif mb-6">{activeCategory}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No articles found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Categories;
