import React from 'react';
import classNames from 'classnames';
import { header, title, description } from './Header.module.scss';

const Header = () => {
    return (
        <div className={classNames(header, 'contentContainer')}>
            <div className={title}>Restaurants</div>
            <div className={description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </div>
        </div>
    );
};

export default Header;
