import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page">
      <h1 className="welcome-title">Привет, Алина! 👋</h1>
      <p className="welcome-subtitle">Продолжим обучение?</p>

      {/* Верхний баннер */}
      <div className="banner-grid">
        <div className="continue-card">
          <span style={{ fontSize: '12px', color: '#788b85', textTransform: 'uppercase' }}>Продолжить обучение</span>
          <h2 style={{ margin: '8px 0 16px', fontSize: '22px' }}>Анатомия</h2>
          <p style={{ color: '#788b85', marginBottom: '20px' }}>Костная система</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/topic/lesson1">
              <button className="btn-primary">Продолжить →</button>
            </Link>
            <span style={{ fontSize: '14px', color: '#0b2e23', fontWeight: '600' }}>72% completed</span>
          </div>
        </div>

        <div className="event-card">
          <span style={{ fontSize: '12px', color: '#788b85', textTransform: 'uppercase' }}>Сегодня</span>
          <h3 style={{ margin: '8px 0 4px', fontSize: '16px' }}>Тест по анатомии</h3>
          <p style={{ color: '#788b85', fontSize: '13px', marginBottom: '16px' }}>15:00</p>
          <Link to="/training" style={{ color: '#0b2e23', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
            Перейти →
          </Link>
        </div>
      </div>

      {/* Сетка предметов */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Мои предметы</h2>
        <Link to="/subjects" style={{ color: '#788b85', textDecoration: 'none', fontSize: '14px' }}>Все предметы →</Link>
      </div>

      <div className="subjects-grid">
        <Link to="/subject/anatomy" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="subject-card">
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>💀</div>
            <div>Анатомия</div>
            <span style={{ fontSize: '11px', color: '#4ade80' }}>● В процессе</span>
          </div>
        </Link>
        <div className="subject-card" style={{ opacity: 0.7 }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🧬</div>
          <div>Биология</div>
          <span style={{ fontSize: '11px', color: '#788b85' }}>Скоро</span>
        </div>
        <div className="subject-card" style={{ opacity: 0.7 }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🧪</div>
          <div>Химия</div>
          <span style={{ fontSize: '11px', color: '#788b85' }}>Скоро</span>
        </div>
        <div className="subject-card" style={{ opacity: 0.7 }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏛️</div>
          <div>Латинский язык</div>
          <span style={{ fontSize: '11px', color: '#788b85' }}>Скоро</span>
        </div>
        <div className="subject-card" style={{ opacity: 0.7 }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🫀</div>
          <div>Физиология</div>
          <span style={{ fontSize: '11px', color: '#788b85' }}>Скоро</span>
        </div>
        <div className="subject-card" style={{ opacity: 0.7 }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>💊</div>
          <div>Фармакология</div>
          <span style={{ fontSize: '11px', color: '#788b85' }}>Скоро</span>
        </div>
      </div>
    </div>
  );
}