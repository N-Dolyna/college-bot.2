import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`news-card card ${news.important ? 'important' : ''}`}>
      <div className="news-header" onClick={() => setExpanded(!expanded)}>
        <div className="news-title-section">
          {news.important && <AlertCircle size={20} className="important-icon" />}
          <div>
            <div className="news-title">{news.title}</div>
            <div className="news-date">{formatDate(news.date)}</div>
          </div>
        </div>
        <button className="expand-btn">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {expanded && <div className="news-content">{news.content}</div>}
    </div>
  );
};

export default NewsCard;
