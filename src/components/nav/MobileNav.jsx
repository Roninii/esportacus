import React, { useState } from 'react';
import styled from '@emotion/styled';

import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';

import NavLink from './NavLink';

const NavListMobile = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const NavButton = styled.button`
  background: none;
  border: none;
`;

const MobileNav = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  const pages = ['games', 'leagues', 'login', 'register'];
  return (
    <NavListMobile>
      {active ? (
        pages.map(page => (
          <li key={page}>
            <NavButton onClick={toggleActive}>
              <NavLink path={page} />
            </NavButton>
          </li>
        ))
      ) : (
        <IconContext.Provider value={{ color: 'white', size: '2rem' }}>
          <MdMenu onClick={toggleActive} style={{ cursor: 'pointer' }} />
        </IconContext.Provider>
      )}
    </NavListMobile>
  );
};
export default MobileNav;
