import React, {Component} from 'react'

class Saying extends Component {

handleSayingChange(e) {
  this.props.updateSaying(e.target.value)
}

  render () {
    return (
      <input value={this.props.saying} onChange={this.handleSayingChange.bind(this)}/>
    );
  }
}

export default Saying;
