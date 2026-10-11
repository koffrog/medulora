import React from 'react';

export default function Feedback() {
  return (
    <div style={{ padding: '32px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '32px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          Обратная связь и поддержка
        </h1>
        <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px' }}>
          Мы постоянно улучшаем <strong>Medulora</strong>, чтобы сделать обучение максимально удобным и эффективным. 
          Если у вас есть идеи по новым функциям, вы нашли ошибку или что-то работает некорректно — обязательно напишите нам!
        </p>

        <div style={{
          backgroundColor: '#f8fafc',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: 0 }}>
            🤖 Наш Telegram-бот поддержки
          </h3>
          <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
            Вы можете создать абсолютно бесплатного бота через @BotFather в Telegram. Он будет принимать все сообщения от студентов и пересылать их вам напрямую в чат!
          </p>
          <div>
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
    </div>
  );
}