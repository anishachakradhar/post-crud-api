import React, { Component } from 'react';
import '../Post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, Form } from 'react-bootstrap';

class Post extends Component{
    render(){
        return(
            <div>
                <PostBody />
            </div>
        )
    }
}
class PostBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
            posts: [],
            post: {}
        }
    }

    modalClose = () => {
        this.setState({
            modalShow:false
        })
    }

    addPost = (name,desc) => {
        let post = {
            id: this.state.posts.length+1,
            name,
            desc
        }
        this.setState({
            post,
            posts: [...this.state.posts, post]
        })
    }

    // editPost = (post) => {
    //     this.setState({
    //         name:post.name,
    //         desc:post.desc
    //     })
    // }

    render(){
        return(
            <div className="post">
                <div className="add-post">
                    <Button variant="info" onClick={() => this.setState({modalShow: true})}>Add Post</Button>
                    <AddPost show={this.state.modalShow} onHide={()=>this.modalClose()} addpost={this.addPost} />
                </div>
                    <Table  responsive>
                        <thead>
                            <tr>
                            <th>S.N</th>
                            <th>Post Name</th>
                            <th>Description</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.posts.map(post=>
                                <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.desc}</td>
                                <td><Button variant="primary" onClick={() => this.setState({modalShow: true})}>Edit</Button></td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
            </div>
        )
    }
}

class AddPost extends Component{
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
        this.props.addpost(this.state.name,this.state.desc);
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
export default Post