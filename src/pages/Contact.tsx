
import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif mb-6">Contact Me</h1>
            <p className="mb-6 text-blog-muted-text">
              Have a story to share, a question to ask, or just want to connect? 
              I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.
            </p>
            
            <div className="mb-8">
              <img 
                src="/contact-us.svg" 
                alt="Contact" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose max-w-none">
              <p>
                Whether you're a mother with wisdom to share, a child with a heartwarming story about your mom, 
                or someone interested in contributing to this celebration of motherhood, your message is welcome here.
              </p>
              
              <p>
                I'm particularly interested in hearing stories that highlight the diverse experiences of motherhood 
                across different cultures, generations, and life circumstances.
              </p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-accent"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-accent"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-accent"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={6}
                  className="w-full p-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blog-accent"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-blog-accent text-white rounded-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
