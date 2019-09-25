/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showError: false };
	}

	componentDidCatch(error, errorInfo) {
		console.log('App error:', error);
		console.log('App error info:', errorInfo);
		this.setState({ showError: true });
	}

	render() {
		if (this.state.showError) {
			return <h1>Sorry, something went wrong. Please refresh the browser and try again.</h1>;
		}

		return this.props.children;
	}
}

ErrorBoundary.propTypes = { children: PropTypes.any };

export default ErrorBoundary;
