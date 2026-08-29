import { useEffect, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom'
import api from "./api";
import './App.css'

import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Researches from "./Researches";

function App() {
  const [backendReady, setBackendReady] = useState(false);
  const [backendError, setBackendError] = useState(false);

  useEffect(() => {
    async function wakeBackend() {
      try {
        await api.get("/health");
        setBackendReady(true);
      } catch (error) {
        console.error(error);
        setBackendError(true);
      }
    }

    wakeBackend();
  }, []);

  if (!backendReady) {
    return (
      <main className="loading-page">
        <div className="loading-content">
          <div className="spinner"></div>

          <h1>Waking up the server...</h1>

          {!backendError ? (
            <p>
              This portfolio retrieves its content from a FastAPI backend
              hosted on Render. The free server may take up to about a minute
              to start after being idle.
            </p>
          ) : (
            <p>
              The server is taking longer than expected. Please refresh the
              page in a moment.
            </p>
          )}
        </div>
      </main>
    );
  }

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
          <Route path="/researches" element={<Researches />} />
        </Routes>

    </>
  )
}

export default App
