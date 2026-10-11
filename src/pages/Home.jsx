import React from 'react';
import { SUBJECTS } from '../data/subjectsData';

export default function Home({ onSelectSubject, onContinueLast }) {
  return (
    <div style={{ padding: '32px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Баннер «Продолжить обучение» */}
      <div 
        onClick={onContinueLast}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}
      >
        <div style={{ fontSize: '13px', color: '#0f766e', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Продолжить обучение
        </div>
        <div style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
          Анатомия и физиология: Костная система
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '72%', height: '100%', backgroundColor: '#0f766e', borderRadius: '4px' }}></div>
          </div>
          <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>72%</span>
        </div>
      </div>

      {/* Список предметов */}
      <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
        Все разделы атласа
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {SUBJECTS.map((sub) => (
          <div 
            key={sub.id}
            onClick={() => onSelectSubject(sub)}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{sub.icon}</div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>{sub.title}</h3>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>{sub.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}