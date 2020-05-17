import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class Dishdetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
    }
  
  renderComments(dishComment) {
    const comments = dishComment.comments.map((comm) => {
        return (
          <div className="row">
            <div key={comm.id} className="col-12 col-md m-1">
              <div tag="li">
                <p>{comm.comment}</p>
                <p>-- {comm.author}, {comm.date}</p> 
              </div>
            </div>
          </div>
        );
      });
      if (comments != null)
      return(
          comments
      );
      else
          return(
              <div></div>
          );
  }
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

  render() {
    return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4><b>Comments</b></h4>
          <div list>
            {this.renderComments(this.props.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Dishdetail;