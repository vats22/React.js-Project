import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishetail from './DishdetaliComponent';



class Menu extends Component {

  constructor(props) {
    super(props);
    
    this.state = {

      selactedDishes: null 
    };
  }

  onDishesSelect(dish){
    this.setState({selactedDishes:dish});

  }

  

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() =>  this.onDishesSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>             
            </CardImgOverlay>
          </Card>
        </div>
        
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <Dishetail dish= {this.state.selactedDishes} />
      </div>
    );
  }
}

export default Menu;