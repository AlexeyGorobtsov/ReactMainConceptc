import React from 'react';
import {ListOfWords} from "./ListOfWords";

export class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState(state => ({
        //     words: state.words.concat(['marklar'])
        // }))
        this.setState(state => ({
            words: [...state.words, 'marklar']
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Click
                </button>
                <ListOfWords words={this.state.words}/>
            </div>
        )
    }
}