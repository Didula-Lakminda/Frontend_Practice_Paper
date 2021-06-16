import React, { Component } from 'react';
import axios from 'axios';

export default class CategoriesRent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

//get all values
componentDidMount() {
    axios.get('http://localhost:8090/category/get')
    .then(response => {
        //console.log(response.data);
        this.setState({ categories: response.data.data });
    })
    .catch(error => {
        console.log(error.message);
        alert(error.message);
    })
    
}

//navigate with id
navigateVehiclePage(e, categoryId) {
    window.location = `/select-vehicle/${categoryId}`
}

    render() {
        return (
            <div className="container">
               <h1>Categories</h1> 
               {/* get all courses name to page */}
               {this.state.categories.length > 0 && this.state.categories.map((category, index) => (
                   <div key={index} className="card mb-3" onClick={e => this.navigateVehiclePage(e, category._id)}>
                       <h5>{category.type}</h5>
                   </div>
               ))}
            </div>
        )
    }
}
