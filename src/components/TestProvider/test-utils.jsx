import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from '../../theme';
import GlobalStyle from '../../theme/GlobalStyle';
import { lightColors } from '../../theme/colors';

const AllTheProviders = ({ children, ...props }) => (
  <ThemeProvider theme={{ ...theme, ...lightColors }} {...props}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
