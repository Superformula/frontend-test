import React, { Component } from 'react'; // eslint-disable-line
import { object, node } from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  static propTypes = {
    children: node.isRequired,
    location: object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
