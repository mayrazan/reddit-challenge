import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themeProps from '../../theme';
import GlobalStyle from '../../theme/GlobalStyle';
import { darkColors, lightColors } from '../../theme/colors';

const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: {},
  handleChange: () => {},
  isChecked: false,
  handleChangeInput: () => {},
  valueSearch: '',
  setValueSearch: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProviderCustom({ children }) {
  const [isChecked, setIsChecked] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const combineTheme = (colors) => ({ ...themeProps, ...colors });

  const [theme, setTheme] = useState(combineTheme(lightColors));

  const toggleTheme = useCallback(() => {
    setTheme(isChecked ? combineTheme(darkColors) : combineTheme(lightColors));
  }, [isChecked]);

  useEffect(() => {
    toggleTheme();
  }, [isChecked]);

  const handleChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setValueSearch(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
        handleChange,
        isChecked,
        handleChangeInput,
        valueSearch,
        setValueSearch,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProviderCustom.propTypes = {
  children: PropTypes.node.isRequired,
};
