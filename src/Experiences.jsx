import { useEffect, useState } from "react";
import api from "./api";
import "./Experiences.css"

function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function fetchExperiences() {
      const response = await api.get("/experiences");
      setExperiences(response.data);
    }

    fetchExperiences();
  }, []);

  return (
    <main className="experiences-page">
      <header className="experiences-header">
        <p className="section-label">CAREER</p>
        <h1>Experience</h1>
      </header>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience" key={index}>

            <div className="experience-meta">
              <h2>{experience.companyName}</h2>

              <p className="experience-location">
                {experience.location}
              </p>

              <p className="experience-date">
                {experience.startTime} — {experience.endTime}
              </p>
            </div>

            <div className="experience-content">
              <h3>{experience.jobTitle}</h3>

              <ul>
                {experience.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>

          </article>
        ))}
      </div>
    </main>
  )
}

export default Experiences;