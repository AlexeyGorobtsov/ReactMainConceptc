import React from 'react';
import {SplitPane} from "../SplitPane";
import {Contacts} from "../../Contacts";
import {Chart} from "../Chat";
import './mainApp.css';

export class MainApp extends React.Component {
    render() {
        return(
            <SplitPane
                left={<Contacts/>}
                right={<Chart/>}
            />
        )
    }
}