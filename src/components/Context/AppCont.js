import React from 'react';
import {Toolbar} from "./Toolbar";
import {ThemedContext} from './themed'


export class AppCont extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <ThemedContext.Provider value={'hello'}>
                <Toolbar />
            </ThemedContext.Provider>

        )
    }
}



