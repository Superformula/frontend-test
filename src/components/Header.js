import React from 'react';

const Header = ({title, children}) => {
    return (
        <div className='header'>
            <div className='title'>{title}</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default Header;
