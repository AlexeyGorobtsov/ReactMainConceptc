import React from 'react';


const MyComponents = {
    DatePicker(props) {
        return <div>Imagine a {props.color} datapicer here.</div>;
    }
};

export function BlueDatePicker() {
    return<MyComponents.DatePicker color={'blue'}/>
}

