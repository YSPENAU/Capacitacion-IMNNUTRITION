import React, { useState } from 'react';
import './LoginPage.css';
import logoIMN from '../../../assets/logocompleto.svg';

interface LoginPageProps {
    onLogin: (username: string) => void;
}

// Credenciales hardcodeadas
const VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simular delay de autenticación
        setTimeout(() => {
            if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
                // Login exitoso
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                onLogin(username);
            } else {
                setError('Usuario o contraseña incorrectos');
                setLoading(false);
            }
        }, 500);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-logo">
                    <img src={logoIMN} alt="IMN Logo" className="logo-image" />
                </div>

                <h1>Plataforma de Capacitación</h1>
                <p className="login-subtitle">IMN Nutrition</p>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ingresa tu usuario"
                            required
                            autoFocus
                        />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>

                    {error && (
                        <div className="error-message">
                            ⚠️ {error}
                        </div>
                    )}

                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </button>
                </form>

                <p className="login-footer">
                    ¿Problemas para acceder? Contacta a Recursos Humanos
                </p>
            </div>
        </div>
    );
};
