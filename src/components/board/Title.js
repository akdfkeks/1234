import React, { Component } from "react";
import './board.css';

export default class Title extends Component {
    render() {
        return (
            <div className="Title">
                {this.props.text}
            </div>
        );
    }
}