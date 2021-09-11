import React from 'react';
import { ThemeProviderCustom } from './components/hooks/useTheme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProviderCustom>
      <Header />
    </ThemeProviderCustom>
  );
}

export default App;
