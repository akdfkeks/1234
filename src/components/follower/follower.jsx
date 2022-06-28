import { Component } from 'react';

export default class Follower extends Component {
    render() {
        return (
            <ul> {this.props.items} </ul>
        );
    }
}