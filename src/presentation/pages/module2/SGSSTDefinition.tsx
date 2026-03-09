import React from 'react';
import './SGSSTDefinition.css';
import { TopBar } from '../../components/TopBar';

interface SGSSTDefinitionProps {
    onNext: () => void;
    onBack?: () => void;
}

export const SGSSTDefinition: React.FC<SGSSTDefinitionProps> = ({ onNext }) => {
    return (
        <div className="sgsst-def-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sgsst-content-wrapper">

                {/* Title Section */}
                <div className="sgsst-main-title">
                    ¿Qué es el SG-SST?
                </div>

                {/* Subtitle Box */}
                <div className="sgsst-subtitle-box">
                    <p>El SG-SST protege a las personas y<br />mejora el desempeño de la empresa</p>
                </div>

                {/* Cards Grid */}
                <div className="sgsst-cards-grid">
                    {/* Card 1: Prevención */}
                    <div className="sgsst-card">
                        <div className="card-icon">
                            🛡️ ✅
                        </div>
                        <h3>Prevención</h3>
                        <p>Identifica y controla los riesgos laborales antes de que ocurran accidentes.</p>
                    </div>

                    {/* Card 2: Bienestar Laboral */}
                    <div className="sgsst-card">
                        <div className="card-icon">
                            💼 ❤️ ⚖️
                        </div>
                        <h3>Bienestar Laboral</h3>
                        <p>Promueve la salud física, mental y social de todos los colaboradores, fomentando un entorno seguro y saludable.</p>
                    </div>

                    {/* Card 3: Mejora Continua */}
                    <div className="sgsst-card">
                        <div className="card-icon">
                            🔄 📊
                        </div>
                        <h3>Mejora Continua</h3>
                        <p>El sistema se actualiza y ajusta de manera constante, asegurando que los procesos de seguridad y salud evolucionen junto con la empresa.</p>
                    </div>
                </div>

                {/* Footer Info Box */}
                <div className="sgsst-footer-box">
                    <p>
                        <strong>El SG-SST</strong> es el conjunto de normas, políticas y prácticas que toda empresa debe implementar para proteger a sus trabajadores, reducir riesgos laborales y garantizar un entorno laboral seguro, saludable y productivo.
                    </p>
                </div>

                {/* Next Button */}
                <div className="sgsst-action-footer">
                    <button className="sgsst-next-btn" onClick={onNext}>
                        Ver Ciclo PHVA ➡
                    </button>
                </div>
            </div>


        </div>
    );
};
