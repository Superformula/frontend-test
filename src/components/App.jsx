import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({ loading }) => {
    return <div>Loading - {loading.toString()}</div>;
};

App.propTypes = {
    loading: PropTypes.bool
};

export default connect(
    state => {
        return { loading: state.toJS().loading };
    },
    null
)(App);
