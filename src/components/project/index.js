import React from "react";

function Project(props) {
    return (
        <div className="col-lg-4 col-sm-12">
            <div className="card mt-1" id="cardborder">
                <img src={props.imgSrc} alt={props.Title} id="thumbnail"/>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                    <a href={props.appLink} className="card-link">Application</a>
                    <a href={props.repoLink} className="card-link">GitHub Repo</a>
                </div>
            </div>
        </div>
    );
}
export default Project;