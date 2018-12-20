import React from 'react';

export function NumberDescription(props) {
    let descripition = null;
    if(props.number % 2 === 0) {
        descripition = <strong>even</strong>
    } else {
        descripition = <i>odd</i>
    }

    return <div>{props.number} is an {descripition} number</div>
}