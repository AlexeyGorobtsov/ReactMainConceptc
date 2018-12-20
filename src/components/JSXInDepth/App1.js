import React from 'react';
import {Greeting} from "./Greeting";

export function App1() {
    return <Greeting firstName={'Ben'} lastName={'Hector'} />
}

export function App2() {
        const props = {firstName: 'Bob', lastName: 'Super'};
        return <Greeting {...props}/>
}