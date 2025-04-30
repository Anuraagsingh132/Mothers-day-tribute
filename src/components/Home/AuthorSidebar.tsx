
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { authorInfo } from '@/data/articles';

const AuthorSidebar = () => {
  return (
    <aside className="bg-white p-6 border">
      <div className="text-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
          <img 
            src={authorInfo.image} 
            alt={authorInfo.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-serif text-xl mb-2">{authorInfo.name}</h3>
        <p className="text-sm text-blog-muted-text">
          {authorInfo.bio}
        </p>
      </div>
      
      <div className="flex justify-center space-x-3 mb-8">
        <a 
          href={authorInfo.socialLinks.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={16} />
        </a>
        <a 
          href={authorInfo.socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={16} />
        </a>
        <a 
          href={authorInfo.socialLinks.twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors"
          aria-label="Twitter"
        >
          <Twitter size={16} />
        </a>
      </div>
      
      <div>
        <h4 className="font-serif text-lg mb-4 text-center">Popular Destinations</h4>
        <div className="space-y-3">
          {["Childhood Memories", "Family Traditions", "Motherly Wisdom", "Special Celebrations"].map((item) => (
            <div key={item} className="bg-blog-light-bg p-3 text-center hover:bg-blog-accent hover:text-white transition-colors cursor-pointer">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AuthorSidebar;
