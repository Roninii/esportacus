import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Link = styled.a`
  font-size: 1.3rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #fafafa;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    color: var(--purple);
  }
`;

const NavLink = ({ path }) => <Link href={path}>{path.toUpperCase()}</Link>;

NavLink.propTypes = {
  path: PropTypes.string,
};
NavLink.defaultProps = {
  path: '#',
};

export default NavLink;
