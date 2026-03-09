import React from 'react';
import './ProduccionCalidadIntro.css';
import { TopBar } from '../../components/TopBar';
import logoProduccion from '../../../assets/modulo03/logo_produccion.png';

interface ProduccionCalidadIntroProps {
    onStart: () => void;
    onBack: () => void;
}

export const ProduccionCalidadIntro: React.FC<ProduccionCalidadIntroProps> = ({ onStart, onBack }) => {
    return (
        <div className="produccion-calidad-intro-container">
            <TopBar moduleTitle="Producción y Calidad" onClose={onBack} />

            <div className="produccion-content-wrapper">
                {/* Title and Icon Section */}
                <div className="produccion-header-section">
                    <div className="produccion-title-box">
                        <h1>MÓDULO DE<br />PRODUCCIÓN Y<br />CALIDAD</h1>
                    </div>
                    <div className="produccion-icon-container">
                        <img src={logoProduccion} alt="Producción y Calidad" className="produccion-logo-img" />
                    </div>
                </div>

                {/* Description */}
                <div className="produccion-description">
                    <p>
                        Descubre cómo este equipo asegura la calidad, inocuidad y eficiencia en cada proceso
                        de fabricación, garantizando productos confiables y cumpliendo
                        los estándares regulatorios de IMN Nutrition.
                    </p>
                </div>

                {/* Start Button */}
                <div className="produccion-action-section">
                    <button className="produccion-start-btn" onClick={onStart}>
                        Comenzar Módulo
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
