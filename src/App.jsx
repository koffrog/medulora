import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Subjects } from './pages/Subjects';
import { SubjectDetail } from './pages/SubjectDetail';
import { TopicPage } from './pages/TopicPage';
import { Training } from './pages/Training';
import { Progress } from './pages/Progress';
import { Favourites } from './pages/Favourites';
import { Feedback } from './pages/Feedback';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <header className="top-header">
            <div className="search-box">
              <input type="text" placeholder="Поиск по лекциям, темам, терминам..." />
            </div>
            <div className="user-profile">
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#0b2e23', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>А</div>
              <span>Алина</span>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subject/:id" element={<SubjectDetail />} />
            <Route path="/topic/:id" element={<TopicPage />} />
            <Route path="/training" element={<Training />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}