import React from 'react';
import { Router } from 'react-router-dom';
import BtnSection from './components/BtnSection';
import Header from './components/Header';
import { ThemeProviderCustom } from './components/hooks/useTheme';
import Routes from './routes';
import history from './utils/history';

function App() {
  return (
    <ThemeProviderCustom>
      <Router history={history}>
        <Header />
        <BtnSection />
        <Routes />
      </Router>
    </ThemeProviderCustom>
  );
}

export default App;
