import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Exam Material</h1>
        <h2>(For MID-1)</h2>
      </header>
      <div className="subjects">
        <h2><Link to="/subject/ai-ml">AI & ML</Link></h2>
        <h2><Link to="/subject/is">IS</Link></h2>
        <h2><Link to="/subject/cns">CNS</Link></h2>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
