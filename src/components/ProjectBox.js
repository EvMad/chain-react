import React, {Component} from 'react';
import './ProjectBox.css';
import imgOne from './images/1.jpg';
import noteBook from './images/notebook.jpg';
import cat from './images/cat.jpg';
import stage from './images/stage.jpg';
import paint from './images/paintCan.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGithub, faEye);


class ProjectBox extends Component {
    render() {
        return (
            <div>
           <div class="container">
               <div class="row">
               <div class="image">
                <img src={cat} alt=""/>
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
                <img src={stage} alt=""/>
                <div class="details">
                    <h2>Band<span>Finder</span></h2>
                    <p></p>
                    <div class="more">
                        <a href="https://keith-l-watford.github.io/artists-and-bands/" target="blank" rel="noopener noreferrer"
                            class="read-more">Band<span>Finder</span></a>
                        <div class="icon-links">
                            <a href="https://keith-l-watford.github.io/artists-and-bands/" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={['fas', 'eye']} /></i></a>

                        </div>
                    </div>
                </div>
            </div>
            {/* image-card-end */}
            <div class="image">
                <img src={paint} alt=""/>
                <div class="details">
                    <h2>Community<span>Canvas</span></h2>
                    <p></p>
                    <div class="more">
                        <a href="https://communitycanvas.herokuapp.com/" target="blank" rel="noopener noreferrer"
                            class="read-more">Community<span>Canvas</span></a>
                        <div class="icon-links">
                            <a href="https://communitycanvas.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={['fas', 'eye']} /></i></a>

                        </div>
                    </div>
                </div>
            </div>
            {/* image-card-end */}
            <div class="image">
                <img src={noteBook} alt=""/>
                <div class="details">
                    <h2>Note<span>Taker</span></h2>
                    <p></p>
                    <div class="more">
                        <a href="https://calm-stream-38376.herokuapp.com/" target="blank" rel="noopener noreferrer"
                            class="read-more">Dudely<span>Noted</span></a>
                        <div class="icon-links">
                            <a href="https://calm-stream-38376.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon={['fas', 'eye']} /></i></a>

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