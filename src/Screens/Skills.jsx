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
                <table>
                    <tr>
                        <td>
                           <div className="column">
                                <h2><center>Programming Languages</center></h2>
                                <div className="box">JavaScript | C | Java</div>
                            </div>
                        </td>
                        <td>
                            <div className="column">
                                <h2><center>Frameworks & Libraries</center></h2>
                                <div className="box">ReactJS | AngularJS</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <div className="column">
                                <h2><center>Web Development</center></h2>
                                <div className="box">HTML | CSS | Boostrap 5</div>
                            </div>
                        </td>
                        <td>
                            <div className="column">
                                <h2><center>Databases</center></h2>
                                <div className="box">MySQL</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="column">
                                <h2><center>Design Software</center></h2>
                                <div className="box">Adobe PhotoShop | Adobe Illustrator</div>
                            </div>
                        </td>
                        <td>
                            <div className="column">
                                <h2>UI/UX Design Tool</h2>
                                <div className="box">Adobe XD | Figma</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="column">
                                <h2><center>Technologies and Tools</center></h2>
                                <div className="box">VS Code | XAMPP</div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Skills;
