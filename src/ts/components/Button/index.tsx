// Imports
// -------

// Libraries
import React from 'react';
// Style
import style from './style.module.css';

// Internal
// --------

export interface ButtonProps {
    text: string,
    tier?: 'primary' | 'secondary',
    size?: 'small' | 'large' | 'full',
    disabled?: boolean,
    onClick?(): any
}

const Button: React.FC<ButtonProps> = ({text, tier= 'primary', size= 'small', disabled= false, onClick= () => {}}) => {
    //
    // Render

    const className = [style.base, style[tier], style[size], disabled ? style.disabled : ''].join(' ');

    return (
        <button className={ className } onClick={ onClick }>{ text }</button>
    );
}

// Exports
// -------

export default Button;
