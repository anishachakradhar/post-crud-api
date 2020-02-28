import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class PostForm extends Component{
  constructor(props){
      super(props);
      this.state = {
          name: '',
          desc: ''
      }
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  onSubmit = (e) => {
      e.preventDefault();
      const { name, desc } = this.state;
      this.props.addpost({ name, desc });
      this.setState({
          name: '',
          desc: ''
      })
  }
  render(){
      return(
          <div>
              <Modal
              show={this.props.show} onHide={this.props.onHide}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              >
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                  Add post
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form onSubmit={this.onSubmit}>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Post Name</Form.Label>
                          <Form.Control name="name" type="text" placeholder="Enter post name" value={this.state.name} onChange={this.handleChange} />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Description</Form.Label>
                          <Form.Control name="desc" type="text" placeholder="Enter description" value={this.state.desc} onChange={this.handleChange} />
                      </Form.Group>
                      <Button variant="success" type="submit">
                          Submit
                      </Button>
                      <Button className="button-close" variant="secondary" onClick={this.props.onHide}>Close</Button>
                  </Form>
              </Modal.Body>
              </Modal>
          </div>
      )
  }
}

export default PostForm;