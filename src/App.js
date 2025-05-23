// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import FieldFinder from './components/FieldFinder';
import ChronosScheduler from './components/ChronosScheduler';
import DreamTeam from './components/DreamTeam';
import PantryApp from './components/PantryApp';
import ChampionsTrophyPredictor from './components/ChampionsTrophyPredictor';
import SerenityNow from './components/SerenityNow';
import CMTAdvocates from './components/CMTAdvocates';
import Eclat from './components/Eclat';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={350}>
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/fieldfinder" element={<FieldFinder />} />
          <Route path="/projects/chronos-scheduler" element={<ChronosScheduler />} />
          <Route path="/projects/dreamteam" element={<DreamTeam />} />
          <Route path="/projects/pantry-app" element={<PantryApp />} />
          <Route path="/projects/ChampionsTrophyPredictor" element={<ChampionsTrophyPredictor />} />
          <Route path="/projects/serenity-now" element={<SerenityNow />} />
          <Route path="/projects/CMTAdvocates" element={<CMTAdvocates />} />
          <Route path="/projects/eclat-ecommerce" element={<Eclat />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="content-wrapper">
          <div className="content">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;