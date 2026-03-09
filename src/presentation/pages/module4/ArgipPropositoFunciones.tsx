import React from 'react';
import './ArgipPropositoFunciones.css';
import { TopBar } from '../../components/TopBar';

// Import icons
import icon1 from '../../../assets/modulo4/proposito1.png';
import icon2 from '../../../assets/modulo4/proposito2.png';
import icon3 from '../../../assets/modulo4/porposito3.png'; // Note typos in file name if any, based on list_dir
import icon4 from '../../../assets/modulo4/proposito4.png';
import icon5 from '../../../assets/modulo4/proposito5.png';

interface ArgipPropositoFuncionesProps {
    onNext: () => void;
    onBack: () => void;
}

export const ArgipPropositoFunciones: React.FC<ArgipPropositoFuncionesProps> = ({ onNext, onBack }) => {
    const functions = [
        { id: 1, text: "Gestión Documental del SGC", icon: icon1 },
        { id: 2, text: "Seguimiento y Medición de Procesos", icon: icon2 },
        { id: 3, text: "Auditorías Internas", icon: icon3 },
        { id: 4, text: "Capacitación y Socialización", icon: icon4 },
        { id: 5, text: "Gestión de Riesgos y Acciones de Mejora", icon: icon5 },
    ];

    return (
        <div className="argip-proposito-container">
            <TopBar moduleTitle="ARGIP" onClose={onBack} />

            <div className="argip-proposito-content">
                {/* Main Content Card */}
                <div className="proposito-main-card">

                    {/* Upper Section: Title + Icon + Description */}
                    <div className="proposito-header-section">
                        <div className="main-icon-container">
                            {/* Placeholder for the main gear icon, maybe reuse an icon or use a generic one */}
                            <div className="gear-icon-placeholder">⚙️</div>
                        </div>
                        <div className="proposito-text-block">
                            <h2 className="proposito-title">PROPÓSITO Y FUNCIONES DEL ÁREA</h2>
                            <p className="proposito-description">
                                Garantizar la trazabilidad, eficiencia y mejora continua de los procesos de IMN Nutrition mediante la identificación, organización y optimización de los procesos estratégicos, misionales y de apoyo, asegurando el cumplimiento normativo, la articulación documental y la toma de decisiones basada en información confiable y actualizada.
                            </p>
                        </div>
                    </div>

                    {/* Divider or spacing */}

                    {/* Lower Section: 5 Function Cards */}
                    <div className="functions-grid">
                        {functions.map((func) => (
                            <div key={func.id} className="function-card">
                                <div className="function-icon-wrapper">
                                    <img src={func.icon} alt={`Función ${func.id}`} className="function-icon" />
                                </div>
                                <p className="function-text">
                                    <strong>{func.id}.</strong> {func.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Footer Button */}
                <div className="proposito-footer">
                    <button className="proposito-next-btn" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>
            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
