import {DEFAULT_LIMIT} from 'Constants';
import React, {useState} from 'react';
import {checkedCircle, downArrow, uncheckedCircle} from 'Utils/svgs';

const DropdownFilterOption = ({selection, checked, onSelect}) => {
    return <div className='option row' onClick={() => onSelect(selection.alias || selection)}>
        {checked ? checkedCircle() : uncheckedCircle()}
        <input type='checkbox' value={selection.alias || selection} checked={checked} readOnly/>
        <div className='text'>{selection.title || selection}</div>
    </div>;
};

const DropdownFilter = ({label, help, options = [], filter = null, onFilterChange}) => {
    const extraClass = !!filter ? 'selected' : '';
    const [open, setOpen] = useState(!!filter);
    const onSelect = (value) => {
        if (filter === value) {
            onFilterChange(null);
            return;
        }
        if (onFilterChange) onFilterChange(value);
    };
    const smartToggle = onSelect => value => {
        if (window.matchMedia('(min-width: 680px)').matches && open) setOpen(false);
        onSelect(value);
    };
    return <div className='dropdown'>
        <div className='dropdown-filter row' onClick={() => setOpen(!open)}>
            <div className={`label ${extraClass}`}>{label}</div>
            {help ? <div className='label help'>{help}</div> : ''}
            <input type='checkbox' checked={open} readOnly/>
            <div className='display'>
                <div className='content'>{filter || 'All'}</div>
                {downArrow()}
            </div>
        </div>
        <div className={`dropdown-menu ${open ? '' : 'closed'}`}>
            {options.slice(0, DEFAULT_LIMIT).filter(n => n !== null).map(option => <DropdownFilterOption
                selection={option}
                key={option.alias || option.title || option}
                onSelect={smartToggle(onSelect)}
                checked={filter === (option.alias || option)}
            />)}
            <div className='ellipsis'>{options.length > DEFAULT_LIMIT ? '...' : ''}</div>
        </div>
    </div>;
};

export default DropdownFilter;
