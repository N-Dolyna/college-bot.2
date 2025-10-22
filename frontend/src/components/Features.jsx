import React from 'react';
import { Calendar, FileText, Book, Bell, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Розклад занять',
    description: 'Завжди під рукою — перевіряй свій розклад у будь-який момент',
  },
  {
    icon: FileText,
    title: 'Домашні завдання',
    description: 'Дедлайни і нагадування, щоб не пропустити жодного завдання',
  },
  {
    icon: Book,
    title: 'Навчальні матеріали',
    description: 'Інтеграція з Google Classroom для швидкого доступу до матеріалів',
  },
  {
    icon: Bell,
    title: 'Сповіщення',
    description: 'Отримуй нагадування про пари, завдання та важливі події',
  },
  {
    icon: TrendingUp,
    title: 'Прогрес',
    description: 'Стеж за своєю успішністю та виконанням завдань',
  },
];

const Features = () => {
  return (
    <section id="features" style={{ padding: '5rem 1.5rem', background: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
            Опис можливостей
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Все, що потрібно для ефективного навчання у твоєму смартфоні
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem 1.5rem',
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--accent-wash)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={24} color="var(--telegram-blue)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;