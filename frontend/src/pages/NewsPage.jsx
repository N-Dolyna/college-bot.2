import React, { useState } from 'react';
import { mockNews } from '../mockData';
import NewsCard from '../components/NewsCard';
import './NewsPage.css';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Всі новини' },
    { id: 'schedule', label: 'Розклад' },
    { id: 'event', label: 'Події' },
    { id: 'materials', label: 'Матеріали' },
  ];

  const filteredNews =
    selectedCategory === 'all'
      ? mockNews
      : mockNews.filter((news) => news.category === selectedCategory);

  return (
    <div className="news-page fade-in">
      <h1 className="page-title">Новини та оголошення</h1>

      <div className="categories-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="news-list">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => <NewsCard key={news.id} news={news} />)
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">📰</div>
            <div className="empty-state-text">Немає новин за вибраною категорією</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
