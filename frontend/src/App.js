import React, { useState, useEffect } from 'react';
import './App.css';
import AssignmentsPage from './pages/AssignmentsPage';
import SchedulePage from './pages/SchedulePage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import Navigation from './components/Navigation';
import { mockUser } from './mockData';

function App() {
  const [activeTab, setActiveTab] = useState('assignments');
  const [user, setUser] = useState(mockUser);
  const [tg, setTg] = useState(null);

  useEffect(() => {
    // Ініціалізація Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      const telegram = window.Telegram.WebApp;
      telegram.ready();
      telegram.expand();
      
      // Встановлюємо колір header bar під Telegram тему
      telegram.setHeaderColor('#ffffff');
      telegram.setBackgroundColor('#f5f5f5');
      
      setTg(telegram);

      // Якщо є дані користувача з Telegram
      if (telegram.initDataUnsafe && telegram.initDataUnsafe.user) {
        const telegramUser = telegram.initDataUnsafe.user;
        setUser({
          ...user,
          id: telegramUser.id,
          firstName: telegramUser.first_name,
          lastName: telegramUser.last_name || '',
          username: telegramUser.username || '',
        });
      }
    }
  }, []);

  const renderPage = () => {
    switch (activeTab) {
      case 'assignments':
        return <AssignmentsPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'news':
        return <NewsPage />;
      case 'profile':
        return <ProfilePage user={user} setUser={setUser} />;
      default:
        return <AssignmentsPage />;
    }
  };

  return (
    <div className="telegram-mini-app">
      <div className="app-content">{renderPage()}</div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
