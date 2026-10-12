import React, { useState, useEffect } from 'react';

const TopicPage = ({ topicData }) => {
  const [activeTab, setActiveTab] = useState('lecture');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('medulora_favorites') || '[]');
    const exists = favorites.some((item) => item.id === topicData.id);
    setIsFavorite(exists);
  }, [topicData.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('medulora_favorites') || '[]');
    let updated;
    if (isFavorite) {
      updated = favorites.filter((item) => item.id !== topicData.id);
    } else {
      updated = [...favorites, { id: topicData.id, title: topicData.title, type: 'topic' }];
    }
    localStorage.setItem('medulora_favorites', JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  const renderTextWithGlossary = (text, glossary = {}) => {
    if (!text) return null;
    const termsKeys = Object.keys(glossary);
    if (termsKeys.length === 0) return <p className="whitespace-pre-line leading-relaxed">{text}</p>;

    const regex = new RegExp(`(${termsKeys.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <p className="whitespace-pre-line leading-relaxed text-slate-700 text-lg">
        {parts.map((part, i) => {
          const foundKey = termsKeys.find((k) => k.toLowerCase() === part.toLowerCase());
          if (foundKey) {
            return (
              <span
                key={i}
                onClick={() => setSelectedTerm({ word: foundKey, ...glossary[foundKey] })}
                className="text-teal-700 bg-teal-50 border-b-2 border-teal-500 cursor-pointer font-semibold hover:bg-teal-100 transition-colors px-1.5 py-0.5 rounded mx-1 inline-block"
                title="Нажмите, чтобы посмотреть определение"
              >
                {part}
              </span>
            );
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans text-slate-900">
      
      {/* Шапка лекции */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Анатомия • Лекция
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {topicData.title}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            {topicData.description}
          </p>
        </div>

        <button
          onClick={toggleFavorite}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border transition-all text-sm font-bold shrink-0 cursor-pointer ${
            isFavorite
              ? 'bg-rose-50 border-rose-200 text-rose-600 shadow-sm'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <span className="text-lg">{isFavorite ? '❤️' : '🤍'}</span>
          <span>{isFavorite ? 'В избранном' : 'В избранное'}</span>
        </button>
      </div>

      {/* Крупные и удобные вкладки */}
      <div className="flex gap-3 bg-slate-100 p-2 rounded-2xl mb-10 max-w-lg border border-slate-200">
        <button
          onClick={() => setActiveTab('lecture')}
          className={`flex-1 py-3 px-5 rounded-xl font-bold text-base transition-all cursor-pointer ${
            activeTab === 'lecture'
              ? 'bg-white text-teal-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          📖 Теория
        </button>
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`flex-1 py-3 px-5 rounded-xl font-bold text-base transition-all cursor-pointer ${
            activeTab === 'flashcards'
              ? 'bg-white text-teal-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🧠 Карточки
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`flex-1 py-3 px-5 rounded-xl font-bold text-base transition-all cursor-pointer ${
            activeTab === 'practice'
              ? 'bg-white text-teal-800 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          📝 Тест
        </button>
      </div>

      {/* Основной контент теории */}
      {activeTab === 'lecture' && (
        <div className="space-y-8">
          {topicData.lectureBlocks?.map((block, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-8 md:p-10 space-y-6"
            >
              {block.heading && (
                <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-teal-600 pl-4 py-0.5">
                  {block.heading}
                </h2>
              )}
              
              {renderTextWithGlossary(block.text, topicData.glossary)}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'flashcards' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-16 text-center space-y-4">
          <div className="text-5xl">🧠</div>
          <h3 className="text-2xl font-bold text-slate-900">Интерактивные флеш-карточки</h3>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            Модуль для запоминания терминов и определений находится в разработке.
          </p>
        </div>
      )}

      {activeTab === 'practice' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-16 text-center space-y-4">
          <div className="text-5xl">📝</div>
          <h3 className="text-2xl font-bold text-slate-900">Проверочный тест</h3>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            Модуль самоконтроля по данной теме находится в разработке.
          </p>
        </div>
      )}

      {/* Модальное окно термина */}
      {selectedTerm && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 space-y-5 relative">
            <button
              onClick={() => setSelectedTerm(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors"
            >
              ✕
            </button>
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                Медицинский словарь
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-3">
                {selectedTerm.word}
              </h3>
              {selectedTerm.lat && (
                <p className="text-sm italic text-slate-500 font-serif mt-1">
                  {selectedTerm.lat}
                </p>
              )}
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60 text-slate-700 text-base leading-relaxed">
              {selectedTerm.definition}
            </div>

            <button
              onClick={() => setSelectedTerm(null)}
              className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-2xl transition-colors shadow-sm cursor-pointer"
            >
               Понятно
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicPage;