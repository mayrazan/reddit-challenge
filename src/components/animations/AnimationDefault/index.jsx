import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Box from '../../Box';

const AnimationDefault = ({ animation }) => (
  <Box display="flex" justifyContent="center">
    <Lottie
      width="500px"
      height="500px"
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
