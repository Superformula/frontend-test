import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loaderContainer, spinner } from './Loader.module.scss';
const useStyles = makeStyles(theme => ({
    progress: {
        color: '#002b57'
    }
}));

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={loaderContainer}>
            <div className={spinner}>
                <CircularProgress size={50} thickness={4} className={classes.progress} />
            </div>
        </div>
    );
};
export default Loader;
