import React from "react";

function Contact() {
    return (
        <div>
            <div className="container1 content mt-4 noscroll">
                <div className="row mt-2">
                    <div className="col-md-12">
                        <div id="contentHeader">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item contactlink">
                        <i class="fas fa-phone-alt"></i>
                        <span><a href="tel:785-218-7198">(785)218-7198</a></span>
                    </li>
                    <li className="list-group-item contactlink">
                        <a href="mailto:kcgooner91@gmail.com">
                            <i class="far fa-envelope"></i>
                            <span>KCGooner91@gmail.com</span>
                        </a>
                    </li>
                    <li className="list-group-item contactlink">
                        <a href="https://drive.google.com/file/d/1cWtdYehCWVmFtbTtIcQPOM5bm20q66II/view?usp=sharing">
                            <i class="far fa-file"></i>
                            <span>Resume</span>
                        </a>
                    </li>
                    <li className="list-group-item contactlink">
                        <a href="https://github.com/KCGooner">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li className="list-group-item contactlink">
                        <a href="https://www.linkedin.com/in/joe-huelsman-70879356/">
                            <i class="fab fa-linkedin-in"></i>
                            <span>Linkedin</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;