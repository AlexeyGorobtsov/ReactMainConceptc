import React from 'react';
import {Chosen} from "./Chosen";

export function Example() {
    return(
        <Chosen
            onChange={value => console.log(value)}
        >
            <option>vanilla</option>
            <option>chocolate</option>
            <option>strawberry</option>
        </Chosen>
    )
}