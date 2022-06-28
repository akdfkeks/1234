import { Component } from 'react';

export default class Board extends Component {
    render() {
        return (
            <ul> {this.props.items} </ul>
        );
    }
}