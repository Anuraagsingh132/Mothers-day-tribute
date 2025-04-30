import articlesData from './articles.json';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  category: string;
  readingTime: string;
  image: string;
  featured: boolean;
}

export interface AuthorSocialLinks {
  twitter: string;
  facebook: string;
  instagram: string;
  github: string;
  linkedin: string;
}

export interface AuthorInfo {
  name: string;
  bio: string;
  image: string;
  socialLinks: AuthorSocialLinks;
}

// Clone the articles from JSON
let articles: Article[] = [...articlesData.articles];

// Randomly pick 3 to be featured
const shuffled = [...articles].sort(() => 0.5 - Math.random());
const featuredArticles = shuffled.slice(0, 3).map(a => a.id);

// Update the featured field
articles = articles.map(article => ({
  ...article,
  featured: featuredArticles.includes(article.id),
}));

export { articles };
export const categories = articlesData.categories;
export const authorInfo: AuthorInfo = articlesData.authorInfo;
