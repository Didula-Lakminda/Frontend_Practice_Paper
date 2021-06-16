import axios from "axios";
import React, { Component } from "react";

export default class Updatevehicle extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        code: ' ',
        model: ' ',
        type: ' ',
        name: ' ',
        price: 0
    }
  }

  onChange(e) {
      this.setState({ [e.target.name] : e.target.value })
  }

 componentDidMount() {
     //console.log(this.props.match.params.id);
     axios.get(`http://localhost:8090/vehicle/findvehicle/${this.props.match.params.id}`)
     .then(response => {
         //console.log(response.data);
            this.setState({ code: response.data.data.code });
            this.setState({ model: response.data.data.model });
            this.setState({ type: response.data.data.type });
            this.setState({ name: response.data.data.name });
            this.setState({ price: response.data.data.price });
     })
     .catch(error => {
         alert(error.message);
     })
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

     axios.put(`http://localhost:8090/vehicle/update/${this.props.match.params.id}`, vehicle)
     .then(response => {
         alert('Vehicle Updated');
     })
     .catch(error => {
         alert('Error :', error.message);
     })
 }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Update Vehicle</h1>
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
                // //value={this.state.subjectname}
                // value={this.state.code}
                value={this.state.code}
                onChange={this.onChange}
                // //onchange function
                // //onChange={this.onChange}
                // onChange={this.onChange}
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
            //     value={this.state.model}
            //     //value={this.state.subjectname}
                 value={this.state.model}
                 onChange={this.onChange}
            //     //onchange function
            //     //onChange={this.onChange}
            //     onChange={this.onChange}
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
                // //value of the state
                // value={this.state.type}
                // //value={this.state.subjectname}
                 value={this.state.type}
                 onChange={this.onChange}
                // //onchange function
                // //onChange={this.onChange}
                // onChange={this.onChange}
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
                // value={this.state.name}
                 value={this.state.name}
                 onChange={this.onChange}
                // //value={this.state.subjectname}
                // //onchange function
                // //onChange={this.onChange}
                // onChange={this.onChange}
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
                // value={this.state.price}
                // //value={this.state.subjectname}
                 value={this.state.price}
                 onChange={this.onChange}
                // //onchange function
                // //onChange={this.onChange}
                // onChange={this.onChange}
              />
            </div>
            <div className="mt-5">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
