import React from 'react';
import styled from '@emotion/styled';

import NavLink from './NavLink';

const NavListDesktop = styled.ul`
  display: none;
  @media screen and (min-width: 800px) {
    display: flex;
    list-style-type: none;
    padding: 0.75rem;
    align-items: center;
    justify-content: flex-end;
  }
`;

const pages = ['games', 'leagues', 'login', 'register'];
const DesktopNav = () => (
  <NavListDesktop>
    {pages.map(page => (
      <li key={page}>
        <NavLink path={page} />
      </li>
    ))}
  </NavListDesktop>
);

export default DesktopNav;
