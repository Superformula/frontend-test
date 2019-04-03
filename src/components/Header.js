import React from 'react';

export default ({title, children}) => {
    return (
        <div className='header'>
            <div className='title'>{title}</div>
            <div className='content'>{children}</div>
        </div>
    );
};
