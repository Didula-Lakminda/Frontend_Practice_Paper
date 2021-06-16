import React, { Component } from 'react';
import axios from 'axios';

export default class VehiclesRent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    }

//get url passed id to this page
componentDidMount() {
    //console.log('Course ID : ', this.props.match.params.id);
      axios.get(`http://localhost:8090/category/${this.props.match.params.id}`)
      .then(response => {
        //console.log(response.data);
          this.setState({ vehicles:  response.data.vehicles });
      })
      .catch(error => {
          //console.log(error.message);
          alert(error.message);
      })
 }

 navigateChargeRentPage(e, vehicleId) {
     window.location = `/chargerent/${vehicleId}`
 }

    render() {
        return (
            <div className="container">
            <h1>Categorie's Vehicles</h1>
            {this.state.vehicles.length > 0 && this.state.vehicles.map((vehicle, index) => (
                <div key={index} className="card mb-3" onClick={e => this.navigateChargeRentPage(e, vehicle._id)}>
                    <h4>{vehicle.code}</h4>
                    <h5>{vehicle.model}</h5>
                    <h5>{vehicle.type}</h5>
                    <h5>{vehicle.name}</h5>
                    <h5>{vehicle.price}</h5>
                </div>
            ))}
 
            </div>
        )
    }
}
