import React from 'react';
import './TopBar.css';
import imnLogo from '../../assets/logos/logo_imn.svg';

interface TopBarProps {
    moduleTitle: string;
    onClose?: () => void;
    showLogout?: boolean;
    onLogout?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ moduleTitle, onClose, showLogout, onLogout }) => {
    const handleLogout = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            onLogout?.();
        }
    };

    return (
        <div className="top-bar-container">
            <div className="top-bar-content">
                <div className="top-bar-logo">
                    <img src={imnLogo} alt="IMN Logo" />
                </div>
                <div className="top-bar-title">
                    {moduleTitle}
                </div>
                <div className="top-bar-right-section">
                    {showLogout && onLogout && (
                        <button onClick={handleLogout} className="topbar-logout-btn">
                            🚪 Cerrar Sesión
                        </button>
                    )}
                    {onClose && (
                        <button onClick={onClose} className="topbar-close-btn">
                            ✖
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
