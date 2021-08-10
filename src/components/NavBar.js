import React from 'react';
import {Link} from 'react-router-dom';



export default function navigation() {
    return (
        <div>
                <nav>
                    <a className="navA" as={Link} to="/about">About</a>
                    <a className="navA" as={Link} to="/contact">Contact</a>
                    <a  className="navA"as={Link} to="/projects">Portfolio</a>
                </nav>

            </div>
    )
}