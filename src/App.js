import React, { Component } from 'react';
import './App.css'
import Experience from "./components/experiencePage";
import Projects from "./components/projectsPage";
import Toolbar from './components/navBar/reactNav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/aboutPage';
import { render } from '@testing-library/react';
 
class App extends Component {
  render() {

  return(
    <Router>
      <div className="App">
        <div className="toolBarSpacer"></div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Experience" component={Experience} />
          <Route path="/Projects" component={Projects} />
          <Route Path="/Doodles" component={Projects}/>
        </Switch>
      </div>
      <Toolbar />
    </Router>

  );
  }
}

const Home = () => (
  <About/>
);
export default App;
