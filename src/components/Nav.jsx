import React from 'react';
import styled from '@emotion/styled';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #252525;
  box-shadow: 0 5px 15px #000;
  min-height: 7vh;
  font-weight: 600;
  font-size: 1.1rem;
`;
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;
const NavLink = styled.a`
  font-size: 1.3rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #fafafa;
`;

const Nav = () => (
  <Navbar>
    <NavList>
      <li>
        <NavLink href="#">Games</NavLink>
      </li>
      <li>
        <NavLink href="#">Leagues</NavLink>
      </li>
      <li>
        <NavLink href="#">Login</NavLink>
      </li>
      <li>
        <NavLink href="#">Register</NavLink>
      </li>
    </NavList>
  </Navbar>
);

export default Nav;
