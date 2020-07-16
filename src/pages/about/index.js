import React from "react";
import Profile from "./me.jpg"

function About() {
    return (
        <div>
            <div className="container content mt-4 noscroll">
                <div className="row mt-2">
                    <div className="col-md-12">
                        <div id="header">
                            <h1>About Me</h1>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-4">
                        <img className="headshot img-responsive" src={Profile} />
                    </div>
                    <div className="col-12 col-md-8 pt-2 pt-md-0">
                        <p>Hello, my name is Joe Huelsman I am from Gardner, Kansas where I grew up with a small family just my parents, my younger brother, and myself. In high school I had a passion for all things computers and ended up taking some coding classes my sophomore thru senior year of high school. I have always had an interest in how the internet and websites work and I have completed the KU Coding Bootcamp program with a Certificate of Completion. I will be sharing some of the work that I have done over the course of the class. I hope that you will be able to see my skills grow and develop and I aim to become a proficient and hardworking developer.</p>
                        <div>
                            <h3>Skills: </h3>
                            <ul>
                                <li>
                                    CSS
                            </li>
                                <li>
                                    HTML
                            </li>
                                <li>
                                    JavaScript
                            </li>
                                <li>
                                    Node.js
                            </li>
                                <li>
                                    React
                            </li>
                                <li>
                                    jQuery
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;