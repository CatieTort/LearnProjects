import React, {Component} from 'react';

class SpaceTable extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
<div className="card text-white bg-dark mb-3">
  <div className="card-header Heading1">Astroids Passing Near Earth</div>
      <div className="card-body">
            <table className="table table-hover">
                 <thead>
                    <tr>
                      <th className="Heading2" scope="col">Name</th>
                      <th className="Heading2" scope="col">Date Of Closest Approach</th>
                      <th className="Heading2" scope="col">Estimated Diameter in km <br/>(min - max)</th>
                      <th className="Heading2" scope="col">Velocity (mph)</th>
                      <th className="Heading2" scope="col">Closest Distance To Earth (miles)</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.asteroids.map((asteroid)=> {
                          return(
                              <tr className="table-active" key= {asteroid.id}>
                                  <td className="content-text">{asteroid.name}</td>
                                  <td className="content-text">{asteroid.date}</td>
                                  <td className="content-text">{asteroid.diameterMin} - {asteroid.diameterMax}</td>
                                  <td className="content-text">{asteroid.velocity}</td>
                                  <td className="content-text">{asteroid.distance}</td>
                              </tr>
                          )
                      })}
                </tbody>
            </table>
      </div>
  </div>

        );
    }
}

export default SpaceTable;
