import React from "react";
import '../Styles/About.css'; // Ensure correct path to CSS file
import ProfileImage from '../assets/ProfileImage.jpg'; // Ensure correct path to image
import Nav from './Nav.jsx'; // Ensure correct path to Nav component

function About() {
    return (
        <div className="body">
            <br />
            <Nav />
            <h1 className="h1">Yahani Nethmini</h1><br />
            <div>
                <table>
                        <tr>
                            <td>
                                <img src={ProfileImage} alt="Profile" className="image" />
                            </td>
                            <td>
                                <div>
                                    <h1>I'm Yahani Nethmini</h1><br />
                                    <h2 class="h2">UI Designer | Front End Developer | Designer</h2>
                                    <h2 class="h2">(PhotoShop / Illustrator)</h2><br />
                                    <h4>I am an energetic, self-driven person who has demonstrated the capacity to adjust to different technological stacks. I enjoy working under pressure and jumping at the chance to take on new tasks. I'm constantly looking for methods to learn and develop.</h4>
                                    <br /><br />
                                    <button>See Resume</button>
                                </div>
                            </td>
                        </tr>
                </table>
            </div>
        </div>
    )
}

export default About;
