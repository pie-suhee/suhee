import React, { useState, useEffect } from 'react';
import '../scss/list.scss';

const projectURL = '/project.json';


const List = ({ category }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(projectURL)
            .then((response) => response.json())
            .then((data) => {
                const filteredProjects = data.filter((project) => project.category === category);
                setProjects(filteredProjects);
            })
            .catch((error) => {
                console.error('Error fetching project data: ', error);
            });
    }, [category]);

    return (
        <section className="list">
            <div className="list_con">
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <div className="listBg">
                                <img src={project.src} alt="리스트 배경 이미지"/>
                            </div>
                            <a href={project.href} target='_blank' rel="noreferrer">
                                <div className="listTitle">
                                    <span className="Thesignature">
                                        {project.title}
                                    </span>
                                </div>

                                <div className="listDescription">
                                    <span className="inter">
                                        {project.description}
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default List;
