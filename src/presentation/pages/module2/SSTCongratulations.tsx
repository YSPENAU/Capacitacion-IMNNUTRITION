import React, { useEffect } from 'react';
import './SGSSTDefinition.css'; // Reusing definition styles for simplicity or create new ones
import { TopBar } from '../../components/TopBar';

interface SSTCongratulationsProps {
    onFinish: () => void;
}

export const SSTCongratulations: React.FC<SSTCongratulationsProps> = ({ onFinish }) => {
    return (
        <div className="sst-definition-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div className="congrats-card" style={{
                    background: 'white',
                    padding: '3rem',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    maxWidth: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                    <h1 style={{ color: '#2FBCEB', marginBottom: '1rem', fontSize: '2.5rem' }}>¡Felicitaciones!</h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
                        Has completado exitosamente el Módulo 2: Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
                    </p>
                    <p style={{ fontSize: '1rem', color: '#777', marginBottom: '2rem' }}>
                        Ahora estás listo para avanzar al siguiente nivel de tu capacitación.
                    </p>

                    <button className="sst-next-btn" onClick={onFinish}>
                        Volver al Dashboard ➡
                    </button>
                </div>
            </div>

            <div className="chat-fab">💬</div>
        </div>
    );
};
