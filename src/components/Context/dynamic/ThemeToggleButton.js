import React from 'react';
import {ThemeContext2} from "./ThemeContext2";


export class ThemeToggleButton extends React.Component {
    render() {
        return(
            <ThemeContext2.Consumer>
                {({theme, toggleTheme}) => (
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: theme.background,
                            color: theme.color
                        }}
                    >
                        Toggle Theme2
                    </button>
                )}
            </ThemeContext2.Consumer>
        )
    }
}

ThemeToggleButton.contextType = ThemeContext2;
export default ThemeToggleButton;