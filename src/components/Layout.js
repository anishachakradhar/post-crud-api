import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component{
    constructor(){
        super();
        this.state = {
            name: 'Anisha',
            job: 'Student',
            address: 'Kathmandu',
            desc: 'This is for state'
        }
    }
    
    render(){
        setTimeout(() => {
            this.setState({name: 'Ani'})
        }, 3000)
        return(
            <div>
                <h1>Welcome!</h1>
                {this.state.name}, 
                {this.state.address}, 
                {this.state.job},
                {this.state.desc}
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Layout;