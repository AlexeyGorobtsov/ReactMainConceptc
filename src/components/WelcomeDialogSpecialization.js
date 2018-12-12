import React from 'react';
import {Dialog} from "./Dialog";

export class WelcomeDialogSpecialization extends React.Component {
    render() {
        return(
            <Dialog
                title={'Weclome'}
                message={'Thank you for visiting our spacecraft!'}
            />
        )
    }
}