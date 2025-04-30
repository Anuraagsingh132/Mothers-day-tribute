
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import HeroCarousel from '@/components/Home/HeroCarousel';
import CategorySection from '@/components/Home/CategorySection';
import ArticlesGrid from '@/components/Home/ArticlesGrid';
import AuthorSidebar from '@/components/Home/AuthorSidebar';
import Newsletter from '@/components/Home/Newsletter';
import SearchBar from '@/components/Home/SearchBar';
import { articles } from '@/data/articles';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  // Effect to handle search from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    if (query) {
      setSearchQuery(query);
      toast({
        title: "Search Results",
        description: `Showing results for "${query}"`,
      });
    }
  }, [location.search]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Clear category filter when searching
    
    if (query.trim()) {
      toast({
        title: "Search Results",
        description: `Showing results for "${query}"`,
      });
    }
  };
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <HeroCarousel articles={articles} />
      
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="mb-8 animate-fade-in">
          <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
        </div>
        
        <CategorySection 
          onSelectCategory={setSelectedCategory} 
          selectedCategory={selectedCategory} 
        />
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 animate-fade-in">
            <ArticlesGrid 
              articles={filteredArticles} 
              selectedCategory={selectedCategory} 
            />
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-serif mb-2">No articles found</h3>
                <p className="text-blog-muted-text">
                  Try adjusting your search query or category selection.
                </p>
              </div>
            )}
          </div>
          
          <div className="lg:w-1/3 space-y-8 animate-slide-in">
            <AuthorSidebar />
            <Newsletter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
