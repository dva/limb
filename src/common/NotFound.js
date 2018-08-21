import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ location }) => (
  <div>
    No match for:&nbsp;
    <code>{location.pathname}</code>
  </div>
);

NotFound.propTypes = {
  location: PropTypes.string,
};

NotFound.defaultProps = {
  location: '',
};

export default NotFound;
