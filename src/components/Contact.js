import React, {Component} from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fabGithub } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fabGithub);



class Contact extends Component {
    render() {
        return (
            <div>
                <div className="column">
                <form style={{ display: "flex", flexDirection: "column", alignContent: "center"}}>
                <label>
    Name:
    <input type="text" placeholder="your name here" name="name" style={{ alignContent: "flex-start", minWidth: "30%", minHeight: "50px"}} />
  </label>
  <label>
    Email:
    <input type="text" placeholder="email@email.com" name="name" style={{ alignContent: "flex-start", minWidth: "30%", minHeight: "50px"}} />
  </label>
        <label>
          Essay:
          <textarea placeholder="your message here" style={{ alignContent: "flex-start", minWidth: "30%", minHeight: "200px"}} />
        </label>
        <div><input style={{ maxWidth: "10%", minHeight: "50px" }}  type="submit" value="Submit" /></div>
        
      </form>
      </div>
            </div>
        )
       
    }
}

export default Contact;