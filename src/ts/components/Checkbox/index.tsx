// Imports
// -------

// Libraries
import React from 'react';
// Images
import checkedCheckbox from '../../../img/checkedCheckbox.svg';
import emptyCheckbox from '../../../img/emptyCheckbox.svg';
import filledCheckbox from '../../../img/filledCheckbox.svg';
// Styles
import style from './style.module.css';

// Internal
// --------

export interface CheckboxProps {
    checked?: boolean
    children: string,
    role?: 'checkbox' | 'radiobutton',
    onClick?(): any
}

const Checkbox: React.FC<CheckboxProps> = ({checked, role = 'checkbox', onClick, children}) => {
    //
    // Render

    const imgSrc = checked ? (role === 'checkbox' ? checkedCheckbox : filledCheckbox) : emptyCheckbox;

    return (
        <label className={ style.checkbox } onClick={ onClick }>
            <img src={ imgSrc } alt={ `${children} ${checked ? 'checked' : ''}` } className={ style.icon }/>
            {/*<input type="checkbox"/>*/}
            { children }
        </label>
    );
}

// Exports
// -------

export default Checkbox;
