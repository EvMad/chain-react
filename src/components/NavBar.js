import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';



function NavBar() {
    return (
        <div>
                
               <nav>
                   <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'Space-Around' }}>
                       <li><Link style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Merriweather', fontWeight: 900 }} to="/about">About</Link></li>
                       <li><Link style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Merriweather', fontWeight: 900 }} to="/contact">Contact</Link></li>
                       <li><Link style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Merriweather', fontWeight: 900 }} to="/projects">Portfolio</Link></li>
                   </ul>
               </nav>
               

            </div>
    )
}

export default NavBar;