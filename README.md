# 🌸 Mother's Day Tribute Blog

A tribute blog built using **Next.js** to celebrate and honor mothers through inspiring stories. This project replicates a Figma design and showcases frontend skills such as UI implementation, routing, dynamic content rendering, and responsiveness.

---

## 📌 Project Overview

This mini-blog site simulates a Mother's Day tribute platform where users can explore heartfelt stories, filter by categories, and read full articles. Built with **Next.js** and **Tailwind CSS**, the blog focuses on clean design, modular architecture, and mobile-first responsiveness.

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Anuraagsingh132/Mothers-day-tribute.git
   cd Mothers-day-tribute
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Features Implemented

### 🏠 Home Page (`/`)
- **Hero Section Carousel** with 3–5 featured tribute stories
- **Explore by Category** with interactive category cards
- **Recent Articles** section showing:
  - Image
  - Title
  - 2–3 line excerpt
  - Reading time
  - Category tag
  - ‘Read More’ button linking to full story

- **Sidebar**
  - Author profile (static)
  - Highlighted destinations (static)

### 📖 Story Detail Page (`/articles/:id`)
- Dynamic routing for each article
- Full content display with:
  - Title
  - Author Name
  - Date
  - Category
  - Estimated reading time

### 🔍 Bonus Features
- **Search Bar**: Client-side filtering of articles by title or excerpt
- **Category Filter**: Clicking a category filters the articles shown

### 📁 Data Handling
- All content sourced from a local JSON file (`data/articles.json`)
- Each article object includes:
  - `id`, `title`, `excerpt`, `content`, `author`, `date`, `category`, `readingTime`, `imageUrl`

---

## 🚀 Live Deployment

🔗 [View Live](https://mothers-day-tribute-two.vercel.app/)

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) (if used)
- Local JSON for content storage

---

## 📂 Folder Structure

```
├── components/         # Reusable UI components
├── pages/              # Next.js routing pages
│   ├── index.tsx       # Home Page
│   └── articles/       # Dynamic article routes
├── public/             # Static assets
├── data/               # JSON data for articles
├── styles/             # Global styles
├── README.md
├── package.json
└── next.config.js
```

---

## ✍️ Author

Made with ❤️ for the Interax AI Mother's Day Tribute Challenge  
**Anuraag Singh** – [LinkedIn](https://www.linkedin.com/in/anuraag-singh-78b286306/) • [GitHub Repo](https://github.com/Anuraagsingh132/Mothers-day-tribute)

