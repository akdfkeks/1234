import React, { Component } from 'react';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state={
            titleArr:[]
        }
        this.title();
    }
    title(){
        this.props.items.forEach((i)=> console.log(i));
        

    };
    render() {
        return (
            <ul> {this.state.titleArr} </ul>
        );
    }
}