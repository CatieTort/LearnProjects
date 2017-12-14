import React, { Component } from 'react'

class Phrase extends Component {

  render(){
    return (
      <p>What your saying is: {this.props.saying} </p>
    );
  }
}

export default Phrase;
