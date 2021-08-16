import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectBox from './components/ProjectBox';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/pdf/EBM_dev_res072021B.pdf';

function App() {


    
        return (
            <>
            
            <div style={{ marginBottom: '30px', marginTop: '0px', paddingBottom: '40px'}}>
            <Router>
            <NavBar />
                <div className="chain-app">
                    <Switch>
                    {/* <Route path="/">{renderNavFooter(<About />)}</Route> */}
                        <Route path="/about">{<About />}</Route>
                        <Route path="/projects">{<ProjectBox />}</Route>
                        <Route path="/contact">{<Contact />}</Route>
                        <Route path="/resume">{<Resume />}</Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
           
            </>
        )
        }


export default App;