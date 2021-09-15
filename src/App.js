import React from 'react';
import { AuthProvider } from './hooks/useAuth';
import { ThemeProviderCustom } from './hooks/useTheme';
import Routes from './routes';

function App() {
  return (
    <ThemeProviderCustom>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProviderCustom>
  );
}

export default App;
