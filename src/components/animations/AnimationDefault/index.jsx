import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../../Box';

const AnimationLottie = styled(Lottie)`
  width: 350px !important;
  height: 350px !important;
${({ theme }) => theme.breakpoints.md}{
  width: 500px !important;
  height: 500px !important;
  }
`;

const AnimationDefault = ({ animation }) => (
  <Box display="flex" justifyContent="center">
    <AnimationLottie
      config={{
        animationData: animation,
        loop: true,
        autoplay: true,
      }}
    />
  </Box>
);

export default AnimationDefault;

AnimationDefault.propTypes = {
  animation: PropTypes.shape({}).isRequired,
};
