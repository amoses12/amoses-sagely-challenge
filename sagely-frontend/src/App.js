import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonList from './pages/lessonsList';
import LessonDetail from './pages/lesson';
import './App.css';
import Header from './components/header';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<LessonList />} />
          <Route path="/details" element={<LessonDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
