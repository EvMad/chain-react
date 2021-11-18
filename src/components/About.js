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
                    
            <p style={{ color: '#fff', fontFamily: 'Merriweather', fontWeight: 400 }}>Evan is a web developer with a music industry background, who has recently earned a Web Development certificate from the University of Pennsylvania LPS bootcamp, and is currently completing a UX Design Certificate through Google Coursera. His primary strengths are in organizing information, resources, and people, with soft skills developed over a decade of managing client experience and event production. Evan’s technical strong points are in custom CSS,  CSS frameworks, vanilla Javascript, and JS server-side extensions.</p>
            </div>
           
            </div>
        )
       
    }
}

export default About;