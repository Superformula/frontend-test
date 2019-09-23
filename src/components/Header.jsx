import React from 'react';
import classNames from 'classnames';
import { header, title, description } from './Header.module.scss';

const Header = ({ children, headerTitle }) => {
    return (
        <div className={classNames(header, 'contentContainer')}>
            <div className={title}>{headerTitle}</div>
            {children}
        </div>
    );
};
// TODO proptypes
export default Header;
