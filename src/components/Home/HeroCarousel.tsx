
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '@/data/articles';
import { Button } from '@/components/ui/button';

interface HeroCarouselProps {
  articles: Article[];
}

const HeroCarousel = ({ articles }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const featuredArticles = articles.filter(article => article.featured);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
    );
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredArticles.length - 1 : prevIndex - 1
    );
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  // Auto advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (featuredArticles.length === 0) return null;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-blog-light-bg">
      {featuredArticles.map((article, index) => (
        <div
          key={article.id}
          className={`absolute inset-0 flex transition-all duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
          }`}
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${article.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 md:px-8 flex items-center">
            <div className={`bg-white p-6 md:p-8 max-w-lg mx-auto md:mx-0 md:ml-16 shadow-lg transform transition-all duration-700 ${
              index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-sm uppercase tracking-wider mb-2 text-blog-accent">{article.category}</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium mb-4">
                {article.title}
              </h2>
              <p className="text-blog-muted-text mb-6">
                {article.excerpt}
              </p>
              <Link to={`/articles/${article.id}`}>
                <Button variant="default" className="bg-black hover:bg-blog-accent text-white rounded-none transition-all duration-300 hover:scale-105">
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors hover:scale-110 duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors hover:scale-110 duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 700);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
