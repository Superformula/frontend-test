import React from 'react';

const ButtonSelector = ({label, options = [], selection = null, onSelectionChange}) => {
    const makeSelection = (selected) => {
        if (onSelectionChange) onSelectionChange(selected);
    };

    const extraClass = !!selection ? 'selected' : '';

    return <div className='button-selector'>
        <div className={`label ${extraClass}`}>{label}</div>
        <div className='options row'>
            {options.map(option => {
                return <div key={option} className={`option ${option === selection ? extraClass : null}`}
                            onClick={() => makeSelection(option)}>
                    {option}
                </div>;
            })}
        </div>
    </div>;
};

export default ButtonSelector;
