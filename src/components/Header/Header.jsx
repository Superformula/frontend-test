import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { contentContainer } from 'scss/layout.module.scss';
import { header, title } from './Header.module.scss';

const Header = ({ children, headerTitle }) => {
	return (
		<div className={classNames(header, contentContainer)}>
			<div className={title}>{headerTitle}</div>
			{children}
		</div>
	);
};
Header.propTypes = {
	children: PropTypes.any,
	headerTitle: PropTypes.string
};
export default Header;
