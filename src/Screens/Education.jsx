import React from "react";
import Nav from './Nav';
import '../Styles/Education.css';
import SabraLogo from "../assets/SabraLogo.png";
import BMMVLogo from "../assets/BMMVLogo.png";

function Education(){
    return(
        <div className="education-container"> {/* Add a container */}
            <br />
            <Nav />
            <h1>Education</h1><br />
            <div class="card">
                <div class="card-content"><center>
                    <img src={SabraLogo} alt="logo-sabra"  />
                    <h2 class="card-title">BSc. (Hons) in Computing & Information Systems</h2>
                    <p class="card-text">2021 - Present</p>
                    <p class="card-text">Sabaragamuwa University of Sri Lanka</p>
                </center></div>
            </div>
            <br></br>
            <div class="card">
                <div class="card-content"><center>
                    <img src={BMMVLogo} alt="logo-bmmv"  />
                    <h2 class="card-title">G.C.E. (A/L) Examination - Physical Science Stream</h2>
                    <p class="card-text">2019</p>
                    <p class="card-text">Result : B-2 C-1</p>
                    <p class="card-text">Badulla Central College,Badulla ̧</p>
                </center></div>
            </div>
            <br></br>
            <div class="card">
                <div class="card-content"><center>
                    <img src={BMMVLogo} alt="logo-bmmv"  />
                    <h2 class="card-title">G.C.E. (O/L) Examination</h2>
                    <p class="card-text">2015</p>
                    <p class="card-text">Result : A-4 B-4 C-1</p>
                    <p class="card-text">Badulla Central College,Badulla ̧</p>
                </center></div>
            </div>
        </div>
    )
}

export default Education;
