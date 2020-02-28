import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

import PostForm from './PostForm';

import '../Post.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
            posts: [],
            post: {}
        }
    }

    modalOpen = () => {
        this.setState({
            modalShow: true
        })
    }

    modalClose = () => {
        this.setState({
            modalShow: false
        })
    }

    handleUpdate = (index) => {
        this.setState({
            modalShow: true,
            post: this.state.posts[index]
        })
    }

    addPost = (payload) => {
        let post = {
            ...payload,
            id: this.state.posts.length + 1
        }
        return fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        }).then((response) => response.json())
        .then((data) => {
            this.setState({
                posts: [...this.state.posts, data],
                modalShow: false
            });
        })
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
        .then(res => res.json())
        .then((data) => {
          this.setState({ posts: data })
          console.log(this.state.posts)
        })
        .catch(console.log)
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
                    <Button variant="info" onClick={this.modalOpen}>Add Post</Button>
                    <PostForm
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        addpost={this.addPost}
                    />
                </div>
                    <Table responsive>
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
                            {this.state.posts.map((post, k) =>
                                <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td><Button variant="primary" onClick={() => this.handleUpdate(k)}>Edit</Button></td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
            </div>
        )
    }
}

export default PostContainer;