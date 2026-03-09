import React from 'react';
import './ContabilidadIntro.css';
import { TopBar } from '../../components/TopBar';
import introImage from '../../../assets/modulo4/intro-contabilidad.png';

interface ContabilidadIntroProps {
    onStart: () => void;
    onBack: () => void;
}

export const ContabilidadIntro: React.FC<ContabilidadIntroProps> = ({ onStart, onBack }) => {
    return (
        <div className="contabilidad-intro-container">
            <TopBar moduleTitle="Contabilidad y Finanzas" onClose={onBack} />

            <div className="contabilidad-intro-content">
                <div className="intro-card">
                    <div className="intro-header">
                        <div className="intro-title-box">
                            <h1>
                                MÓDULO DE<br />
                                CONTABILIDAD Y<br />
                                FINANZAS
                            </h1>
                        </div>
                        <div className="intro-image">
                            <img src={introImage} alt="Ilustración Contabilidad" />
                        </div>
                    </div>

                    <p className="intro-description">
                        Conoce cómo este equipo gestiona los recursos que impulsan el crecimiento de IMN Nutrition.
                    </p>

                    <button className="intro-start-btn" onClick={onStart}>
                        Iniciar Módulo
                    </button>

                    {/* Chat FAB */}
                    <div className="chat-fab">💬</div>
                </div>
            </div>
        </div>
    );
};
