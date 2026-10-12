import React, { useState } from 'react';
import TopicPage from './TopicPage';
import { anatomyLessons } from '../data/anatomy';

export default function SubjectDetail({ subject, onBack }) {
  const [selectedLesson, setSelectedLesson] = useState(null);

  if (!subject) return null;

  // Если пользователь выбрал конкретный урок, показываем его через TopicPage
  if (selectedLesson) {
    return (
      <div style={{ padding: '32px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        <button 
          onClick={() => setSelectedLesson(null)}
          style={{
            background: 'none',
            border: 'none',
            color: '#0f766e',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            padding: '0',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          ← Назад к темам предмета
        </button>
        <TopicPage topicData={selectedLesson} />
      </div>
    );
  }

  return (
    <div style={{ padding: '32px 24px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Кнопка назад */}
      <button 
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: '#0f766e',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          padding: '0',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        ← Назад к предметам
      </button>

      {/* Шапка предмета */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderRadius: '16px', 
        padding: '32px', 
        border: '1px solid #e2e8f0',
        marginBottom: '24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
      }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>{subject.icon}</div>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: '0 0 12px 0' }}>
          {subject.title}
        </h1>
        <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
          {subject.description}
        </p>
      </div>

      {/* Блок контента / тем */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderRadius: '16px', 
        padding: '24px 32px', 
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          Модули и темы
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Кликабельный первый урок (работает для анатомии) */}
          <div 
            onClick={() => {
              // Если это анатомия, открываем нашу реальную лекцию lesson1
              if (subject.id === 'anatomy' || subject.title.includes('Анатомия')) {
                setSelectedLesson(anatomyLessons[0]);
              } else {
                alert('Для этого предмета лекция пока в разработке!');
              }
            }}
            style={{ 
              padding: '16px', 
              borderRadius: '10px', 
              backgroundColor: '#f8fafc', 
              border: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontWeight: '500', color: '#1e293b' }}>1. Органы и системы организма (Лекция)</span>
            <span style={{ fontSize: '14px', color: '#0f766e', fontWeight: '600' }}>Открыть 📖</span>
          </div>

          <div style={{ 
            padding: '16px', 
            borderRadius: '10px', 
            backgroundColor: '#f8fafc', 
            border: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer'
          }}>
            <span style={{ fontWeight: '500', color: '#1e293b' }}>2. Основные клинические проявления</span>
            <span style={{ fontSize: '14px', color: '#64748b' }}>В процессе</span>
          </div>
        </div>
      </div>
    </div>
  );
}