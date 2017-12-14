import React, {Component} from 'react'

class BadBot extends Component {

  render(){
    return(
      <p>What your saying is: {"BLA".repeat(this.props.bad.length)} </p>
    );
  }
}

export default BadBot;



//in this.stats.bad pull out only the number of characters in this.state.saying
// return the bad saying
