import React from 'react';

export default ({ location }) => (
  <div>
    No match for:&nbsp;
    <code>{location.pathname}</code>
  </div>
);
