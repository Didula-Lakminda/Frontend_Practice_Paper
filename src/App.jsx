import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import AddCategory from './components/AddCategory/AddCategory';
import AddVehicle from './components/AddVehicle/AddVehicle';
import Categories from './components/Categories/Categories';
import Vehicles from './components/Categories/Vehicles';
import ChargeRent from './components/Categories/ChargeRent';
import CategoriesRent from './components/CalculateRent/CategoriesRent';
import VehiclesRent from './components/CalculateRent/VehiclesRent';
import UpdateVehicle from './components/UpdateVehicle/Updatevehicle';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <section>
                        <Switch>
                            <Route path="/update-vehicle/:id" component={UpdateVehicle} />
                            <Route path="/add-category" component={AddCategory} />
                            <Route path="/add-vehicle" component={AddVehicle} />
                            <Route path="/chargerent/:id" component={ChargeRent} />
                            <Route path="/select-vehicle/:id" component={VehiclesRent} />
                            <Route path="/select-category" component={CategoriesRent} />
                            <Route path="/:id" component={Vehicles} />
                            <Route path="/" component={Categories} exact/>
                        </Switch>
                    </section>
                </Router>
            </div>
        )
    }
}
