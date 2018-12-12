import React, {Component} from 'react';
import {FormatteDate} from "./FormatteDate";

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => {
                this.tick();
            },
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <FormatteDate date={this.state.date}/>
            </div>
        )
    }
}

// function getData(url) {
//     return {
//         data: this.dt,
//         getData() {
//             setTimeout(function () {
//                 console.log(this)
//                 window.dt = url
//             }, 2000)
//         }
//     }
// }
// window.dt