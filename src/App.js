import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider  } from './context';
import Lyrics from './components/tracks/Lyrics'; 

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar/> 
        <div className="contatiner">
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route  path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
