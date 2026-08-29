import { useEffect, useState } from "react";
import api from "./api";
import "./Researches.css";


function Researches() {
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    async function fetchResearches() {
      const response = await api.get("/researches");
      setResearches(response.data);
    }

    fetchResearches();
  }, []);

  return (
    <main className="researches-page">

      <header className="researches-header">
        <p className="section-label">RESEARCH</p>
        <h1>Research</h1>
      </header>

      <div className="research-list">
        {researches.map((research, index) => (
          <article className="research" key={index}>

            <div className="research-meta">
              <h2>{research.location}</h2>

              <p className="research-date">
                {research.startTime} — {research.endTime}
              </p>
            </div>

            <div className="research-content">
              <h3>{research.projectName}</h3>

              <ul>
                {research.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>

          </article>
        ))}
      </div>

    </main>
  );
}


export default Researches;