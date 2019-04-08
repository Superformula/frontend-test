import React from 'react';

const ButtonFilter = ({label, defaultOff = null, options = [], filter = null, onFilterChange}) => {
    const makeSelection = (selected) => {
        if (filter === selected || selected === defaultOff) {
            onFilterChange(null);
            return
        }
        if (onFilterChange) onFilterChange(selected);
    };

    const extraClass = !!filter ? 'selected' : '';

    return <div className='button-filter'>
        <div className={`label ${extraClass}`}>{label}</div>
        <div className='options row'>
            {[defaultOff, ...options].map(option => {
                return <div key={option} className={`option ${option === filter ? extraClass : null}`}
                            onClick={() => makeSelection(option)}>
                    {option}
                </div>;
            })}
        </div>
    </div>;
};

export default ButtonFilter;
