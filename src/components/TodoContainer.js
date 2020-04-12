import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoContainer extends Component{
    state = {
        todos: [
            {
                id: 1,
                title: 'Do breakfast',
                completed: false
            },
            {
                id: 2,
                title: 'Complete assignment',
                completed: true
            },
            {
                id: 3,
                title: 'Take a walk',
                completed: false
            }
        ]
    }
    render(){
        return(
            <div>
                <Todos todos={this.state.todos}/>
            </div>
        )
    }
}

class Todos extends Component{
    render(){
        return(
            <div>
                {this.props.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        )
    }
}

//PropTypes

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

class TodoItem extends Component{
    getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through'
            }
        } else {
            return{
                textDecoration: 'none'
            }
        }
    }
    render(){
        return(
            <div>
                <h6>
                    { this.props.todo.title }
                </h6>
            </div>
        )
    }
}

//PropTypes

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoContainer