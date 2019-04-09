import React, { useState } from 'react';
import styled from '@emotion/styled';

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

  transition: all 0.3s;

  &:hover {
    color: var(--purple);
  }
`;
const Nav = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <Navbar>
      {active ? (
        <NavList>
          <li>
            <NavLink onClick={toggleActive} href="#">
              Games
            </NavLink>
          </li>
          <li>
            <NavLink href="#" onClick={toggleActive}>
              Leagues
            </NavLink>
          </li>
          <li>
            <NavLink href="#" onClick={toggleActive}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink href="#" onClick={toggleActive}>
              Register
            </NavLink>
          </li>
        </NavList>
      ) : (
        <li>
          <button type="button" onClick={toggleActive}>
            Click Me
          </button>
        </li>
      )}
    </Navbar>
  );
};
export default Nav;
