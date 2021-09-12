import React from 'react';
import { ThemeProviderCustom } from './hooks/useTheme';
import Routes from './routes';

function App() {
  return (
    <ThemeProviderCustom>
      <Routes />
    </ThemeProviderCustom>
  );
}

export default App;
