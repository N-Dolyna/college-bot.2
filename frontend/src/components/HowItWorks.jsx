import React from 'react';
import { Send, Key, Zap } from 'lucide-react';

const steps = [
  {
    icon: Send,
    title: 'Відкрити бота у Telegram',
    description: 'Знайди @ct_college_bot у Telegram або натисни кнопку "Відкрити бота"',
  },
  {
    icon: Key,
    title: 'Авторизуватись',
    description: 'Увійди через Google Classroom для синхронізації з навчальними матеріалами',
  },
  {
    icon: Zap,
    title: 'Отримуй розклад автоматично',
    description: 'Бот автоматично завантажить твій розклад, завдання та нагадування',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ padding: '5rem 1.5rem', background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
            Як це працює
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Всього три прості кроки до розумного навчання
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
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--gradient-button)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                  }}
                >
                  {index + 1}
                </div>
                <div
                  style={{
                    marginTop: '3rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '12px',
                    padding: '2rem',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: 'var(--accent-wash)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                    }}
                  >
                    <Icon size={28} color="var(--telegram-blue)" />
                  </div>
                  <h3 className="heading-3" style={{ marginBottom: '0.75rem' }}>
                    {step.title}
                  </h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;