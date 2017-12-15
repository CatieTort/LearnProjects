import React, {Component} from 'react';

class Jumbo extends Component{
    render(){
        return(
        <div>
            <div className="jumbotron spacey">
                  <h1 className="display-3 Heading1-1">This is our Space Page!</h1>
                      <p className="lead">Asteroids are rocky, airless worlds that orbit our sun, but are too small to be called planets. Tens of thousands of these minor planets are gathered in the main asteroid belt, a vast doughnut-shaped ring between the orbits of Mars and Jupiter. Asteroids that pass close to Earth are called near-earth objects.</p>
                  <hr className="my-4"></hr>
                      <p>This page tracks the Asteroids coming close to earth</p>
                      <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Explore</a>
                  </p>
            </div>
        </div>
        );
    }
}

export default Jumbo;
