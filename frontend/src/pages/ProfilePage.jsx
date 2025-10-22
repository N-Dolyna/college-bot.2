import React, { useState } from 'react';
import { mockGroups } from '../mockData';
import { User, Users, Send } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempGroup, setTempGroup] = useState(user.group);

  const handleSave = () => {
    setUser({ ...user, group: tempGroup });
    setIsEditing(false);
  };

  return (
    <div className="profile-page fade-in">
      <h1 className="page-title">Профіль</h1>

      <div className="profile-card card">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {user.firstName.charAt(0)}{user.lastName.charAt(0)}
          </div>
        </div>

        <div className="profile-info">
          <div className="info-row">
            <User size={18} className="info-icon" />
            <div>
              <div className="info-label">Імя</div>
              <div className="info-value">
                {user.firstName} {user.lastName}
              </div>
            </div>
          </div>

          {user.username && (
            <div className="info-row">
              <Send size={18} className="info-icon" />
              <div>
                <div className="info-label">Telegram</div>
                <div className="info-value">@{user.username}</div>
              </div>
            </div>
          )}

          <div className="info-row">
            <Users size={18} className="info-icon" />
            <div>
              <div className="info-label">Група</div>
              {isEditing ? (
                <select
                  className="select"
                  value={tempGroup}
                  onChange={(e) => setTempGroup(e.target.value)}
                >
                  {mockGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="info-value">{user.group}</div>
              )}
            </div>
          </div>
        </div>

        <div className="profile-actions">
          {isEditing ? (
            <>
              <button className="btn btn-primary" onClick={handleSave}>
                Зберегти
              </button>
              <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                Скасувати
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              Змінити групу
            </button>
          )}
        </div>
      </div>

      <div className="settings-section">
        <div className="section-title">Про додаток</div>
        <div className="card">
          <div className="about-text">
            <strong>CT College Bot</strong> - ваш особистий помічник у навчанні. Всі завдання, розклад та новини в одному місці.
          </div>
          <div className="version-info">Версія 1.0.0 (MVP)</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
