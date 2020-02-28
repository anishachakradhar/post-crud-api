import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class PostForm extends Component{
  constructor(props){
      super(props);
      this.state = {
          loading: false,
          title: '',
          body: ''
      }
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  onSubmit = (e) => {
      e.preventDefault();
      const { title, body } = this.state;
      this.setState({
          loading: true
      })
      this.props.addpost({ title, body })
      .then(() => {
        this.setState({
            loading: false,
            title: '',
            body: ''
        })
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
                          <Form.Label>Post title</Form.Label>
                          <Form.Control name="title" type="text" placeholder="Enter post title" value={this.state.title} onChange={this.handleChange} />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Description</Form.Label>
                          <Form.Control name="body" type="text" placeholder="Enter description" value={this.state.body} onChange={this.handleChange} />
                      </Form.Group>
                      {this.state.loading ? 
                        <Button variant="success" type="button" disabled>
                            Please wait
                        </Button> :
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                      }  
                      <Button className="button-close" variant="secondary" onClick={this.props.onHide}>Close</Button>
                  </Form>
              </Modal.Body>
              </Modal>
          </div>
      )
  }
}

export default PostForm;