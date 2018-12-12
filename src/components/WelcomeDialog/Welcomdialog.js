import React from 'react';
import {FancyBorder} from "../FancyBorder";
import './welcomdialog.css';
export class Welcomedialog extends React.Component {
    render() {
        return(
            <FancyBorder color={'blue'}>
                <h1 className={'Dialog-title'}>
                    Welcome
                </h1>
                <p className={'Dialog-message'}>
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>
        )
    }
}