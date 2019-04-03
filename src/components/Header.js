import React from 'react';

export default ({title, children}) => {
    return (
        <div className='Header'>
            <div className='Title'>{title}</div>
            <div className='Content'>{children}</div>
        </div>
    );
};
