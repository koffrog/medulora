import React from 'react';
import { SUBJECTS } from '../data/subjectsData';

export default function Subjects({ onSelectSubject }) {
  return (
    <div style={{ padding: '32px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '24px' }}>Все предметы атласа</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {SUBJECTS.map((sub) => (
          <div 
            key={sub.id}
            onClick={() => onSelectSubject(sub)}
            style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', cursor: 'pointer' }}
          >
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{sub.icon}</div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>{sub.title}</h3>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>{sub.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}