import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({
  user: null,
  token: '',
  login: () => {},
  logout: () => {},
  isSigned: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storagedUser = localStorage.getItem('user');
    const storagedToken = localStorage.getItem('@token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      setToken(storagedToken);
    }
  }, []);

  const login = (response) => {
    setUser(response.profileObj);
    setToken(response.accessToken);

    localStorage.setItem('user', JSON.stringify(response.profileObj));
    localStorage.setItem('@token', response.accessToken);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('@token');
  };

  return (
    <AuthContext.Provider
      value={{
        isSigned: Boolean(user),
        user,
        login,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
