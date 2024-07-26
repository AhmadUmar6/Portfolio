// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import FieldFinder from './components/FieldFinder';
import ChronosScheduler from './components/ChronosScheduler';
import DreamTeam from './components/DreamTeam';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="content-wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects/fieldfinder" element={<FieldFinder />} />
              <Route path="/projects/chronos-scheduler" element={<ChronosScheduler />} />
              <Route path="/projects/dreamteam" element={<DreamTeam />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;