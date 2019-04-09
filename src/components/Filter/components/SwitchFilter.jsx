import Switch from 'Components/Switch';
import React from 'react';

const SwitchFilter = ({label, filter = false, onFilterChange}) => {
    const extraClass = filter ? 'selected' : '';

    return <div className='switch-filter row' onClick={() => onFilterChange(!filter)}>
        <div className={`label ${extraClass}`}>{label}</div>
        <Switch value={filter}/>
    </div>;
};

export default SwitchFilter;
