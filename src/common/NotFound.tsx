import React, { FunctionComponent } from 'react';

interface INotFound {
  location: Location;
}

const NotFound: FunctionComponent<INotFound> = ({ location }) => (
  <div>
    No match for:&nbsp;
    <code>{location.pathname}</code>
  </div>
);

export default NotFound;
