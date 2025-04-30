
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-serif text-xl md:text-2xl">
              Mother's Day Tribute
            </Link>
            <p className="text-sm text-blog-muted-text mt-2">
              Celebrating the wisdom, love, and stories of mothers everywhere.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t pt-6 pb-4">
          <nav className="flex flex-wrap justify-center space-x-8 mb-6">
            <Link to="/" className="hover:text-blog-accent mb-2">Home</Link>
            <Link to="/categories" className="hover:text-blog-accent mb-2">Categories</Link>
            <Link to="/about" className="hover:text-blog-accent mb-2">About</Link>
            <Link to="/contact" className="hover:text-blog-accent mb-2">Contact</Link>
          </nav>
          
          <p className="text-center text-sm text-blog-muted-text">
            © 2024 Mother's Day Tribute. All Rights Reserved.
          </p>
          
          <p className="text-center text-sm text-blog-muted-text mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-blog-accent" /> for all the amazing mothers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
