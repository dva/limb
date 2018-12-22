import React, { SFC } from 'react';
import style from './style';

interface IContentProps {
  value: string;
}

const Content: SFC<IContentProps> = ({ value }) => (
  <>{value}</>
);

const Home = () => (
  <div style={style}>
    <Content value='hi' />
  </div>
);

export default Home;
