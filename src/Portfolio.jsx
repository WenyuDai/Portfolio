import { useEffect, useState } from "react";
import api from "./api";
import "./Portfolio.css"

function Portfolio() {
  const [portfolio, setPortfolio] = useState({
    intro: "",
    content: "",
    linkedin: {
      prefix: "",
      label: "",
      url: ""
    }
  });

  useEffect(() => {
    async function fetchPortfolio() {
      const response = await api.get("/");
      setPortfolio(response.data);
    }

    fetchPortfolio();
  }, []);

  return (
    <main className="portfolio-page">
      <header className="portfolio-header">
        <p className="section-label">ABOUT</p>
        <h1>Portfolio</h1>
      </header>

      <div className="portfolio-content">
        <h2>{portfolio.intro}</h2>
        <div className="portfolio-text">
          {portfolio.content
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          <p>
            {portfolio.linkedin.prefix}{" "}
            <a
              href={portfolio.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {portfolio.linkedin.label}
            </a>.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Portfolio;