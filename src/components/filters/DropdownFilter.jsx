import React from 'react';
import {svgDownArrow} from 'Utils';

const DropdownFilterOption = ({option, checked, onSelect}) => {
    return <div className='option' onClick={() => onSelect(option)}>
        <input type='checkbox' value={option} checked={checked}/>
        {option}
    </div>;
};

const DropdownFilter = ({label, help, options = [], filter = null, onFilterChange}) => {
    const extraClass = !!filter ? 'selected' : '';
    const onSelect = (value) => {
        if (onFilterChange) onFilterChange(value);
    };

    return <div className='dropdown-filter row'>
        <div className={`label ${extraClass}`}>{label}</div>
        {help
            ? <div className='label help'>{help}</div>
            : ''}
        <div className='dropdown' onClick={() => {
        }}>
            <div className='content'>All</div>
            {svgDownArrow()}
        </div>
        <div className='dropdown-menu'>
            {options.map(option => <DropdownFilterOption onSelect={onSelect} option={option} checked={filter === option}/>)}
        </div>
    </div>;
};

export default DropdownFilter;
