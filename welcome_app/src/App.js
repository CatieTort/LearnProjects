import React, { Component } from 'react';
import './App.css';
import Phrase from './Phrase.js';
import Saywhat from './sayingInput.js';
import BadBot from './BadRobot.js';
import KanyeBot from './Kanye_5000Bot.js';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        saying: " ",
        bad: ["B","L","A"],
        length: " "
      }
    }

    updateLength(e){
      this.setState({length: this.state.saying.length})
    }

    updateSaying(e){
      // console.log(e)
      this.setState({saying: e})
    }

  render() {
    return (
      <div className="App">
          <h1>Robot Listening</h1>
          <p className="App-intro">
            <Saywhat saying={this.state.saying} updateSaying={this.updateSaying.bind(this)}/>
          </p>
        <div>
          <h2>Good Robot</h2>
          <Phrase saying={this.state.saying} />
        </div>
        <div>
          <BadBot bad={this.state.saying} />
        </div>
        <div>
          <KanyeBot saying={this.state.saying}/>
        </div>
      </div>
    );
  }
}

export default App;
