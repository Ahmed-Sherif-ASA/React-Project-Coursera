import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component { 
    
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            const comm = dish.comments.map((comment) =>
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {comment.date}</p>
                </li>
            );
            return (
                <div>
                    <h1>Comments</h1>
                    <ul className="list-unstyled">{comm}</ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render(){
        return ( 
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        )
    }
}

export default DishDetail;