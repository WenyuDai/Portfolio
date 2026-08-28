import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'

import Experiences from "./Experiences";
import Portfolio from "./Portfolio";

function App() {

  return (
    <>
        <nav className="navbar">
            <NavLink to="/">Portfolio</NavLink>
            <NavLink to="/experiences">Experience</NavLink>
            <NavLink to="/researches">Research</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/researches" element={<h3>Content coming soon</h3>} />
        </Routes>

    </>
  )
}

export default App
