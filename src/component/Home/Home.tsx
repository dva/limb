import React from 'react';
import style from './style';

const Content = ({ value }: { value: string }) => (
  <>{value}</>
);

const Home = () => (
  <div style={style}>
    <Content value="hi" />
  </div>
);

export default Home;
