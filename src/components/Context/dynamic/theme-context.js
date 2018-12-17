import React from 'react';
export const themes = {
    light: {
        color: '#000',
        background: '#eee',
    },
    dark: {
        color: '#fff',
        background: 'blue'
    }
};

export const ThemeContext = React.createContext(
    themes.dark
);