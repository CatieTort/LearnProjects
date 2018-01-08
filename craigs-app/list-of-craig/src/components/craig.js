import React, {Component} from 'react'
import craigImg from '../images/craig.jpg'
import {Link} from 'react-router-dom'

class Craig extends Component{
  render() {
    return (
      <div>
        <div className="alignL">
          <Link to='/'>Home</Link>
        </div>
          <img src={craigImg}/>
          <p>Hi, I'm Craig</p>
      </div>
    )
  }
}
export default Craig;
