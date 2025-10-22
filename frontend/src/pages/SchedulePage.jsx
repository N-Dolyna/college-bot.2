import React, { useState } from 'react';
import { mockSchedule } from '../mockData';
import ScheduleDay from '../components/ScheduleDay';
import './SchedulePage.css';

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="schedule-page fade-in">
      <h1 className="page-title">Розклад занять</h1>

      <div className="days-tabs">
        {mockSchedule.map((day, index) => (
          <button
            key={index}
            className={`day-tab ${selectedDay === index ? 'active' : ''}`}
            onClick={() => setSelectedDay(index)}
          >
            <div className="day-name">{day.day}</div>
            <div className="day-date">{new Date(day.date).getDate()}</div>
          </button>
        ))}
      </div>

      <ScheduleDay day={mockSchedule[selectedDay]} />
    </div>
  );
};

export default SchedulePage;
