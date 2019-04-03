import React from 'react';
import {svgDownArrow, svgX} from '../utils';

export default () => {
    return (
        <div className='filter closed'>
            <div className='row row-dropdown'>
                <div className='label'>Filter by:</div>
                <div className='dropdown'>
                    <div className='content'>All</div>
                    {svgDownArrow({className: 'control'})}
                </div>
                {svgX({className: 'cross'})}
            </div>
            <div className='row row-button spaced'>
                <div className='button clear'>Clear All</div>
                <div className='button apply'>Apply</div>
            </div>
        </div>
    );
};
