import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetaliComponent';
import { DISHES } from '../Shred/dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            seletedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorance Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetail dish={this.state.dishes.filter(dish => { return dish.id === this.state.selectedDish })[0]} />
            </div>
        );
    }
}

export default Main;