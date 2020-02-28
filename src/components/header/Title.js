import React, {Component} from 'react';

class Title extends Component{
    render(){
        return(
            <div>
                This is title 
                {this.props.titleProps}
            </div>
        )
    }
}
export default Title