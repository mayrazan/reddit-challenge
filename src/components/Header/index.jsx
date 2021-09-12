import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Text from '../Text';
import ToggleSwitch from '../ToggleSwitch';

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
    <Grid container spacing={3} alignItems="center">
      <Grid item xs />
      <Grid item xs>
        {'REACT JS'.split(/[\s,]+/).map((item) => (
          <Text color={chooseColor[item]} variant="title" key={item}>
            {item}
          </Text>
        ))}
      </Grid>
      <Grid item xs={3} md={1}>
        <ToggleSwitch />
      </Grid>
    </Grid>
  </SectionContainer>
);

export default Header;
