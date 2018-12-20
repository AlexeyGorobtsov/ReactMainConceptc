import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';

export function Button() {
    return <button id={'btn'}>Say Hello</button>
}

ReactDOM.render(
    <Button/>,
    document.getElementById('container'),
    function() {
        $('#btn').click(function () {
            alert('Hello');
        })
    }
);