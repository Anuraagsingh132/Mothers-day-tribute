
import Layout from '@/components/Layout/Layout';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { authorInfo } from '@/data/articles';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif mb-6">About Me</h1>
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
              <img 
                src={authorInfo.image} 
                alt={authorInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-serif mb-3">{authorInfo.name}</h2>
            
            <div className="flex justify-center space-x-4 mb-6">
              <a 
                href={authorInfo.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={authorInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={authorInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white p-2 rounded-full hover:bg-blog-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              {authorInfo.bio}
            </p>
            
            <h3 className="text-xl font-serif mt-8 mb-4">About Me</h3>
            <p>
              I'm Anuraag Kumar Singh, a budding frontend developer with a passion for storytelling and 
              building beautiful, meaningful web experiences. This project is a heartfelt tribute to 
              all mothers — and a technical challenge to recreate a rich, responsive blog from a Figma 
              design using Next.js.
            </p>
            
            <h3 className="text-xl font-serif mt-8 mb-4">Why This Project?</h3>
            <p>
              The Mother's Day Tribute Blog isn't just a frontend challenge — it's an emotional one. 
              I wanted to create a platform where heartfelt stories can be shared, memories celebrated, 
              and love for our mothers expressed in a visually engaging way. Every card, carousel, and 
              article layout here is built with care and a touch of gratitude.
            </p>
            
            <p>
              From implementing a fully functional article carousel to dynamic story pages and category 
              filters, this blog helped me refine my frontend skills while honoring someone who means 
              the world to all of us — our moms.
            </p>
            
            <h3 className="text-xl font-serif mt-8 mb-4">What You'll Find Here</h3>
            <p>
              The blog features touching tribute stories, categorized inspirations, and a clean reading 
              experience optimized for all devices. Readers can explore stories by category, dive into 
              full articles, or just scroll through the heartfelt carousel on the homepage.
            </p>
            
            <p>
              All articles are sourced from a local JSON file — no backend, no distractions. Just pure 
              frontend development with a focus on design, functionality, and performance.
            </p>
            
            <p className="mt-8 text-center italic">
              "A mother's love is the first code we ever understand." — Anuraag Kumar Singh
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
