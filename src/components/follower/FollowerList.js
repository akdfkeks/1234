import { Component } from 'react';
import Follower from "./follower";
import FollowerItem from "./followeItem";

export default class FollowerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemNum: 0,
            items: []
        };
    }

    addItem() {
        const inputText = document.querySelector('#inputText');
        if (inputText.value) {
            const tempArr = [...this.state.items];
            tempArr.push(
                <FollowerItem
                    id={this.setState({itemNum: this.state.itemNum+1})}
                    text={inputText.value}
                    />
            );
            this.setState({
                items: tempArr
            })
            inputText.value=""
        }
    }

    render() {
        return (
            <div>
                <input
                autocomplete="off"
                id="inputText"
                type="text"
                placeholder="Follower">
                </input>
                <Follower items={this.state.items}/>
            </div>
        );
    }
}