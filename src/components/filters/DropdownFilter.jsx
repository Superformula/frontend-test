import React, {useState} from 'react';
import {svgCheckedCircle, svgDownArrow, svgUncheckedCircle} from 'Utils';

const DropdownFilterOption = ({selection, checked, onSelect}) => {
    return <div className='option row' onClick={() => onSelect(selection)}>
        {checked ? svgCheckedCircle() : svgUncheckedCircle()}
        <input type='checkbox' value={selection} checked={checked} onChange={() => onSelect(selection)}/>
        <div className='text'>{selection}</div>
    </div>;
};

const DropdownFilter = ({label, help, options = [], filter = null, onFilterChange}) => {
    const extraClass = !!filter ? 'selected' : '';
    const onSelect = (value) => {
        if (onFilterChange) onFilterChange(value);
    };

    const [open, setOpen] = useState(!!filter);

    return <div className='dropdown-filter row'>
        <div className={`label ${extraClass}`}>{label}</div>
        {help
            ? <div className='label help'>{help}</div>
            : ''}
        <input type='checkbox' checked={open}/>
        <div className='dropdown' onClick={() => setOpen(!open)}>
            <div className='content'>{filter || 'All'}</div>
            {svgDownArrow()}
        </div>
        <div className={`dropdown-menu ${open ? '' : 'closed'}`}>
            {options.filter(n => n !== null).map(option => <DropdownFilterOption
                selection={option}
                key={option}
                onSelect={onSelect}
                checked={filter === option}
            />)}
        </div>
    </div>;
};

export default DropdownFilter;
