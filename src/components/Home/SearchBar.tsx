
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

const SearchBar = ({ onSearch, initialQuery = '' }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  
  // Update local state when initialQuery changes (from URL)
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex w-full transition-all duration-300 ${
        isFocused ? 'shadow-md transform scale-[1.01]' : ''
      }`}
    >
      <input
        type="text"
        placeholder="Search for articles..."
        className="flex-grow p-3 border border-r-0 border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-accent transition-all duration-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label="Search articles"
      />
      <Button 
        type="submit" 
        className="bg-black hover:bg-blog-accent text-white rounded-none transition-all duration-300"
        aria-label="Submit search"
      >
        <Search size={18} className="animate-pulse" />
        <span className="ml-2 hidden sm:inline">Search</span>
      </Button>
    </form>
  );
};

export default SearchBar;
