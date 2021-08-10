import React from 'react';
import {Link} from 'react-router-dom';



function NavBar() {
    return (
        <div>
                
               <nav>
                   <ul>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                       <li><Link to="/projects">Portfolio</Link></li>
                   </ul>
               </nav>
               

            </div>
    )
}

export default NavBar;