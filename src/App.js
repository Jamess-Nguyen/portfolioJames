import React, { Component } from 'react';
import './App.css'
import Experience from './components/experiencePage';
import Toolbar from './components/navBar/reactNav';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './components/projectPage';
import Resume from './components/resumePage';
import Doodles from './components/doodlesPage';
class App extends Component {
  render() {

  return(
    <Router>
      <div className="App">
        <div className="toolBarSpacer"></div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Experience" component={Experience} />
          <Route path="/Resume" component={Resume} />
          <Route Path="/Doodles" component={Doodles}/>

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
