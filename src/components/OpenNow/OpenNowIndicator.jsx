import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import classNames from 'classnames';
import { openNowContainer, openNowCircle, red, large, openNowText } from './openNow.module.scss';

const OpenNowIndicator = ({ openNow, size }) => {
    let openNowMessage = openNow ? 'Open Now' : 'Closed';
    return (
        <div className={openNowContainer}>
            <div className={classNames(openNowCircle, { [red]: !openNow, [large]: size === 'large' })} />
            <div className={openNowText}>{size === 'large' ? openNowMessage : openNowMessage.toUpperCase()}</div>
        </div>
    );
};

OpenNowIndicator.defaultProps = { size: 'small' };
OpenNowIndicator.propTypes = { openNow: PropTypes.bool };

export default OpenNowIndicator;
