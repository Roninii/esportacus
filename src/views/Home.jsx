import React from 'react';
import styled from '@emotion/styled';
import bg from '../assets/bg.jpg';

const Background = styled.div`
  height: 100vh;
  background: top/cover url(${bg});
`;

const Home = () => <Background />;

export default Home;
