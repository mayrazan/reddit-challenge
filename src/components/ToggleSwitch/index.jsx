import React from 'react';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import styled from 'styled-components';
import Box from '../Box';
import { useTheme } from '../../hooks/useTheme';

const BoxStyled = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconStyled = styled(Brightness4Icon)`
  && {
    fill: ${({ theme }) => theme.background.fill};
  }
`;

export default function ToggleSwitch() {
  const { isChecked, handleChange } = useTheme();
  return (
    <BoxStyled>
      <Switch
        checked={isChecked}
        onChange={handleChange}
        color="default"
        name="checkedTheme"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <IconStyled fontSize="large" />
    </BoxStyled>
  );
}
