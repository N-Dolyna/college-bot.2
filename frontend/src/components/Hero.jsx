import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        background: 'var(--gradient-hero)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        padding: '7rem 1.5rem 3rem',
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-wash)',
            padding: '8px 16px',
            borderRadius: '9999px',
            marginBottom: '2rem',
          }}
        >
          <Send size={18} color="var(--telegram-blue)" />
          <span className="body-small" style={{ color: 'var(--accent-text)', fontWeight: 500 }}>
            Telegram Mini App для студентів
          </span>
        </div>

        <h1 className="heading-1" style={{ marginBottom: '1.5rem' }}>
          CT College Bot — твій помічник у навчанні
        </h1>

        <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          Бот, що збирає розклад, домашні завдання, сповіщення та навчальні матеріали — усе в одному місці.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://t.me/ct_college_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '16px 32px', fontSize: '1.125rem' }}
          >
            <Send size={20} />
            Відкрити в Telegram
          </a>
          <button
            className="btn-secondary"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ padding: '16px 32px', fontSize: '1.125rem' }}
          >
            Дізнатися більше
            <ArrowRight size={20} />
          </button>
        </div>

        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBsZWFybmluZ3xlbnwwfHx8fDE3NjExMjUyODB8MA&ixlib=rb-4.1.0&q=85"
            alt="Навчання з мобільним додатком"
            style={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;