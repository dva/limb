import React from 'react';
import { Link } from 'react-router-dom';

interface IItem {
  title: string;
  route: string;
}

const menu = [
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  { title: 'Hooks', route: '/hooks' },
  { title: '404', route: '/foo/bar' },
];

const menuItem = (item: IItem, idx: number) => (
  <li key={idx}>
    <Link to={item.route}>{item.title}</Link>
  </li>
);

const Header = () => <ul>{menu.map((item, idx) => menuItem(item, idx))}</ul>;

export default Header;
