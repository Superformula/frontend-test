// Imports
// -------

// Libraries
import React from 'react';
// Components
import Button from '../Button';
// Strings
import strings from "./strings";
// Style
import style from './style.module.css';

// Internal
// --------

export interface FilterByProps {
    children: React.ReactNode,
    clearAll?(): any,
    disableClearAll?: boolean
}

const FilterBy: React.FC<FilterByProps> = ({children, clearAll = () => {}, disableClearAll = false}) => {
    //
    // Render

    return (
        <div className={ style.filterBy }>
            <div className={ style.filterByText }>Filter By:</div>
            {
                React.Children.map(children, (child, idx) => (
                    <div key={idx} className={ style.filterByOption }>
                        { child }
                    </div>
                ))
            }
            <div className={ style.clearAllButton }>
                <Button text={ strings.clearAll } tier="secondary" onClick={ clearAll } disabled={ disableClearAll }/>
            </div>
        </div>
    );
}

// Exports
// -------

export default FilterBy;
