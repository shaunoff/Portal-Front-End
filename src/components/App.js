import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import NavigationBar from "./navbar/NavBar.js"
import Routes from "../routes.js"
import io from 'socket.io-client';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
              <Routes />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
