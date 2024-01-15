// Import modul Routes dari react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Hello from './components/hello';
import About from './components/about';
import Skill from './components/skill';
import Hobby from './components/hobby';
import Contact from './components/contact';

import './style.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Gantikan Switch dengan Routes */}
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
