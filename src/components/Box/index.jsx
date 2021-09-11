/* eslint-disable consistent-return */
import styled from 'styled-components';
import styleProps from '../../utils/receiveStyleProps';

const Box = styled.div`
  ${styleProps('width')}
  ${styleProps('display')}
  ${styleProps('justifyContent')}
`;

export default Box;
