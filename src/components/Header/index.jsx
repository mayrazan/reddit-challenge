import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Text, { TextStyleVariants } from '../Text';
import ToggleSwitch from '../ToggleSwitch';
import Profile from '../Profile';

const SectionContainer = styled.header`
  min-height: 91px;
  height: auto;
  background-color: ${({ theme }) => theme.background.shadesPurple};
  padding: 0 9px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${({ theme }) => theme.breakpoints.md} {
    padding: 0 16px;
  }
`;

const TextStyled = styled(Text)`
  ${TextStyleVariants('titleSM')}
  ${({ theme }) => theme.breakpoints.sm} {
    ${TextStyleVariants('title')}
  }
`;

const chooseColor = {
  REACT: 'header',
  JS: 'title',
};

const Header = () => (
  <SectionContainer>
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={2} sm>
        <Profile />
      </Grid>
      <Grid item xs>
        {'REACT JS'.split(/[\s,]+/).map((item) => (
          <TextStyled color={chooseColor[item]} key={item}>
            {item}
          </TextStyled>
        ))}
      </Grid>
      <Grid item xs={2} md={1}>
        <ToggleSwitch />
      </Grid>
    </Grid>
  </SectionContainer>
);

export default Header;
