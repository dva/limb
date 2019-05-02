import React, { FC } from 'react';
import style from './style';

interface IContentProps {
  value: string;
}

const Content: FC<IContentProps> = ({ value }) => <>{value}</>;

const Home = () => (
  <div style={style}>
    <Content value='hi' />
  </div>
);

export default Home;
