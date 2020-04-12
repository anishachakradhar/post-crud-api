import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      title: '',
      body: ''
    }
    console.log('I am post form:constructor');
  }

  componentDidUpdate(oldProps) {
    if (oldProps.indexToUpdate === null && this.props.indexToUpdate !== null) {
      this.setState({
        title: this.props.activePost.title,
        body: this.props.activePost.body,
        loading: false
      })
    } else if (oldProps.indexToUpdate !== null && this.props.indexToUpdate === null) {
      this.setState({
        title: '',
        body: '',
        loading: false
      })
    }
    console.log('I am post form:componentdidupdate');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAdd = (e) => {
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

  onUpdate = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })
    const payload = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.update(payload, this.props.activePost.id)
      .then(() => {
        this.setState({
          loading: false,
          title: '',
          body: ''
        })
      })
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
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
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Post title</Form.Label>
                <Form.Control name="title" type="text" placeholder="Enter post title" value={this.state.title} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="body"
                  type="text"
                  placeholder="Enter description"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
              </Form.Group>
              {this.state.loading &&
                <Button variant="success" type="button" disabled>
                  Please wait
                </Button>
              }
              {!this.state.loading &&
                (this.props.indexToUpdate !== null ?
                  <Button variant="success" type="submit" onClick={this.onUpdate}>
                    Update
                  </Button> :
                  <Button variant="success" type="submit" onClick={this.onAdd}>
                    Submit
                  </Button>
                )
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