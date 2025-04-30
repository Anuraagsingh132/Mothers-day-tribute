
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Command, CommandInput } from '@/components/ui/command';
import SearchBar from '@/components/Home/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (query: string) => {
    setIsSearchOpen(false);
    navigate(`/?search=${encodeURIComponent(query)}`);
  };

  return (
    <header className="py-6 px-4 md:px-8 border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-center font-serif text-xl md:text-2xl mx-auto lg:mx-0 transition-transform hover:scale-105 duration-300">
            Mother's Day Tribute
          </Link>
          
          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-blog-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-blog-accent">Home</Link>
            <Link to="/categories" className="hover:text-blog-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-blog-accent">Categories</Link>
            <Link to="/about" className="hover:text-blog-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-blog-accent">About</Link>
            <Link to="/contact" className="hover:text-blog-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-blog-accent">Contact</Link>
          </nav>
          
          {/* Search button */}
          <Button 
            variant="ghost" 
            className="lg:block transition-transform hover:scale-105 duration-300" 
            aria-label="Search"
            onClick={toggleSearch}
          >
            <Search size={20} />
          </Button>
          
          {/* Mobile Navigation - conditionally rendered */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 flex flex-col pt-20 px-8 lg:hidden animate-fade-in">
              <Button 
                variant="ghost" 
                className="absolute top-6 left-4" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </Button>
              
              <nav className="flex flex-col space-y-6 text-2xl font-serif">
                <Link to="/" className="hover:text-blog-accent transition-colors duration-300" onClick={toggleMenu}>Home</Link>
                <Link to="/categories" className="hover:text-blog-accent transition-colors duration-300" onClick={toggleMenu}>Categories</Link>
                <Link to="/about" className="hover:text-blog-accent transition-colors duration-300" onClick={toggleMenu}>About</Link>
                <Link to="/contact" className="hover:text-blog-accent transition-colors duration-300" onClick={toggleMenu}>Contact</Link>
              </nav>
              
              <div className="mt-auto mb-8">
                <p className="text-center text-sm text-blog-muted-text">
                  © 2024 Mother's Day Tribute. All Rights Reserved.
                </p>
              </div>
            </div>
          )}

          {/* Search Dialog */}
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogContent className="sm:max-w-md">
              <Command className="rounded-lg border shadow-md">
                <SearchBar onSearch={handleSearch} initialQuery="" />
              </Command>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
