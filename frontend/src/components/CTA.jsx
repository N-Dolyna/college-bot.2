import React from 'react';
import { Send } from 'lucide-react';

const CTA = () => {
  return (
    <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-page)' }}>
      <div className="container">
        <div
          style={{
            background: 'var(--gradient-hero)',
            borderRadius: '24px',
            padding: '4rem 2rem',
            textAlign: 'center',
            border: '1px solid var(--border-light)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
            Почни навчання розумніше з CT College Bot
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Приєднуйся до тисяч студентів, які вже користуються ботом
          </p>
          <a
            href="https://t.me/ct_college_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '18px 36px', fontSize: '1.125rem' }}
          >
            <Send size={20} />
            Відкрити бота в Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;