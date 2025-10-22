import React from 'react';
import { MapPin, Video, User } from 'lucide-react';
import './ScheduleDay.css';

const ScheduleDay = ({ day }) => {
  if (!day || !day.lessons || day.lessons.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🎉</div>
        <div className="empty-state-text">Віхідний день</div>
      </div>
    );
  }

  return (
    <div className="schedule-day">
      {day.lessons.map((lesson) => (
        <div key={lesson.id} className="lesson-card card">
          <div className="lesson-header">
            <div className="lesson-time">{lesson.time}</div>
            <span className={`badge badge-${lesson.type}`}>
              {lesson.type === 'lecture' && 'Лекція'}
              {lesson.type === 'practice' && 'Практика'}
              {lesson.type === 'consultation' && 'Консультація'}
            </span>
          </div>

          <div className="lesson-subject">{lesson.subject}</div>

          <div className="lesson-details">
            <div className="lesson-detail">
              <User size={16} />
              <span>{lesson.teacher}</span>
            </div>
            <div className="lesson-detail">
              <MapPin size={16} />
              <span>Ауд. {lesson.room}</span>
            </div>
          </div>

          {lesson.link && (
            <a
              href={lesson.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-link btn btn-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <Video size={18} />
              Підключитися онлайн
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScheduleDay;
