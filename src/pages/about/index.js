import React from "react";

function About() {
    return (
        <div>
            <div className="container content mt-4">
                <div className="row mt-2">
                    <div className="col-md-12">
                        <div id="header">
                            <h1>About Me</h1>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-4">
                        <img className="myPicture img-fluid" src="./images/me.jpg"/>
                    </div>
                    <div className="col-12 col-md-8 pt-2 pt-md-0">
                        <p>Hello, my name is Joe Huelsman and I am twenty eight years old. I am from Gardner, Kansas where I grew up with a small family just my parents, my younger brother, and myself. As a child I was very active in sports, I played baseball, basketball, football and for a very brief moment soccer but quickly learned I did not like running. In high school I had a passion for all things computers and ended up taking some coding classes my sophomore thru senior year of high school. I have always had a interest in how the internet and websites work and have recently decided to go back and I am now currently enrolled in the KU Coding Boot Camp program. I will be sharing some of the work that I will be doing over the course of the next six months. I hope that you will be able to see my skills grow and develop and I aim to become a proficient and hardworking developer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;