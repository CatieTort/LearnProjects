import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ForRent from './apartments-rent'
import AptDetail from './apartment-details'
import '../App.css';
import Header from './header'
import Footer from './footer'
import Craig from './craig'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" component={ForRent} />
            <Route exact path="/Craig" component={Craig} />
            <Route path='/apartments/:id' component={AptDetail} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
