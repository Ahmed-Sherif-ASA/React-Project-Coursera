import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import  CommentForm  from './CommentFormComponent'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';




function RenderDish({dish}) {
  if (dish != null)
      return(
          <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
          </FadeTransform>
      );
  else
      return(
          <div></div>
      );
}

function RenderComments({ dishComment, postComment, dishId }) {
  if (dishComment != null){
    console.log(dishComment);
    const cmnt = dishComment.map((comm) => {
      return (
        <Fade in>
          <div className="row">
            <div key={comm.id} className="col-12 col-md m-1">
              <div tag="li">
                <p>{comm.comment}</p>
                <p>-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</p> 
              </div>
            </div>
          </div>
        </Fade>
      );
    });
    return (
      <div>
          <h4><b>Comments</b></h4>
          <ul className="list-unstyled">
            <Stagger in>
              {cmnt}
            </Stagger>
          </ul>
          <CommentForm dishId={dishId} postComment={postComment}/>
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
  if (props.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
  }
  else if (props.errMess) {
      return(
          <div className="container">
              <div className="row">            
                  <h4>{props.errMess}</h4>
              </div>
          </div>
      );
  } 
  else if (props.dish != null) {
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
            <RenderComments dishComment={props.comments}
            postComment={props.postComment}
            dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  }
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