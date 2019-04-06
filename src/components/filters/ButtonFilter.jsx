import React from 'react';

const ButtonFilter = ({label, options = [], filter = null, onFilterChange}) => {
    const makeSelection = (selected) => {
        if (onFilterChange) onFilterChange(selected);
    };

    const extraClass = !!filter ? 'selected' : '';

    return <div className='button-filter'>
        <div className={`label ${extraClass}`}>{label}</div>
        <div className='options row'>
            {options.map(option => {
                return <div key={option} className={`option ${option === filter ? extraClass : null}`}
                            onClick={() => makeSelection(option)}>
                    {option}
                </div>;
            })}
        </div>
    </div>;
};

export default ButtonFilter;
