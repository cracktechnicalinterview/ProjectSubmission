import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div class="footer__container">
           { 
           this.props.pause ?
           <button class="btn btn-start" onClick={this.props.handlePauseToggle}>START</button> :
           <button class="btn btn-stop" onClick={this.props.handlePauseToggle}>STOP</button>
         }
            <button class="btn btn-reset" onClick={this.props.resetHandler}>RESET</button>
        </div> );
    }
}
 
export default Footer;