import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I am a aspiring front end developer with detailed full stack knowledge. I have multitude of skills and consider myself a jack of all trades. I recently earned a Certificate in Full Stack Web Development from the University of Washington.</p>
                       
                        <p className="text-faded mb-5">I have a drive to learn new skills and challenge myself to have new experiences.</p>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About