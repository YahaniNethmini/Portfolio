// src/Screens/ContactForm.jsx
import React from 'react';
import '../Styles/Contact.css';
import Nav from './Nav';
import LinkedIn from '../assets/LinkedIn.png';
import Email from '../assets/Email.png';
import Instagram from '../assets/Instagram.png';
import Dribbble from '../assets/Dribbble.png';
import Behance from '../assets/Behance.png';
import Discord from '../assets/Discord.jpg';


const Contact = () => {
  return (
    <div><br />
    <Nav /><br/><br/>
    <div className="container">
      <form className="contact-form">
      <br/>
        <h2>Contact Me</h2>
        <table>
          <tr>
            <td>
              <div className="form-group">
              <h3><img className='logo' src={Email} alt='email-logo'/><a href='yahani.cisinfo@gmail.com'>Email</a></h3>
              </div>
            </td>
            <td>
              <div className="form-group">
              <h3><img className='logo' src={LinkedIn} alt='linkedin-logo'/><a href='https://www.linkedin.com/in/yahani-nethmini-39930821b/'>LinkedIn</a></h3>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-group">
              <h3><img className='logo' src={Instagram} alt='instagram-logo'/><a href='https://www.instagram.com/__t_y_n_p_e_r_e_r_a__/?igsh=eDQxd2RheGhwMGxw'>Instagram</a></h3>
              </div>
            </td>
            <td>
              <div className="form-group">
              <h3><img className='logo' src={Dribbble} alt='dribbble-logo'/><a href='https://dribbble.com/yahani_nethmini'>Dribbble</a></h3>
              </div>
            </td>
          </tr>
          <tr>
          <td>
              <div className="form-group">
              <h3><img className='logo' src={Discord} alt='discord-logo'/><a href='https://discord.gg/yahaninethmini_72914'>Discord</a></h3>
              </div>
            </td>
            <td>
              <div className="form-group">
              <h3><img className='logo' src={Behance} alt='behance-logo'/><a href='https://www.behance.net/yahaniperera?log_shim_removal=1'>Behance</a></h3>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
    </div>
  );
};

export default Contact;
