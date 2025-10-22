import React from 'react';
import { Send, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-section)',
        borderTop: '1px solid var(--border-light)',
        padding: '3rem 1.5rem 2rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <Send size={24} color="var(--telegram-blue)" />
              <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-primary)' }}>
                CT College Bot
              </span>
            </div>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
              Telegram Mini App для студентів Харківського комп'ютерно-технологічного фахового коледжу НТУ "ХПІ"
            </p>
          </div>

          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', fontSize: '1rem' }}>
              Навігація
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="body-small"
                style={{ color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}
              >
                Можливості
              </a>
              <a
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="body-small"
                style={{ color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}
              >
                Як це працює
              </a>
              <a
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="body-small"
                style={{ color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}
              >
                Демо
              </a>
            </div>
          </div>

          <div>
            <h4 className="heading-3" style={{ marginBottom: '1rem', fontSize: '1rem' }}>
              Контакти
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="https://t.me/ct_college_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="body-small"
                style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                <Send size={16} />
                Telegram Bot
              </a>
              <a
                href="mailto:support@ctcollege.edu.ua"
                className="body-small"
                style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                <Mail size={16} />
                support@ctcollege.edu.ua
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '2rem',
            textAlign: 'center',
          }}
        >
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            © 2025 CT College Bot. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;