import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetaliComponent';
import Header from './HeaderComponent';
import Footer from './FooterCoponent';
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
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetail dish={this.state.dishes.filter(dish => { return dish.id === this.state.selectedDish })[0]} />
                <Footer />
            </div>

        );
    }
}

export default Main;