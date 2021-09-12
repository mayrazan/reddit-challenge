import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const NotFound = () => (
  <Container>
    <h1>404 - Página não encontrada!</h1>
    <Link to="/">Ir para Home</Link>
  </Container>
);

export default NotFound;
