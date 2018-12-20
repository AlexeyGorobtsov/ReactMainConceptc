import React from 'react';

export const Button = props => {
    const {kind, ...other} = props;
    const className = kind === 'primary'
        ? 'PrimaryButton'
        : 'SecondryButton';
    return <button className={className} {...other} />
};

export const App3 = () => {
    return (
        <div>
            <Button
                kind={'primary'}
                onClick={() => console.log('clicked!')}
            >
                Hello World!
            </Button>
        </div>
    )
}