import React from 'react';
import './LogisticaIntro.css';
import { TopBar } from '../../components/TopBar';
import logoLogistica from '../../../assets/modulo03/logo_logistica.png';

interface LogisticaIntroProps {
    onNext: () => void;
    onBack: () => void;
}

export const LogisticaIntro: React.FC<LogisticaIntroProps> = ({ onNext, onBack }) => {
    return (
        <div className="logistica-intro-container">
            <TopBar moduleTitle="Logística y Despacho" onClose={onBack} />

            <div className="logistica-intro-content">
                <div className="logistica-intro-grid">
                    {/* Left Column: Title */}
                    <div className="logistica-intro-left">
                        <div className="logistica-title-box">
                            <h1 className="logistica-title">MÓDULO DE<br />LOGÍSTICA Y<br />DESPACHO</h1>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="logistica-intro-right">
                        <div className="logistica-logo-container">
                            <img src={logoLogistica} alt="Logo Logística" className="logistica-logo-img" />
                        </div>
                    </div>
                </div>

                <div className="logistica-description-wrapper">
                    <div className="logistica-description">
                        <p>
                            Conoce cómo este equipo garantiza la eficiencia en la cadena de suministro,
                            gestionando el almacenamiento y distribución de productos IMN Nutrition.
                        </p>
                    </div>

                    <button className="logistica-start-btn" onClick={onNext}>
                        Comenzar Módulo
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
