import React from "react";
import Nav from './Nav';
import '../Styles/Skills.css';

function Skills(){
    return(
        <div>
            <br />
            <Nav /><br />
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="column">
                    <h2><center>Languages</center></h2>
                    <div className="box">HTML</div>
                    <div className="box">CSS</div>
                    <div className="box">JavaScript</div>
                    <div className="box">C</div>
                    <div className="box">Java</div>
                    <div className="box">Python</div>
                    <div className="box">PHP</div>
                </div>
                <div className="column">
                    <h2><center>Frameworks</center></h2>
                    <br /><br /><br /><br /><br /><br />
                    <div className="box">ReactJS</div>
                </div>
                <div className="column">
                    <h2><center>Databases</center></h2>
                    <br /><br /><br /><br /><br /><br />
                    <div className="box">MySQL</div>
                </div>
                <div className="column">
                    <h2><center>Technologies and Tools</center></h2>
                    <br /><br /><br /><br /><br />
                    <div className="box">VS Code</div>
                    <div className="box">Figma</div>
                </div>
                <div className="column">
                    <h2><center>Design Software</center></h2>
                    <br /><br /><br /><br /><br />
                    <div className="box">PhotoShop</div>
                    <div className="box">Illustrator</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
