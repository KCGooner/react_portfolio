import React from "react";
import Project from "../../components/project/index"


function Projects() {
    return (
        <div>
            <div className="container content mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div id="contentHeader">
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Project
                        imgSrc = "./assets/images/dayplanner.png"
                        Title = "Day Planner"
                        description = "A 9-5 day planner with color cordinated time slots to plan out your day."
                        repoLink = "https://github.com/KCGooner/day_planner"
                        appLink = "https://kcgooner.github.io/day_planner/"
                    />
                    <Project 
                        imgSrc = "./assets/images/notes.png"
                        Title = "Note Taker"
                        description = "An app where you write, save, store and delete notes that you have written."
                        repoLink = "https://github.com/KCGooner/note_taker"
                        appLink = "https://shielded-ravine-17312.herokuapp.com/"
                    />
                    <Project
                        imgSrc = "./assets/images/offenderapp.png"
                        Title = "Offender App"
                        description = "An app where NFL offensive players arrest records can be seen."
                        repoLink = "https://github.com/KCGooner/Project_1"
                        appLink  = "https://kcgooner.github.io/Project_1/"
                    />
                    <Project
                        imgSrc = "./assets/images/budgettracker.png"
                        Title = "Budget Tracker"
                        description = "An app that helps you track income and expenses."
                        repoLink = "https://github.com/KCGooner/budget_tracker"
                        appLink = "https://young-bayou-09748.herokuapp.com/"
                    />
                    <Project
                        imgSrc = "./assets/images/fitnesstracker.png"
                        Title = "Fitness Tracker"
                        description = "An app where workouts are inputted and can be tracked."
                        repoLink = "https://github.com/KCGooner/workout_tracker"
                        appLink = "https://evening-plateau-08258.herokuapp.com/?id=5e974e0997dce00017152224"
                    />
                </div>
            </div>
        </div>
    );
}
export default Projects;