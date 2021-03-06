import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Get from './containers/Get';
import Put from './containers/Put';
import Post from './containers/Post';
import Patch from './containers/Patch';
import Delete from './containers/Delete';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/get">get</Link>
            </li>
            <li>
              <Link to="/put">put</Link>
            </li>
            <li>
              <Link to="/post">post</Link>
            </li>
            <li>
              <Link to="/patch">patch</Link>
            </li>
            <li>
              <Link to="/delete">delete</Link>
            </li>
          </ul>

          <hr/>
          <Route exact path="/" component={Get}/>
          <Route path="/get" component={Get}/>
          <Route path="/post" component={Post}/>
          <Route path="/put" component={Put}/>
          <Route path="/patch" component={Patch}/>
          <Route path="/delete" component={Delete}/>

        </div>
      </Router>
    );
  }
}

export default App;