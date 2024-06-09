import React from "react";
import { Link } from "react-router-dom"; 
import "../Styles/Nav.css"

function Nav(){
    return(
        <table className="custom-table-nav">
            <tbody>
                <tr>
                    <td>
                        <Link to="/About" className="btn1">About</Link>
                    </td>
                    <td>
                        <Link to="/Skills" className="btn2">Skills</Link>
                    </td>
                    <td>
                        <Link to="/Certificates" className="btn3">Certificates</Link>
                    </td>
                    <td>
                        <Link to="/Projects" className="btn4">Projects</Link>
                    </td>
                    <td>
                        <Link to="/Education" className="btn5">Education</Link>
                    </td>
                    <td>
                        <Link to="/Contact" className="btn6">Contact</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Nav;