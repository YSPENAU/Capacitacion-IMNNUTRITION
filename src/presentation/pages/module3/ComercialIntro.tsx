import React from 'react';
import './ComercialIntro.css';
import { TopBar } from '../../components/TopBar';
import logoComercial from '../../../assets/modulo03/logo_comercial.png';

interface ComercialIntroProps {
    onNext: () => void;
    onBack: () => void;
}

export const ComercialIntro: React.FC<ComercialIntroProps> = ({ onNext, onBack }) => {
    return (
        <div className="comercial-intro-container">
            <TopBar moduleTitle="Comercial" onClose={onBack} />

            <div className="comercial-intro-content">
                <div className="comercial-intro-left">
                    <div className="comercial-title-box">
                        <h1 className="comercial-title">MÓDULO DE<br />COMERCIAL</h1>
                    </div>
                </div>

                <div className="comercial-intro-right">
                    <div className="comercial-logo-container">
                        <img src={logoComercial} alt="Logo Comercial" className="comercial-logo-img" />
                    </div>
                </div>

                <div className="comercial-description">
                    <p>
                        Conoce cómo el equipo Comercial impulsa el crecimiento de IMN Nutrition,
                        fortaleciendo las relaciones con los clientes, generando oportunidades
                        de negocio y asegurando el cumplimiento de las metas comerciales.
                    </p>
                </div>

                <button className="comercial-start-btn" onClick={onNext}>
                    Comenzar Módulo
                </button>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
