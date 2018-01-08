import React, { Component } from 'react'
import apartments from '../store/apartments'
import {Link} from 'react-router-dom'

class AptDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      dwelling: apartments,
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({aptId: id})
    let apt = this.state.dwelling.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apt){
      this.setState({dwelling: apt})
    }
  }

  render() {


    var aval = this.state.dwelling.forRent
    function rental(){
      if (aval === true){
        return "Yes"
      }else{
        return "No, Property is rented"
      }
    }
console.log(this.state.dwelling.photo);
    return (
      <div>
      <div className="alignL">
        <Link to='/'>Home</Link>
      </div>
        <div>
          <h2>{this.state.dwelling.address}</h2>
          <img src={this.state.dwelling.photo} alt="exterior apartment photo" height="250" width="375"/>
          <ul>
            <li>Beds: {this.state.dwelling.beds}</li>
            <li>Baths: {this.state.dwelling.baths}</li>
            <li>Rent: {this.state.dwelling.price}</li>
            <li>Avaliable? {rental()}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AptDetail;
