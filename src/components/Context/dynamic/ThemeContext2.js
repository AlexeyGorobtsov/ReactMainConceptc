import React from 'react';
import {themes} from "./theme-context";

export const ThemeContext2 = React.createContext({
    theme: themes.dark,
    color: themes.color,
    toggleTheme: () => {}
});