import React from 'react';
import Switch from '@material-ui/core/Switch';
import Box from '../Box';
import { useTheme } from '../../hooks/useTheme';

export default function ToggleSwitch() {
  const { isChecked, handleChange } = useTheme();
  return (
    <Box width="100%" display="flex" justifyContent="flex-end">
      <Switch
        checked={isChecked}
        onChange={handleChange}
        color="primary"
        name="checkedTheme"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </Box>
  );
}
