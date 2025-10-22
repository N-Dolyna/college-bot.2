import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Demo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDB8fHx8MTc2MTA1NTYxMXww&ixlib=rb-4.1.0&q=85',
      title: 'Спільне навчання',
      description: 'Студенти разом використовують технології для навчання',
    },
    {
      image: 'https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBsZWFybmluZ3xlbnwwfHx8fDE3NjExMjUyODB8MA&ixlib=rb-4.1.0&q=85',
      title: 'Мобільне навчання',
      description: 'Учися будь-де і будь-коли зі свого смартфона',
    },
    {
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBsZWFybmluZ3xlbnwwfHx8fDE3NjExMjUyODB8MA&ixlib=rb-4.1.0&q=85',
      title: 'Зручний доступ',
      description: 'Всі навчальні матеріали завжди під рукою',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="demo" style={{ padding: '5rem 1.5rem', background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-2" style={{ marginBottom: '1rem' }}>
            Демонстрація
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Подивіться, як виглядає бот в дії
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1.5rem',
              }}
            />
            <h3 className="heading-3" style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
              {slides[currentSlide].title}
            </h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
              {slides[currentSlide].description}
            </p>
          </div>

          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <ChevronLeft size={24} color="var(--text-primary)" />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <ChevronRight size={24} color="var(--text-primary)" />
          </button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '2rem',
            }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentSlide === index ? 'var(--telegram-blue)' : 'var(--border-medium)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </div>

          <style>{`
            @media (max-width: 968px) {
              button[style*="position: absolute"] {
                display: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Demo;