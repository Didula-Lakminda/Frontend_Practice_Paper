import React, { Component } from "react";
import Select from "react-select";
import axios from 'axios';

const initialState = {
  categoryType: " ",
  vehicles: [],
  options: [],
  selectedVehicles: []
}

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    //set bind for newly method
    this.onChange = this.onChange.bind(this);
    this.onVehicleSelect = this.onVehicleSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  //active typing
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  //get backend values to frontend
  componentDidMount() {
      axios.get('http://localhost:8090/vehicle/get')
      .then(response => {
                        //add to first array
        this.setState({ vehicles: response.data.data }, () => {
          //console.log('vehicles', this.state.vehicles);
          //set value pairs like multiselect
          let data = [];
          this.state.vehicles.map((vehicle, index) => {
            let allvehicle = {
              value: vehicle._id,
              label: vehicle.name
            }
            //push to data array
            data.push(allvehicle);
          });
          //after the map assign options array 
          this.setState({ options: data })
        })
      })
  }

  //user select subejcts push
  onVehicleSelect(e) {
      //filter the selected items
                                        //check if click or not
      this.setState({ selectedVehicles: e ? e.map(vehicle => vehicle.value) : [] });
  }

  //to submit
  onSubmit(e) {
    e.preventDefault();
    //need to pass values
    let category = {
      type: this.state.categoryType,
      vehicles: this.state.selectedVehicles
    }
    //console.log(category);
    axios.post('http://localhost:8090/category/create', category)
    .then(response => {
        alert('Category Added');
    })
    .catch(error => {
        console.log(error.message);
        alert(error.message);
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add Category</h1>
        <form onSubmit={this.onSubmit}>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Category Type
            </label>
            <input
              type="text"
              className="form-control"
              id="ctype"
              //state name
              name="categoryType"
              placeholder="Category Type"
              //value of the state
              value={this.state.categoryType}
              //value={this.state.categorytype}
              //onchange function
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Select Vehicles
            </label>
            <Select
              //options={this.state.options}
              options={this.state.options}
              onChange={this.onVehicleSelect}
              className="basic-multi-select"
              isMulti
            />
          </div>
          <div className="mt-5">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
