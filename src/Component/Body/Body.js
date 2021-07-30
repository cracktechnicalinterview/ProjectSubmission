import React, { Component } from 'react';
import "./Body.css";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="body__container">
            <div className="body__timerText">
                <span className="body__min">{ this.props.minutes }</span>
                <span className="body__mintext">m</span> 
                <span className="body__sec">{ this.props.seconds }</span>
                <span className="body__sectext">s</span> 
            </div>
        </div> 
        );
    }
}
 
export default Body;