import { PropsWithChildren } from 'react';
import Menu from '../type/Menu';

type MenuItemProp = {
  menu: Menu,
}

export default function MenuItem({
  menu, children,
}: PropsWithChildren<MenuItemProp>) {
  return (
    <li
      style={{
        listStyleType: 'none',
        display: 'flex',
        paddingBlock: '.4rem',
      }}
    >
      <span
        style={{
          margin: 'auto',
        }}
      >
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>

      {children}
    </li>
  );
}
