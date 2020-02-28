import React, {Component} from 'react';

import Title from './header/Title';

class Header extends Component{
    render(){
        const title = "Hello this is props"
        return(
            <div>   
                <Title titleProps = {title}/>
                <header>This is header</header>
            </div>
        )
    }
}
export default Header