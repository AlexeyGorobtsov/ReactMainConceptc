import React from 'react';
import {ThemeContext, themes} from "./theme-context";
import {ThemeContext2} from './ThemeContext2';
import {Toolbar} from "./Toolbar";
import ThemedButton from "./ThemedButton";
import {Content} from "./Content";

export class AppD extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark
            }))
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        return(
            <div>
                <ThemeContext.Provider
                    value={this.state.theme}
                >
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <ThemeContext2.Provider
                    value={this.state}
                >
                <Content/>
                </ThemeContext2.Provider>
            </div>
        )
    }
}