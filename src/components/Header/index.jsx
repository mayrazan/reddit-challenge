import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import ToggleSwitch from '../ToggleSwitch';
import Box from '../Box';

const SectionContainer = styled.header`
  min-height: 91px;
  height: auto;
  background-color: ${({ theme }) => theme.background.shadesPurple};
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const chooseColor = {
  REACT: 'header',
  JS: 'title',
};

const Header = () => (
  <SectionContainer>
    <Box width="100%" display="flex" justifyContent="flex-end">
      {'REACT JS'.split(/[\s,]+/).map((item) => (
        <Text color={chooseColor[item]} variant="title" key={item}>
          {item}
        </Text>
      ))}
    </Box>

    <ToggleSwitch />
  </SectionContainer>
);

export default Header;
