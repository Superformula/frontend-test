import {DEFAULT_LIMIT} from 'Constants';
import React, {useState} from 'react';
import {svgCheckedCircle, svgDownArrow, svgUncheckedCircle} from 'Utils';

const DropdownFilterOption = ({selection, checked, onSelect}) => {
    return <div className='option row' onClick={() => onSelect(selection.alias)}>
        {checked ? svgCheckedCircle() : svgUncheckedCircle()}
        <input type='checkbox' value={selection.alias} checked={checked} readOnly/>
        <div className='text'>{selection.title}</div>
    </div>;
};

const DropdownFilter = ({label, help, options = [], filter = null, onFilterChange}) => {
    const extraClass = !!filter ? 'selected' : '';
    const onSelect = (value) => {
        if (filter === value) {
            onFilterChange(null);
            return
        }
        if (onFilterChange) onFilterChange(value);
    };

    const [open, setOpen] = useState(!!filter);
    return <div className='dropdown-filter row'>
        <div className={`label ${extraClass}`}>{label}</div>
        {help
            ? <div className='label help'>{help}</div>
            : ''}
        <input type='checkbox' checked={open} readOnly/>
        <div className='dropdown' onClick={() => setOpen(!open)}>
            <div className='content'>{filter || 'All'}</div>
            {svgDownArrow()}
        </div>
        <div className={`dropdown-menu ${open ? '' : 'closed'}`}>
            {options.slice(0, DEFAULT_LIMIT).filter(n => n !== null).map(option => <DropdownFilterOption
                selection={option}
                key={option.alias || option.title || option}
                onSelect={onSelect}
                checked={filter === option.alias}
            />)}
            <div className='ellipsis'>{options.length > DEFAULT_LIMIT ? '...' : ''}</div>
        </div>
    </div>;
};

export default DropdownFilter;
