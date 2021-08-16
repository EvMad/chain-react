import React, {Component} from 'react';
import './ProjectBox.css';
import imgOne from './images/1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub);


class ProjectBox extends Component {
    render() {
        return (
            <div>
           <div class="container">
               <div class="row">
               <div class="image">
                <img src={imgOne} alt=""/>
                <div class="details">
                    <h2>Git<span>Hub</span></h2>
                    <p></p>
                    <div class="more">
                        <a href="https://github.com/EvMad" target="blank" rel="noopener noreferrer"
                            class="read-more">Git<span>Hub</span></a>
                        <div class="icon-links">
                            <a href="https://github.com/EvMad" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={['fab', 'github']} /></i></a>

                        </div>
                    </div>
                </div>
            </div>
            {/* image-card-end */}
            <div class="image">
                <img src={imgOne} alt=""/>
                <div class="details">
                    <h2>Git<span>Hub</span></h2>
                    <p></p>
                    <div class="more">
                        <a href="https://github.com/EvMad" target="blank" rel="noopener noreferrer"
                            class="read-more">Git<span>Hub</span></a>
                        <div class="icon-links">
                            <a href="https://github.com/EvMad" target="_blank" rel="noopener noreferrer"><i
                                    class="fas fa-eye"></i></a>

                        </div>
                    </div>
                </div>
            </div>
            {/* image-card-end */}
            <div class="image">
                <img src={imgOne} alt=""/>
                <div class="details">
                    <h2>Git<span>Hub</span></h2>
                    <p></p>
                    <div class="more">
                        <a href="https://github.com/EvMad" target="blank" rel="noopener noreferrer"
                            class="read-more">Git<span>Hub</span></a>
                        <div class="icon-links">
                            <a href="https://github.com/EvMad" target="_blank" rel="noopener noreferrer"><i
                                    class="fas fa-eye"></i></a>

                        </div>
                    </div>
                </div>
            </div>
            {/* image-card-end */}
            <div class="image">
                <img src={imgOne} alt=""/>
                <div class="details">
                    <h2>Git<span>Hub</span></h2>
                    <p></p>
                    <div class="more">
                        <a href="https://github.com/EvMad" target="blank" rel="noopener noreferrer"
                            class="read-more">Git<span>Hub</span></a>
                        <div class="icon-links">
                            <a href="https://github.com/EvMad" target="_blank" rel="noopener noreferrer"><i
                                    class="fas fa-eye"></i></a>

                        </div>
                    </div>
                </div>
            </div>
               </div>
           </div>
        
            </div>
        )
       
    }
}

export default ProjectBox;