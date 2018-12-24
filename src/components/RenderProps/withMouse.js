import React from 'react';
import {Mouse} from "./Mouse";

export function withMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )}/>
            );
        }
    }
}