import React, { SFC } from 'react';

interface INotFound {
  location: Location;
}

const NotFound: SFC<INotFound> = ({ location }) => (
  <div>
    No match for:&nbsp;
    <code>{location.pathname}</code>
  </div>
);

export default NotFound;
