import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavComponent extends Component {
    render() {
        return (
            <div>
                <nav>
                    <a as={Link} to="/about">About</a>
                    <a as={Link} to="/contact">Contact</a>
                    <a as={Link} to="/projects">Portfolio</a>
                </nav>

            </div>
        )
    }
}

export default NavComponent;