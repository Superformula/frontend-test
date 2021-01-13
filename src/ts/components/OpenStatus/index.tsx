// Imports
// -------

// Libraries
import React from 'react';
// Images
import closedIcon from '../../../img/closedIcon.svg'
import openIcon from '../../../img/openIcon.svg'
// Styles
import style from './style.module.css';

// Internal
// --------

export interface OpenStatusProps {
    isOpen?: boolean,
    size?: 'small' | 'large'
}

const OpenStatus: React.FC<OpenStatusProps> = ({isOpen = true, size = 'small'}) => {
    //
    // Render

    if (isOpen) {
        return (
            <div className={ style.openStatus }>
                <img src={ openIcon } alt='open' className={ style[size] } />
                Open Now
            </div>
        );
    }

    return (
        <div className={ style.openStatus }>
            <img src={ closedIcon } alt='closed' className={ style[size] }/>
            Closed
        </div>
    );
}

OpenStatus.defaultProps = {
    isOpen: true
}

// Exports
// -------

export default OpenStatus;
