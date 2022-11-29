import React, { Component } from 'react';
import './follower.css';

export default class FollowerTitle extends Component {
    render() {
        return (
            <div className="FollowerTitle">
                {this.props.text}
            </div>
        );
    }
}