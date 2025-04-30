
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

export const articles: Article[] = articlesData.articles;
export const categories = articlesData.categories;
export const authorInfo: AuthorInfo = articlesData.authorInfo;
