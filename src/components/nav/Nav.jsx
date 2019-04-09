import React from 'react';
import styled from '@emotion/styled';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, #111, var(--black));
  box-shadow: 0 5px 15px #000;
  min-height: 7vh;
  font-weight: 600;
  font-size: 1.1rem;
`;

const Nav = () => (
  <Navbar>
    <DesktopNav />
    <MobileNav />
  </Navbar>
);
export default Nav;
