import React, { Component } from "react";
import axios from 'axios';

const initialState = {
  code: " ",
  model: " ",
  type: " ",
  name: " ",
  price: 0

}

export default class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    let vehicle = {
      code: this.state.code,
      model: this.state.model,
      type: this.state.type,
      name: this.state.name,
      price: this.state.price
    }

    axios.post('http://localhost:8090/vehicle/create', vehicle)
    .then(response => {
      alert('Vehicle Added')
    })
    .catch(error => {
      alert(error.message);
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add Vehicle</h1>
        <form onSubmit={this.onSubmit}>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Code
            </label>
            <input
              type="text"
              className="form-control"
              id="code"
              //state name
              name="code"
              placeholder="code"
              //value of the state
              //value={this.state.subjectname}
              value={this.state.code}
              //onchange function
              //onChange={this.onChange}
              onChange={this.onChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Model
            </label>
            <input
              type="text"
              className="form-control"
              id="model"
              //state name
              name="model"
              placeholder="model"
              //value of the state
              value={this.state.model}
              //value={this.state.subjectname}
              //onchange function
              //onChange={this.onChange}
              onChange={this.onChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              //state name
              name="type"
              placeholder="type"
              //value of the state
              value={this.state.type}
              //value={this.state.subjectname}
              //onchange function
              //onChange={this.onChange}
              onChange={this.onChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              //state name
              name="name"
              placeholder="name"
              //value of the state
              value={this.state.name}
              //value={this.state.subjectname}
              //onchange function
              //onChange={this.onChange}
              onChange={this.onChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Price
            </label>
            <input
              type="Number"
              className="form-control"
              id="price"
              //state name
              name="price"
              placeholder="Price"
              //value of the state
              value={this.state.price}
              //value={this.state.subjectname}
              //onchange function
              //onChange={this.onChange}
              onChange={this.onChange}
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
