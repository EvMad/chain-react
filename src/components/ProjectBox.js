import React, {Component} from 'react';
import './ProjectBox.css';
import imgOne from './images/1.jpg';

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