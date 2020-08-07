import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetaliComponent';
import Header from './HeaderComponent';
import Footer from './FooterCoponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../Shred/dishes';
import { PROMOTIONS } from '../Shred/Promotions';
import { LEADERS } from '../Shred/Leaders';
import { COMMENTS } from '../Shred/Comments';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            comments: COMMENTS
          
        };
    }



    render() {

        const HomePage= () => {
            return(
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
            );    
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/Contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>

        );
    }
}

export default Main;