import React from "react";
import Nav from './Nav';
import '../Styles/Projects.css'; 
import CraftExpress from '../assets/CraftExpress.png';
import Portfolio from '../assets/Portfolio.png';
import ToDoList from '../assets/ToDoList.png';
import RecipeRoundUp from '../assets/RecipeRoundUp.png';

function Projects(){
    return(
        <div>
            <br />
            <Nav />
            <h1 className="h1">Projects</h1>
            <table className="table">
                <tr>
                    <td>
                        <div class="card">
                            <div class="card-content">
                                <h2 class="card-title">CraftExpress</h2>
                                <img src={CraftExpress} alt="CraftExpress-Project" className="project01"/>
                                <p class="card-text">Designed frontend to finding craft items to the customer.</p>
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
                                <img src={Portfolio} alt="Portfolio" className="project02"/><br />
                                <p class="card-text">Designed a portfolio for myself.</p>
                                <p className="card-text">Github Link : <a href="https://github.com/YahaniNethmini/Portfolio">Click here</a></p><br />
                            </div>
                        </div>
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                        <div class="card">
                            <div class="card-content">
                                <h2 class="card-title">To-Do List</h2>
                                <img src={ToDoList} alt="ToDoList-Project" className="project03"/>
                                <p class="card-text">Designed to todo list for students.</p>
                                <p className="card-text">Github Link : <a href="https://github.com/YahaniNethmini/ToDoList">Click here</a></p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="card">
                            <div class="card-content">
                                <h2 class="card-title">RecipeRoundUp Website | Ongoing</h2>
                                <img src={RecipeRoundUp} alt="Reciperoundup-website" className="project04"/><br />
                                <p class="card-text">Designed a fronntend for recipe website.</p>
                                <p className="card-text">Github Link : <a href="https://github.com/YahaniNethmini/reciperoundup">Click here</a></p><br />
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Projects;

