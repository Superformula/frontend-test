import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import classNames from 'classnames';
import { openNowContainer, openNowCircle, openNowText, red, large } from './openNow.module.scss';

const OpenNowIndicator = ({ openNow, size }) => {
    return (
        <div className={openNowContainer}>
            <div className={classNames(openNowCircle, { [red]: !openNow, [large]: size === 'large' })} />
            <div className={openNowText}>{openNow ? 'OPEN NOW' : 'CLOSED'}</div>
        </div>
    );
};

OpenNowIndicator.defaultProps = { size: 'small' };
OpenNowIndicator.propTypes = { openNow: PropTypes.bool };

export default OpenNowIndicator;
