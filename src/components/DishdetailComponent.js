import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class Dishdetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
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

  renderComments(dishComment) {
    if (dishComment != null){
      const cmnt = dishComment.comments.map((comm) => {
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
      return (
        <div>
            <h4><b>Comments</b></h4>
            <ul className="list-unstyled">{cmnt}</ul>
        </div>
    );   
      } else {
        return(
          <div></div>
      );
      }

  }

  render() {
    return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1"> 
            {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;