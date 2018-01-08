import React, { Component } from 'react'
import apartments from '../store/apartments'
import {Link} from 'react-router-dom'

class ForRent extends Component {
  componentWillMount(){
    this.setState({dwelling: apartments})
  }
  render() {
    let rentList = this.state.dwelling.map(function(apt){
          return(
            <li key={apt.id}>
              <Link to={`/apartments/${apt.id}`} >
                {apt.address}
              </Link>
            </li>
        )}
    )
    return (
      <ul>
        {rentList}
      </ul>
    );
  }
}

export default ForRent;
