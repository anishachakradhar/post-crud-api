import React, { Component } from 'react';
import '../App.css';

class Example extends Component{
    constructor(){
        super();
        this.state = {
            name: 'Anisha'
        }
    }
    render(){
        return(
            <div>
                <h3>This is a parent component for example.</h3>
                <User name={this.state.name} year="Fourth" part="First" />
                <Lifecycle prop1="prop1" />
                <Calculator />
            </div>
        )
    }
}

class Lifecycle extends Component {
    constructor() {
        super();
        console.log('constructor is called');
    }
    componentWillMount() {
      console.log('component will mount');
    }
    componentWillReceiveProps() {
      console.log('component will receive props');
    }
    componentDidMount() {
      console.log('component did mount');
    }
    render() {
      console.log('render is called');
      return <div>Lifecycle component</div>;
    }
  }

  
class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentComp: 40,
            studentCivil: 45,
            total: '',
            first: 0,
            second: 0,
            sum: 0
        }
    }

    increaseStudent = () => {
        this.setState({
            studentComp: this.state.studentComp + 1
        })
    }

    decreaseStudent = () => {
        this.setState({
            studentComp: this.state.studentComp - 1
        })
    }

    handleFirstChange = (event) => {
        this.setState({
            first: event.target.value,
            sum: +event.target.value + +this.state.second
        });
    }

    handleSecondChange = (event) => {
        this.setState({
            second: event.target.value,
            sum: +event.target.value + +this.state.first
        });
    }

    render(){
        // console.log('calling render..........')
        return(
            <div>
                <h5>{this.props.name}</h5>
                <p>This is User component which is a child component.</p><br />
                <i>This is the {this.props.year} year and {this.props.part} part of computer engineering.</i><br /><br />
                The number of student in BCT is {this.state.studentComp}.<br />
                <button onClick={this.increaseStudent}>Increase the number of student</button>
                <button onClick={this.decreaseStudent}>Decrease the number of student</button><br /><br />
                The number of student in BCT is {this.state.studentCivil}.
                Total number of student is {this.state.studentComp + this.state.studentCivil}. <br /><br />
                First number: <input type="number" name="first" id="first" value={this.state.first} onChange={this.handleFirstChange} />
                Second number: <input type="number" name="second" id="second" value={this.state.second} onChange={this.handleSecondChange} />
                Sum of numbers: {this.state.sum}
            </div>
        )
    }
}

class Calculator extends Component{
    constructor(){
        super();
        this.state = {
          displayBox: '',
          isComplete: false
        }
      }
  
      handleChange = (value) => {
        const { isComplete } = this.state;
        this.setState({
          displayBox: isComplete ? value : `${this.state.displayBox}${value}`,
          isComplete: false
        });
      }
  
      calcResult = () => {
        let result = 0;
        try {
          result = eval(this.state.displayBox);
        } catch {
          result = 'Math error';
        }
        this.setState({
          displayBox: result,
          isComplete: true
        })
      }
  
      deleteOne = (e) => {
        const { isComplete } = this.state;
        if (isComplete) {
          this.setState({
            displayBox: ''
          });
          return;
        }
  
        this.setState({
          displayBox: this.state.displayBox.slice(0,-1)
        })
      }
  
      clearAll = () => {
        this.setState({
          displayBox: ""
        })
      }
  
    render(){
        return(
            <div className="calculator">
                <input value={this.state.displayBox} /><br />
                <button onClick={() => this.handleChange(1)}>1</button>
                <button onClick={() => this.handleChange(2)}>2</button>
                <button onClick={() => this.handleChange(3)}>3</button>
                <button onClick={this.deleteOne}>DEL</button>
                <button onClick={this.clearAll}>AC</button><br />

                <button onClick={() => this.handleChange(4)}>4</button>
                <button onClick={() => this.handleChange(5)}>5</button>
                <button onClick={() => this.handleChange(6)}>6</button>
                <button onClick={() => this.handleChange('+')}>+</button>
                <button onClick={() => this.handleChange('(')}>(</button><br />

                <button onClick={() => this.handleChange(7)}>7</button>
                <button onClick={() => this.handleChange(8)}>8</button>
                <button onClick={() => this.handleChange(9)}>9</button>
                <button onClick={() => this.handleChange('-')}>-</button>
                <button onClick={() => this.handleChange(')')}>)</button><br />

                <button onClick={() => this.handleChange('/')}>/</button>
                <button onClick={() => this.handleChange(0)}>0</button>
                <button onClick={() => this.handleChange('*')}>x</button>
                <button onClick={this.calcResult}>=</button>
            </div>
        )
    }
}
export default Example