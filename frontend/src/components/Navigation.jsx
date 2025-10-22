import React from 'react';
import { Home, Calendar, Newspaper, User } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'assignments', label: 'Завдання', icon: Home },
    { id: 'schedule', label: 'Розклад', icon: Calendar },
    { id: 'news', label: 'Новини', icon: Newspaper },
    { id: 'profile', label: 'Профіль', icon: User },
  ];

  return (
    <nav className="navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <Icon size={24} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
