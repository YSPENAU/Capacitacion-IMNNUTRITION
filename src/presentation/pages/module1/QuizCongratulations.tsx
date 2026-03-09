import React from 'react';
import './QuizCongratulations.css';

interface QuizCongratulationsProps {
    onReturn: () => void;
}

export const QuizCongratulations: React.FC<QuizCongratulationsProps> = ({ onReturn }) => {
    return (
        <div className="congrats-container">
            {/* Celebration Icon */}
            <div className="congrats-card">
                <div className="celebration-icon">🎉</div>

                <h1 className="congrats-title">¡Felicitaciones!</h1>

                <p className="congrats-message">
                    Has completado con éxito el<br />
                    Quiz Etapa 1: Conociendo IMN
                </p>

                <button className="return-btn" onClick={onReturn}>
                    ← Regresar
                </button>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab-placeholder congrats-chat">💬</div>
        </div>
    );
};
