import Board from "./board";
import BoardItem from "./boardItem";
import { Component } from 'react';

export default class BoardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemNum: 0,
            items: []
        };
    }

    deleteItem(num) {
        const selected = document.querySelector('#board-item'+num);
        if (selected) {
            selected.remove();
        }
    }

    addItem() {
        const inputText = document.querySelector('#inputText');
        if (inputText.value) {
            const tempArr = [...this.state.items];
            tempArr.push(
            <BoardItem
                //id={this.state.itemNum++}
                id={this.setState({itemNum: this.state.itemNum+1})}
                text={inputText.value}
                delete={(num)=>{
                    this.deleteItem(num)}}
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
                autoComplete="off"
                id="inputText"
                type="text"
                placeholder="게시판 이름">
                </input>
                <input type="button" value="↩" onClick={()=>{ this.addItem() }}
                />
                <Board items={this.state.items}/>
            </div>
        );
    }
}