import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loaderContainer, spinner } from './Loader.module.scss';
const useStyles = makeStyles(() => ({
	progress: {
		color: '#002b57'
	}
}));

const Loader = ({ wrapperClassname }) => {
	const classes = useStyles();
	return (
		<div className={classNames(loaderContainer, wrapperClassname)}>
			<div className={spinner}>
				<CircularProgress size={50} thickness={4} className={classes.progress} />
			</div>
		</div>
	);
};
Loader.propTypes = { wrapperClassname: PropTypes.string };
export default Loader;
