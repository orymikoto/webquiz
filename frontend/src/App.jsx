import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
