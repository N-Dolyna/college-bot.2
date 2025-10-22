import React, { useState } from 'react';
import { mockAssignments, mockSubjects } from '../mockData';
import AssignmentCard from '../components/AssignmentCard';
import './AssignmentsPage.css';

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState(mockAssignments);
  const [selectedSubject, setSelectedSubject] = useState('Всі предмети');
  const [showCompleted, setShowCompleted] = useState(true);

  const toggleAssignment = (id) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
      )
    );
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const subjectMatch = selectedSubject === 'Всі предмети' || assignment.subject === selectedSubject;
    const completedMatch = showCompleted || !assignment.completed;
    return subjectMatch && completedMatch;
  });

  const activeCount = assignments.filter((a) => !a.completed).length;

  return (
    <div className="assignments-page fade-in">
      <div className="page-header">
        <h1 className="page-title">Домашні завдання</h1>
        <div className="assignments-count">
          Активних: <span className="count-badge">{activeCount}</span>
        </div>
      </div>

      <div className="filters">
        <select
          className="select"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {mockSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          <span>Показувати виконані</span>
        </label>
      </div>

      <div className="assignments-list">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              onToggle={toggleAssignment}
            />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🎉</div>
            <div className="empty-state-text">Немає завдань за вибраними фільтрами</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentsPage;
