import React from 'react';
import {Columns} from "./Columns";

export class Table extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <Columns/>
                </tr>
                </tbody>
            </table>
        )
    }
}