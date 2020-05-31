import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    
  }

  render() {
        return(
          <div className="col">
              <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                      <Row className="form-group">
                          <Label htmlFor="rating" md={12}>Rating</Label>
                          <Col md={{size: 12}}>
                              <Control.select model=".rating" name="rating"
                                  className="form-control" defaultValue="1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </Control.select>
                          </Col>
                      </Row>
                      <Row className="form-group">
                          <Label htmlFor="author" md={12}>Your Name</Label>
                          <Col md={12}>
                              <Control.text model=".author" id="author" name="author"
                                  placeholder="Your Name"
                                  className="form-control"
                                  validators={{
                                      minLength: minLength(3), maxLength: maxLength(15)
                                  }}
                                  />
                              <Errors
                                  className="text-danger"
                                  model=".author"
                                  show="touched"
                                  messages={{
                                      required: 'Required ',
                                      minLength: 'Must be greater than 2 characters ',
                                      maxLength: 'Must be 15 characters or less '
                                  }}
                              />
                          </Col>
                      </Row>
                      <Row className="form-group">
                          <Label htmlFor="comment" md={12}>Comment</Label>
                          <Col md={12}>
                              <Control.textarea model=".comment" id="comment" name="comment"
                                  rows="6"
                                  className="form-control" defaultValue=" "/>
                          </Col>
                      </Row>
                      <Row className="form-group">
                          <Col md={{size:10}}>
                              <Button type="submit" color="primary">
                              Submit
                              </Button>
                          </Col>
                      </Row>
                  </LocalForm>
                </ModalBody>
              </Modal>
          </div>
        );
    }
}

export default CommentForm;