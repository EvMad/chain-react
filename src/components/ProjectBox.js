import React, {Component} from 'react';

class ProjectBox extends Component {
    render() {
        return (
            <div>
           
            <div class="image">
                <img src="./assets/images/1.jpg" alt="">
                <div class="details">
                    <h2>Lou<span>ReadMe</span></h2>
                    <p>Node.js README Generator</p>
                    <div class="more">
                        <a href="https://evmad.github.io/lou-reed-me/" target="_blank" rel="noopener noreferrer"
                            class="read-more">Read<span>More</span></a>
                        <div class="icon-links">

                            <a href="https://evmad.github.io/lou-reed-me/" target="_blank" rel="noopener noreferrer"><i
                                    class="fas fa-eye"></i></a>

                        </div>
                    </div>
                </div>
            </img>
            </div>
            </div>
        )
       
    }
}

export default ProjectBox;