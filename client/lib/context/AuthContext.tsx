import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  token: string | null | undefined;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {}, 
  clearToken: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(Cookies.get('token') || null);

  const clearToken = () => {
    Cookies.remove('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

export { AuthProvider, useAuth };