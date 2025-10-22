import React from 'react';
import { Clock, Package, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Економія часу',
    description: 'Не витрачай час на пошук інформації — все у одному місці',
  },
  {
    icon: Package,
    title: 'Все в одному місці',
    description: 'Розклад, завдання, матеріали та сповіщення в Telegram',
  },
  {
    icon: Smartphone,
    title: 'Простий інтерфейс',
    description: 'Зрозумілий і зручний дизайн для кожного студента',
  },
];

const Benefits = () => {
  return (
    <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
            Переваги
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Чому студенти обирають CT College Bot
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--gradient-button)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <Icon size={32} color="white" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem' }}>
                  {benefit.title}
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;