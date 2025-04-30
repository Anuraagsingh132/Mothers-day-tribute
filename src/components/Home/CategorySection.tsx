
import { useState } from 'react';
import { categories } from '@/data/articles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

const CategorySection = ({ onSelectCategory, selectedCategory }: CategorySectionProps) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  
  const nextCategories = () => {
    if (scrollIndex < categories.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };
  
  const prevCategories = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">Explore by category</h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${scrollIndex * 25}%)` }}
            >
              {categories.map((category) => (
                <div key={category} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 mb-4">
                  <button
                    onClick={() => onSelectCategory(category === selectedCategory ? null : category)}
                    className={`w-full h-32 flex items-center justify-center p-4 text-center transition-all hover:transform hover:-translate-y-1 ${
                      category === selectedCategory
                        ? 'bg-blog-accent text-white'
                        : 'bg-black text-white hover:bg-blog-accent-dark'
                    }`}
                  >
                    <span className="font-serif text-lg">{category}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {scrollIndex > 0 && (
            <button
              onClick={prevCategories}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors z-10"
              aria-label="Previous categories"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {scrollIndex < categories.length - 4 && (
            <button
              onClick={nextCategories}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors z-10"
              aria-label="Next categories"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
        
        {selectedCategory && (
          <div className="mt-6 text-center">
            <button
              onClick={() => onSelectCategory(null)}
              className="text-sm inline-flex items-center text-blog-accent hover:text-blog-accent-dark"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
