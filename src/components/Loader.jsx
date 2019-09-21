import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loaderContainer, spinner } from './Loader.module.scss';
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    progress: {
        color: green
    }
}));

const Loader = ({ loading }) => {
    const classes = useStyles();
    return loading ? (
        <div className={loaderContainer}>
            <div className={spinner}>
                <CircularProgress size={80} className={classes.progress} />
            </div>
        </div>
    ) : null;
};
export default Loader;
