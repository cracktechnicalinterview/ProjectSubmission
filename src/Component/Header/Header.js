import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="header">
            STOPWATCH
        </div> 
        );
    }
}
 
export default Header;