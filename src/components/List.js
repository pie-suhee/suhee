import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../scss/list.scss";

const projectURL = "/project.json";

const List = ({ category }) => {
  const [prevCategory, setPrevCategory] = useState(category);

  useEffect(() => {
    if (category !== prevCategory) {
      window.location.reload();
    }

    setPrevCategory(category);
  }, [category, prevCategory]);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(projectURL)
      .then((response) => response.json())
      .then((data) => {
        const filteredProjects = data.filter(
          (project) => project.category === category
        );
        setProjects(filteredProjects);
      })
      .catch((error) => {
        console.error("Error fetching project data: ", error);
      });
  }, [category]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="page list">
      <div className="subTitle">
        <svg viewBox="0 0 900 300">
          <text x="50%" y="50%" dy="40px" text-anchor="middle">
            {category}
          </text>
        </svg>
      </div>
      {projects.map((project, idx) => {
        const words = project.title;

        return (
          <div className="panel" data-key={idx+1}>
            <h2 className="words" data-splitting="words" style={{ '--word-total': words.length }}>
              {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  <span className="word" data-word={word} style={{ '--word-index': wordIndex }}>
                    {word}
                  </span>
                  {wordIndex < words.length - 1 && <span className="whitespace"> </span>}
                </React.Fragment>
              ))}
            </h2>
              <div className="thumb">
                <a href={project.href} target="_blank" rel="noreferrer">
                  <div className="inner">
                    <img className="invert" loading="lazy" src={project.src} alt=""/>
                  </div>
                </a>
              </div>
          </div>
        );
      })}
    </section>
  );
};

export default List;
