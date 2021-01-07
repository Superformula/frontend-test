import React from 'react';
import check from '../../assets/check.svg';
import nocheck from '../../assets/no-check.svg';

export default ({label, isSelected}) => {
    return <div className="filter-option">
        <span className="check">
            {isSelected && <img src={check} />}
            {!isSelected && <img src={nocheck} />}
        </span>
        <span className="item-label">{label}</span>
    </div>
}