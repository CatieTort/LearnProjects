import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PageHeader,Table} from 'react-bootstrap';
import SpaceTable from './bootstrap_tbl.js';
import Jumbo from './Space_jumbotron.js';


class App extends Component {
    constructor(props){
        super(props)
        // new variable called today that will display the current date on the page
        let today= new Date()
        this.state= {
            apiKey: "swW86L35Z8Xx5LgFPzWTBFvINuUJeUpMVMBbn7KZ",
            startDate: `${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`,
            apiUrl: "https://api.nasa.gov/neo/rest/v1/feed",
            asteroids:[]
        }
    }


    //this fucntion will run everytime the component mounts.
componentWillMount(){
    fetch(`${this.state.apiUrl}?start_date=${this.state.startDate}&api_key=${this.state.apiKey}`).then((rawResponse) => {
        return rawResponse.json()
    }).then((parsedResponse) => {
        let neoData = parsedResponse.near_earth_objects
    //empty array that will be holding the Asteroids objects.
    let newAsteroids = []
    //this key is accessing the objects and arrays in the rawData.near_earth_objects
    Object.keys(neoData).forEach((date)=>{
        neoData[date].forEach((asteroid)=>{
            //for each date, its pulling the asteroid info creating an object from the info and pushing into the newAsteroids array.
        newAsteroids.push({
            //this is the astroid object attributes
            id: asteroid.neo_reference_id,
            name: asteroid.name,
            date: asteroid.close_approach_data[0].close_approach_date,
            //.toFixed is a method that makes a number containing a decimal and floors it into a whole number.
            diameterMin: asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(0),
            diameterMax: asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(0),
            closestApproach: asteroid.close_approach_data[0].miss_distance.miles,
            velocity:
            // parseFloat is used here because the data is a string with a decimal, so we turn it into a float which is a number and use the .toFixed methid to get a whole number.
            parseFloat(asteroid.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(0),
            distance: asteroid.close_approach_data[0].miss_distance.miles
        })
        })
    })
    //its taking the newAsteroids array of objects(each astroid info) and adding it to the this.state object under the astroids attribute.
    this.setState({asteroids: newAsteroids})
    })
}


  render() {

    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Asteroids</a>
                </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.nasa.gov/">NASA</a>
                    </li>
            </ul>
        <div>
        </div>
        <div>
            <Jumbo />
            <SpaceTable asteroids = {this.state.asteroids}/>
        </div>
    </div>
    );
  }
}

export default App;
