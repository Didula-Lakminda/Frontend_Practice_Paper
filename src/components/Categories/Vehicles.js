import React, { Component } from 'react';
import axios from 'axios';

export default class Vehicles extends Component {
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

navigateToUpdatePage(e, vehicleId) {
    window.location = `/update-vehicle/${vehicleId}`
}

onDelete(e, vehicleId) {
    axios.delete(`http://localhost:8090/vehicle/delete/${vehicleId}`)
    .then(response => {
        alert('Data Deleted');
        location.reload();
    })
    .catch(error => {
        alert(error => error.message);
    })
}

    render() {
        return (
            <div className="container">
            <h1>Categorie's Vehicles</h1>
            {this.state.vehicles.length > 0 && this.state.vehicles.map((vehicle, index) => (
                <div key={index} className="card mb-3">
                    <h4>{vehicle.code}</h4>
                    <h5>{vehicle.model}</h5>
                    <h5>{vehicle.type}</h5>
                    <h5>{vehicle.name}</h5>
                    <h5>{vehicle.price}</h5>
                    <div className="mt-5">
                    <button type="delete" className="btn btn-primary" onClick={e => this.onDelete(e, vehicle._id)}>Delete</button>
                    <button type="submit" className="btn btn-warning" onClick={e => this.navigateToUpdatePage(e, vehicle._id)}>Update</button>
                    </div>
                </div>
            ))}
 
            </div>
        )
    }
}
