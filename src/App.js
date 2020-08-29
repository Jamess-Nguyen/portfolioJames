import React, { Component } from 'react';
import './App.css'
import Experience from "./components/experiencePage";
import Toolbar from './components/navBar/reactNav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './components/projectPage';

class App extends Component {
  render() {

  return(
    <Router>
      <div className="App">
        <div className="toolBarSpacer"></div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Experience" component={Experience} />
          <Route path="/Resume" component={Projects} />
          <Route Path="/Doodles" component={Projects}/>
        </Switch>
      </div>
      <Toolbar />
    </Router>

  );
  }
}

const Home = () => (
  <Projects/>
);
export default App;
