import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Advisors from './pages/Advisors';
//import Team from './pages/Team';
import './css/main.css';
import 'animate.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team_students" element={<Students />}/>
        <Route path="/team_advisors" element={<Advisors />}/>
        {/* altre rotte */}
      </Routes>
    </Router>
  );
}

        
       /* <Route path="/team" element={<Team />} />*/ 

export default App;
