import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedUser = localStorage.getItem('username') || '';
    setIsLoggedIn(loggedIn);
    setUsername(savedUser);
  }, []);

  const login = useCallback((user: string) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', user);
    setIsLoggedIn(true);
    setUsername(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUsername('');
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
