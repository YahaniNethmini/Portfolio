import React from "react";
import Nav from './Nav';
import '../Styles/Projects.css'; 
import CraftExpress from '../assets/CraftExpress.jpeg';
import Portfolio from '../assets/Portfolio.png';

function Projects(){
    return(
        <div>
            <br />
            <Nav />
            <h1 className="h1">Projects</h1>
            <table>
                <tr>
                    <td>
                        <div class="card">
                            <div class="card-content">
                                <h2 class="card-title">CraftExpress</h2>
                                <img src={CraftExpress} alt="CraftExpress-Project" className="project01"/>
                                <p class="card-text">Designed to finding part time jobs for university students.</p>
                                <p className="card-text">UI : <a href="https://www.figma.com/file/c0GrGnATMSOZBhSVbyb7hI/CraftExpress?type=design&nodeid=
0%3A1&mode=design&t=sKSu8hHMXnlGW1wW-1">Click here</a></p>
                                <p className="card-text">Github Link : <a href="https://github.com/YahaniNethmini/Craft-Express">Click here</a></p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card">
                            <div class="card-content">
                                <h2 class="card-title">Portfolio</h2>
                                <img src={Portfolio} alt="Portfolio" className="project01"/>
                                <p class="card-text">Designed to finding part time jobs for university students.</p>
                                <p className="card-text">Github Link : <a href="https://github.com/YahaniNethmini/Craft-Express">Click here</a></p>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Projects;