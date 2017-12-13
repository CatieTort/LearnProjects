import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kevin from './AboutMe.js';
import Catie from './AboutMe2.js';
import Hobbies from './kevin_hobbies.js'
import Hobby from './catie_hobbies.js'
import Places from './kev_places.js'
import CatiePlaces from './catie_places.js'

class App extends Component {
  render() {
    return (
      <div className="App">
              <header className="App-header">
              <div class="pyro">
                <div class="before"></div>
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                <div class="after"></div>
              </div>
            </header>

              <p className="App-intro">
              This is a page all about Kevin & Catie!<br/> Because we are awesome and you should know us...
              </p>
                <div className="flex-container">
                  <Kevin />
                  <Catie />
                </div>
                  <div className="flex-container-2">
                    <Hobbies />
                    <Hobby />
                  </div>
                <div className="flex-container-3">
                  <div className="places">
                    <Places />
                  </div>
                  <div className="places2">
                  <CatiePlaces />
                  </div>
                </div>
          </div>
    );
  }
}

export default App;
