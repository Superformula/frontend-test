import React from 'react';
import {svgX} from '../utils';

export default () => {
    return (
        <div className='Filter'>
            <div className='Label'>Filter by:</div>
            <div className='Content'>All</div>
            {svgX({className: 'X'})}
        </div>
    );
};