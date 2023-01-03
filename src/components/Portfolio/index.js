import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'weather-dashboard',
            description: 'JavaScript/API/Bootstrap',
            link: "https://jcisne2.github.io/HW-6/",
            repo: "https://github.com/jcisne2/HW-6"
        },
        {
            name: 'code-quiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://jcisne2.github.io/HW-4/",
            repo: "https://github.com/jcisne2/HW-4"
        },
        {
            name: 'password-generator',
            description: 'HTML/CSS/JavaScript',
            link: "https://jcisne2.github.io/Homework-3/",
            repo: "https://github.com/jcisne2/Homework-3"
        },
        {
            name: 'note-taker',
            description: 'Node/Express/Bootstrap',
            link: "https://note-taker-546853.herokuapp.com/",
            repo: "https://github.com/jcisne2/11-HW"
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/CSS/JavaScript',
            link: "https://jcisne2.github.io/5-HW/",
            repo: "https://github.com/jcisne2/5-HW"
        },
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;
