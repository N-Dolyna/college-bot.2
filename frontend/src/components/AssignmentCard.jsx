import React from 'react';
import { CheckCircle, Circle, Clock, AlertCircle } from 'lucide-react';
import './AssignmentCard.css';

const AssignmentCard = ({ assignment, onToggle }) => {
  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const dateStr = date.toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });

    if (diffDays < 0) return { text: dateStr, urgent: true, overdue: true };
    if (diffDays === 0) return { text: `Сьогодні, ${dateStr}`, urgent: true };
    if (diffDays === 1) return { text: `Завтра, ${dateStr}`, urgent: true };
    if (diffDays <= 3) return { text: dateStr, urgent: true };
    return { text: dateStr, urgent: false };
  };

  const deadline = formatDeadline(assignment.deadline);

  return (
    <div
      className={`assignment-card card ${assignment.completed ? 'completed' : ''} ${deadline.urgent ? 'urgent' : ''}`}
      onClick={() => onToggle(assignment.id)}
    >
      <div className="assignment-header">
        <div className="assignment-check">
          {assignment.completed ? (
            <CheckCircle size={24} className="check-icon checked" />
          ) : (
            <Circle size={24} className="check-icon" />
          )}
        </div>
        <div className="assignment-info">
          <div className="assignment-subject">{assignment.subject}</div>
          <div className="assignment-title">{assignment.title}</div>
        </div>
        <div className="priority-badge">
          <span className={`badge badge-${assignment.priority}`}>
            {assignment.priority === 'high' && 'Високий'}
            {assignment.priority === 'medium' && 'Середній'}
            {assignment.priority === 'low' && 'Низький'}
          </span>
        </div>
      </div>

      {assignment.description && (
        <div className="assignment-description">{assignment.description}</div>
      )}

      <div className="assignment-footer">
        <div className={`assignment-deadline ${deadline.urgent ? 'urgent' : ''}`}>
          {deadline.overdue ? (
            <AlertCircle size={16} className="deadline-icon" />
          ) : (
            <Clock size={16} className="deadline-icon" />
          )}
          <span>{deadline.text}</span>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
