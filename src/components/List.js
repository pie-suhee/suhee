import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../scss/list.scss";

const projectURL = "/project.json";

const List = ({ category }) => {
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
      <div className="category">
        <div className="subTitle">
          <span className="text">{category}</span>
          <span className="scroll">scroll down 👇</span>
        </div>
      </div>
      <div className="list_con">
        <div className="cityBg">
          <img src="/cityBg.png" alt="도시 이미지" />
        </div>
        <ul>
          {projects.map((project, index) => {
            const formattedIndex = (index + 1).toString().padStart(2, "0");

            return (
              <li key={project.id}>
                <div className="listBg">
                  <img src={project.src} alt="리스트 배경 이미지" />
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">
                  <div className="listTitle">
                    <span>{project.title}</span>
                    <span>/{formattedIndex}</span>
                  </div>

                  <div className="listDescription">
                    <span>{project.description}</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default List;
