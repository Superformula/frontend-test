import React from 'react';
import {svgX} from '../utils';

export default () => {
    return (
        <div className='filter'>
            <div className='row'>
                <div className='label'>Filter by:</div>
                <div className='dropdown'>
                    <div className='content'>All</div>
                    <div className='control'/>
                </div>
                {svgX({className: 'cross'})}
            </div>
        </div>
    );
};
