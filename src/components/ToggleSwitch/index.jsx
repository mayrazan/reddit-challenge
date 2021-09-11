import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useTheme } from '../hooks/useTheme';
import Box from '../Box';

export default function ToggleSwitch() {
  const { handleChange, isChecked } = useTheme();
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
