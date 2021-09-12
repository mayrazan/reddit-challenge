import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const LoadingStyled = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Loading = ({ size }) => (
  <LoadingStyled>
    <CircularProgress size={size} color="inherit" />
  </LoadingStyled>
);

export default Loading;

Loading.propTypes = {
  size: PropTypes.number.isRequired,
};
