import React from 'react';
import './MarketingPropositoFunciones.css';
import { TopBar } from '../../components/TopBar';

// Import function icons
// Using placeholders or reusing icons until specific marketing icons are identified or provided
// For now, I'll use the intro-marketing as a placeholder for the main icon, 
// and reuse modulo3 icons or generic ones if available. 
// Given the screenshot has specific colored icons, I will assume they might be named similarly to others or I'll use text placeholders if not found.
// Actually, I'll use the `logo_marketing.png` from assets/modulo03 as a temporary fallback for the main icon 
// and for the 5 functions I'll use the same pattern as Contabilidad but with the Marketing titles.

import mainIcon from '../../../assets/modulo03/logo_marketing.png';
import icon1 from '../../../assets/modulo4/proposito1.png'; // Reusing for structure
import icon2 from '../../../assets/modulo4/proposito2.png';
import icon3 from '../../../assets/modulo4/porposito3.png';
import icon4 from '../../../assets/modulo4/proposito4.png';
import icon5 from '../../../assets/modulo4/proposito5.png';

interface MarketingPropositoFuncionesProps {
    onNext: () => void;
    onBack: () => void;
}

export const MarketingPropositoFunciones: React.FC<MarketingPropositoFuncionesProps> = ({ onNext, onBack }) => {

    const functions = [
        {
            id: 1,
            title: "Estrategia de Marca y Planeación",
            icon: icon1
        },
        {
            id: 2,
            title: "Gestión de Campañas",
            icon: icon2
        },
        {
            id: 3,
            title: "Producción y Contenido Digital",
            icon: icon3
        },
        {
            id: 4,
            title: "Gestión de Canales y Audiencia",
            icon: icon4
        },
        {
            id: 5,
            title: "Análisis y Resultados",
            icon: icon5
        }
    ];

    return (
        <div className="marketing-proposito-container">
            <TopBar moduleTitle="Marketing y Comunicación" onClose={onBack} />

            <div className="marketing-proposito-content">
                {/* Main Card */}
                <div className="marketing-proposito-card">
                    <div className="marketing-header">
                        <div className="marketing-icon-container">
                            <img src={mainIcon} alt="Marketing Icon" className="marketing-main-icon" />
                        </div>
                        <div className="marketing-text-content">
                            <h2 className="marketing-title">PROPÓSITO Y FUNCIONES DEL ÁREA</h2>
                            <p className="marketing-description">
                                Impulsar el crecimiento sostenible de IMN Nutrition mediante estrategias creativas de marketing y
                                comunicación que fortalezcan la marca, generen valor para los clientes y apoyen los objetivos
                                comerciales de la compañía.
                            </p>
                        </div>
                    </div>

                    {/* Functions Grid */}
                    <div className="marketing-funciones-grid">
                        {functions.map((func) => (
                            <div key={func.id} className="marketing-funcion-card">
                                <div className="marketing-funcion-icon-container-small">
                                    <img src={func.icon} alt={`Function ${func.id}`} />
                                </div>
                                <p className="marketing-funcion-text">
                                    <strong>{func.id}. {func.title.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</strong>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="marketing-proposito-footer">
                    <button className="marketing-next-btn" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
