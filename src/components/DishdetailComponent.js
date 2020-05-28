import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import  CommentForm  from './CommentFormComponent'

function RenderDish({dish}) {
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

function RenderComments({ dishComment }) {
  if (dishComment != null){
    console.log(dishComment);
    const cmnt = dishComment.map((comm) => {
      return (
        <div className="row">
          <div key={comm.id} className="col-12 col-md m-1">
            <div tag="li">
              <p>{comm.comment}</p>
              <p>-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</p> 
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
          <h4><b>Comments</b></h4>
          <ul className="list-unstyled">{cmnt}</ul>
          <CommentForm/>
      </div>
  );   
    } else {
      console.log("dish comments empty");
      return(
        <div> </div>
    );
  }

}

const Dishdetail = (props) => {
  return(
    <div className="container">
      <div className="row">
          <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1"> 
          <RenderComments dishComment={props.comments}/>
        </div>
      </div>
    </div>
  );
}

export default Dishdetail;










////////////////////////////////////////////////////////
// Impelemenation as Class(Representtational) Component
////////////////////////////////////////////////////////


// import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// class Dishdetail extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//       };
//     }

//   renderDish(dish) {
//     if (dish != null)
//         return(
//             <Card>
//                 <CardImg top src={dish.image} alt={dish.name} />
//                 <CardBody>
//                   <CardTitle>{dish.name}</CardTitle>
//                   <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//         );
//     else
//         return(
//             <div></div>
//         );
//   }

//   renderComments(dishComment) {
//     if (dishComment != null){
//       const cmnt = dishComment.comments.map((comm) => {
//         return (
//           <div className="row">
//             <div key={comm.id} className="col-12 col-md m-1">
//               <div tag="li">
//                 <p>{comm.comment}</p>
//                 <p>-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</p> 
//               </div>
//             </div>
//           </div>
//         );
//       });
//       return (
//         <div>
//             <h4><b>Comments</b></h4>
//             <ul className="list-unstyled">{cmnt}</ul>
//         </div>
//     );   
//       } else {
//         return(
//           <div></div>
//       );
//       }
//   }

//   render() {
//     return(
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             {this.renderDish(this.props.dish)}
//           </div>
//           <div className="col-12 col-md-5 m-1"> 
//               {this.renderComments(this.props.dish)}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Dishdetail;