import React, { Component } from "react";
import axios from "axios";

const initialState = {
    duration: 0,
    charge: 0
}

export default class ChargeRent extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

//active typing
onChange(e) {
    this.setState({ [e.target.name] : e.target.value })
}

onSubmit(e) {
    e.preventDefault();
    axios.get(`http://localhost:8090/vehicle/amount/${this.props.match.params.id}/${this.state.duration}`)
    .then(response => {
        this.setState({ charge: response.data.amount });
    })
    .catch(error => {
        console.log(error.message);
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Duration
            </label>
            <input
              type="Number"
              className="form-control"
              id="duration"
              //state name
              name="duration"
              placeholder="Duration"
              //value of the state
              //value={this.state.categoryType}
              value={this.state.duration}
              //value={this.state.categorytype}
              //onchange function
              onChange={this.onChange}
            />
          </div>
          <div className="mt-5">
            <button type="submit" className="btn btn-primary">
              Calculate
            </button>
          </div>
          <input
              type="Number"
              className="form-control"
              id="charge"
              //state name
              name="charge"
              //value of the state
              //value={this.state.categoryType}
              value={this.state.charge}
              //value={this.state.categorytype}
              //onchange function
              onChange={this.onChange}
              disabled
            />
        </form>

      </div>
    );
  }
}
