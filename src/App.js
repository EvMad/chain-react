import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectBox from './components/ProjectBox';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    const renderNavFooter = component => {
        return (
            <NavBar />
            {component}
            <Footer />
        )
    }

    return (
        <div style={{ marginBottom: '30px', marginTop: '0px', paddingBottom: '40px'}}>
            <Router>
                <div className="chain-app">
                    <Switch>
                        <Route path="/about">{renderNavFooter(<About />)}</Route>
                        <Route path="/projects">{renderNavFooter(<ProjectBox />)}</Route>
                        <Route path="/contact">{renderNavFooter(<Contact />)}</Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;