import React from 'react';
import './Modulo1Congratulations.css';

interface Modulo1CongratulationsProps {
    onReturn: () => void;
}

export const Modulo1Congratulations: React.FC<Modulo1CongratulationsProps> = ({ onReturn }) => {
    return (
        <div className="modulo1-congrats-container">
            <div className="modulo1-congrats-card">
                <div className="trophy-icon">🏆</div>
                <h1 className="congrats-title">¡Felicitaciones!</h1>
                <p className="congrats-message">
                    Has completado exitosamente el <strong>Módulo 1</strong>
                </p>
                <p className="congrats-submessage">
                    Ahora conoces la historia, valores, misión, visión y productos de IMN.
                    ¡Estás listo para continuar tu formación!
                </p>
                <button className="return-dashboard-btn" onClick={onReturn}>
                    Regresar al Dashboard
                </button>
            </div>
        </div>
    );
};
