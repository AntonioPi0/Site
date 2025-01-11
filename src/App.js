import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Competitions from './pages/Competitions'
import Sponsors from './pages/Sponsors';
import Apply from './pages/Apply';
import './css/main.css';
import 'animate.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />}/>
        <Route path="/competitions" element={<Competitions/>}/>
        <Route path="/sponsors" element={<Sponsors />}/>
        <Route path="/apply" element={<Apply />}/>
      </Routes>
    </Router>
  );
}

export default App;
