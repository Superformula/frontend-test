import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { controlContainer } from './Controls.module.scss';
import { arrow, arrowUp, itemLabel } from './Dropdown.module.scss';
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        borderRadius: '0px',
        marginTop: '5px',
        boxShadow: `0px 6px 5px 0px rgba(0,0,0,0.1)`
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        fontFamily: 'Helvetica Neue',
        padding: 5,
        minHeight: 0
    }
}))(MenuItem);

const StyledIcon = withStyles(theme => ({
    root: {
        minWidth: '10px'
    }
}))(ListItemIcon);

const Dropdown = ({ label, items, selected, onChange, width }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={controlContainer} style={{ width: `${width}px` }}>
            <div onClick={handleClick}>
                {label} <div className={classNames(arrow, { [arrowUp]: Boolean(anchorEl) })} />
            </div>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                // open={true}
                onClose={handleClose}
            >
                {items.map(item => (
                    <StyledMenuItem
                        key={item.value}
                        onClick={() => {
                            onChange(item.value);
                            handleClose();
                        }}
                        style={{ width: `${width}px` }}
                    >
                        <StyledIcon>
                            {selected === item.value ? (
                                <CheckCircleIcon style={{ fontSize: 18, color: 'black', minWidth: '30px' }} />
                            ) : (
                                <RadioButtonUncheckedIcon
                                    style={{ fontSize: 18, color: '#C8C8C8', minWidth: '30px' }}
                                />
                            )}
                        </StyledIcon>
                        <div className={itemLabel}>{item.label}</div>
                    </StyledMenuItem>
                ))}
            </StyledMenu>
        </div>
    );
};

Dropdown.propTypes = {
    label: PropTypes.string,
    items: PropTypes.array,
    selected: PropTypes.string,
    onChange: PropTypes.func,
    width: PropTypes.number
};
export default Dropdown;
