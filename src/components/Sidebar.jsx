import React from 'react';

export default function Sidebar({ isOpen, onClose, activeTab, onSelectTab }) {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'home', label: '🏠 Главная' },
    { id: 'subjects', label: '📚 Предметы' },
    { id: 'training', label: '🧠 Тренировки' },
    { id: 'progress', label: '📊 Мой прогресс' },
    { id: 'favorites', label: '⭐ Избранное' },
    { id: 'feedback', label: '💬 Обратная связь' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 100,
      display: 'flex'
    }} onClick={onClose}>
      <div style={{
        width: '280px',
        backgroundColor: '#ffffff',
        height: '100%',
        padding: '24px 16px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }} onClick={(e) => e.stopPropagation()}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f766e', margin: 0 }}>Medulora</h2>
            <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    onClose();
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: isActive ? '#f0fdf4' : 'none',
                    color: isActive ? '#0f766e' : '#1e293b',
                    fontWeight: isActive ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'background 0.2px'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center', paddingBottom: '8px' }}>
          Medulora v1.0 • Academic Edition
        </div>
      </div>
    </div>
  );
}