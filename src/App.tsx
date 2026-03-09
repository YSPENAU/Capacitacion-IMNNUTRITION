import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './presentation/context/AuthContext';
import { ProgressProvider } from './presentation/context/ProgressContext';
import { AppRoutes } from './presentation/router/AppRoutes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <ProgressProvider>
          <AppRoutes />
        </ProgressProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
