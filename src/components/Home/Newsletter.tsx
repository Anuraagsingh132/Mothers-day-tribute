
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll keep you updated with the latest stories and motherhood wisdom.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 border">
      <h4 className="font-serif text-lg mb-4 text-center">Newsletter</h4>
      <p className="text-sm text-blog-muted-text mb-4 text-center">
        Subscribe to receive exclusive content updates, motherhood tips, and celebration ideas!
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-accent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-black hover:bg-blog-accent text-white rounded-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
