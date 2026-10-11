import React, { useState } from 'react';
import { SUBJECTS } from './data/subjectsData';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Отрисовка страниц
  const renderContent = () => {
    if (selectedSubject) {
      return <SubjectDetail subject={selectedSubject} onBack={() => setSelectedSubject(null)} />;
    }

    switch (activeTab) {
      case 'home':
        return (
          <Home 
            onSelectSubject={(sub) => setSelectedSubject(sub)} 
            onContinueLast={() => setSelectedSubject(SUBJECTS[0])} 
          />
        );

      case 'subjects':
        return (
          <div style={{ padding: '40px 32px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
              Все разделы атласа
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '24px' }}>
              Выберите дисциплину для глубокого изучения теоретических основ и клинических модулей.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {SUBJECTS.map((sub) => (
                <div 
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    padding: '24px',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '14px' }}>{sub.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>{sub.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>{sub.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'training':
        return (
          <div style={{ padding: '40px 32px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
              🧠 Тренировки и тесты
            </h1>
            <p style={{ color: '#64748b', fontSize: '15px' }}>
              Раздел находится в разработке. Здесь появятся интерактивные тесты и ситуационные задачи для закрепления материала.
            </p>
          </div>
        );

      case 'progress':
        return (
          <div style={{ padding: '40px 32px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
              📊 Мой прогресс
            </h1>
            <p style={{ color: '#64748b', fontSize: '15px' }}>
              Здесь будет отображаться детальная статистика по пройденным модулям, времени учебы и успеваемости.
            </p>
          </div>
        );

      case 'favorites':
        return (
          <div style={{ padding: '40px 32px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
              ⭐ Избранные материалы
            </h1>
            <p style={{ color: '#64748b', fontSize: '15px' }}>
              Сохраненные статьи, схемы и конспекты для быстрого доступа перед экзаменами.
            </p>
          </div>
        );

      case 'feedback':
        return (
          <div style={{ padding: '40px 32px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
            }}>
              <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
                💬 Обратная связь и поддержка
              </h1>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px' }}>
                Мы постоянно улучшаем <strong>Medulora</strong>. Если у вас есть идеи по новым функциям или вы нашли ошибку — напишите нам в бот!
              </p>
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>
                  🤖 Telegram-бот поддержки
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                  Вы можете задать вопрос, предложить тему или сообщить об ошибке в один клик.
                </p>
                <a 
                  href="https://t.me/your_bot_username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#0f766e',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}
                >
                  Написать в Telegram-бот
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return <Home onSelectSubject={(sub) => setSelectedSubject(sub)} onContinueLast={() => setSelectedSubject(SUBJECTS[0])} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f7f8fa',
      fontFamily: "'Inter', sans-serif",
      color: '#1e293b'
    }}>
      {/* Боковое меню */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setSelectedSubject(null);
        }}
      />

      {/* Шапка сайта */}
      <header style={{
        height: '64px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#475569' }}
          >
            ☰
          </button>
          <h1 
            onClick={() => { setActiveTab('home'); setSelectedSubject(null); }} 
            style={{ fontSize: '18px', color: '#0f766e', fontWeight: '700', cursor: 'pointer', margin: 0 }}
          >
            Medulora
          </h1>
        </div>
        <input 
          type="text" 
          placeholder="Поиск по атласу..." 
          style={{
            padding: '8px 14px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            outline: 'none',
            width: '200px',
            fontSize: '14px',
            backgroundColor: '#f8fafc',
            color: '#1e293b'
          }}
        />
      </header>

      {/* Основной контент */}
      <main>
        {renderContent()}
      </main>
    </div>
  );
}