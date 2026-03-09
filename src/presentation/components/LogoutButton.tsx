import React from 'react';
import './LogoutButton.css';

interface LogoutButtonProps {
    onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
    const handleLogout = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            onLogout();
        }
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            🚪 Cerrar Sesión
        </button>
    );
};
