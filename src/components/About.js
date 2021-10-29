import React, {Component} from 'react';
import mugShot from './images/elevator.jpg';

class About extends Component {
    render() {
        return (
            <div style={{ margin: 30 }}>
               <img src={mugShot} alt="" />
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}> 
                    <h1 style={{ color: '#fff', fontFamily: 'Merriweather', fontWeight: 900 }}>About The Developer</h1>
                    <br></br>
                    <br></br>
                    
            <p style={{ color: '#fff', fontFamily: 'Merriweather', fontWeight: 400 }}>Evan is a web developer with a music industry background, who has recently earned a Web Development certificate from the University of Pennsylvania LPS bootcamp, and is currently completing a UX Design Certificate through Google Coursera. His primary strengths are in organizing information, resources, and people. Evan’s technical strong points are in custom CSS,  CSS frameworks, vanilla Javascript, and React. Evan is currently pivoting his career to intersect web development and UX design with a skillset honed over a decade of managing client experience and event production.</p>
            </div>
           
            </div>
        )
       
    }
}

export default About;