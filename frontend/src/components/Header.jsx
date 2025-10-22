import React from 'react';
import { Send } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem',
        height: '3.5rem',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '0.5px solid var(--border-light)',
        borderRadius: '9999px',
        margin: '1.5rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '12px' }}>
        <Send size={24} color="var(--telegram-blue)" />
        <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-primary)' }}>
          CT College Bot
        </span>
      </div>
      <nav
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
        className="desktop-nav"
      >
        <a className="nav-link" onClick={() => scrollToSection('features')}>
          Можливості
        </a>
        <a className="nav-link" onClick={() => scrollToSection('how-it-works')}>
          Як це працює
        </a>
        <a className="nav-link" onClick={() => scrollToSection('demo')}>
          Демо
        </a>
        <a
          href="https://t.me/ct_college_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginLeft: '8px', padding: '8px 16px', minHeight: '40px', fontSize: '0.9rem' }}
        >
          Відкрити бота
        </a>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          header {
            margin: 0.5rem !important;
            border-radius: 12px !important;
            padding: 0.75rem !important;
            height: auto !important;
          }
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;