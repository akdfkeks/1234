import { Component } from 'react';

export default class FollowerItem extends Component {
    checkItem() {
        const checkComponent = document.querySelector("#follower-item" + this.props.id);
        if (checkComponent.style.cssText) {
            checkComponent.style.cssText = 0;
        } else {
            checkComponent.style.cssText = "text-decoration: line-through";
        }
    }
    render() {
        return (
            <li id={"follower-item"+this.props.id}>
                {this.props.text}
            </li>
        );
    }
}