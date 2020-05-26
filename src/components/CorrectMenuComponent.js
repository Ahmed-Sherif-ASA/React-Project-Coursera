import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import Dishdetail from './CorrectDishDetailComponent'



class Menu extends Component{

    constructor(props){
        super(props);
   
 
       this.state={
            selectedDish: null
        }

     
   console.log('Menu Component constructor is invoked');
    }

 
   componentDidMount() {
        console.log('Menu component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
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
                <div className="row">
                    <Dishdetail dish={this.state.selectedDish}></Dishdetail>
                </div>
            </div>
        );
    }
}

export default Menu;