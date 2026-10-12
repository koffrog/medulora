import React from 'react';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span style={{ color: '#4ade80' }}>💚</span> MEDstudy
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>🏠</span> Главная
        </NavLink>
        <NavLink to="/subjects" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>📚</span> Предметы
        </NavLink>

        <div className="sidebar-section-title">Тренировки</div>
        <NavLink to="/training" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>📝</span> Тесты & Карточки
        </NavLink>

        <div className="sidebar-section-title">Личный кабинет</div>
        <NavLink to="/progress" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>📊</span> Мой прогресс
        </NavLink>
        <NavLink to="/favourites" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>⭐</span> Избранное
        </NavLink>
        <NavLink to="/feedback" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>💬</span> Обратная связь
        </NavLink>
      </nav>
    </aside>
  );
}