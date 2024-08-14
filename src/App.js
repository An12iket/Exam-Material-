// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import SubjectPage from './SubjectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subjectName" element={<SubjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
