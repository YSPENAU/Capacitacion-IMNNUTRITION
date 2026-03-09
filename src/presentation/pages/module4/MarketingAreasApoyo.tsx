import React, { useState } from 'react';
import './MarketingAreasApoyo.css';
import { TopBar } from '../../components/TopBar';

// Import logos reusing assets from Module 3
import iconComercial from '../../../assets/modulo03/logo_comercial.png';
import iconLogistica from '../../../assets/modulo03/logo_logistica.png';
import iconGerencia from '../../../assets/modulo03/logo_gerenciaadm.png';
import iconProduccion from '../../../assets/modulo03/logo_produccion.png';
import iconArgip from '../../../assets/modulo03/logo_argip.png';

interface MarketingAreasApoyoProps {
    onNext: () => void;
    onBack: () => void;
}

interface SupportArea {
    id: string;
    name: string;
    icon: string;
    description: string;
    position: 'top-center' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'; // Adjusted positions for 5 nodes
}

export const MarketingAreasApoyo: React.FC<MarketingAreasApoyoProps> = ({ onNext, onBack }) => {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const areas: SupportArea[] = [
        {
            id: 'comercial',
            name: 'Comercial',
            icon: iconComercial,
            description: 'Marketing coordina con Comercial estrategias de comunicación y ventas que impulsan el posicionamiento de la marca y el cumplimiento de metas comerciales.',
            position: 'top-center'
        },
        {
            id: 'logistica',
            name: 'Logística y Despacho',
            icon: iconLogistica,
            description: 'Marketing coordina con Logística la entrega y distribución oportuna de material publicitario y de apoyo comercial.',
            position: 'top-right'
        },
        {
            id: 'gerencia',
            name: 'Gerencia Administrativa',
            icon: iconGerencia,
            description: 'Marketing gestiona con Gerencia la aprobación de presupuestos y el seguimiento a indicadores estratégicos.',
            position: 'bottom-right'
        },
        {
            id: 'produccion',
            name: 'Producción y Calidad',
            icon: iconProduccion,
            description: 'Marketing colabora en el diseño, empaque y presentación de los productos, alineando imagen y estándares de calidad.',
            position: 'bottom-left'
        },
        {
            id: 'argip',
            name: 'ARGIP',
            icon: iconArgip,
            description: 'Marketing valida con ARGIP los materiales de comunicación sujetos a requisitos normativos.',
            position: 'top-left'
        }
    ];

    const handleAreaClick = (areaId: string) => {
        setSelectedArea(areaId === selectedArea ? null : areaId);
    };

    return (
        <div className="marketing-areas-apoyo-container">
            <TopBar moduleTitle="Marketing y Comunicación" onClose={onBack} />

            <div className="marketing-areas-content">
                {/* Title Section */}
                <div className="areas-title-section-marketing">
                    <h2 className="areas-main-title-marketing">Áreas de Apoyo</h2>
                    <p className="areas-subtitle-marketing">
                        (Haz clic en cada área para conocer su relación con Marketing.)
                    </p>
                </div>

                {/* Diagram Container */}
                <div className="areas-diagram-marketing">
                    {/* Central Box */}
                    <div className="central-box-marketing">
                        MARKETING
                    </div>

                    {/* Support Areas using semi-circle layout logic similar to screenshot */}
                    {areas.map((area) => (
                        <div key={area.id} className="area-wrapper-marketing">
                            {/* Arrow could go here if implemented */}
                            {/* Simple Arrow SVG pointing to center */}
                            <div className={`arrow-marketing arrow-${area.position}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="#3babc5" strokeWidth="2">
                                    <path d="M12 5V19M12 19L5 12M12 19L19 12" />
                                </svg>
                            </div>

                            <div
                                className={`support-area-circle-marketing ${area.position} ${selectedArea === area.id ? 'selected' : ''}`}
                                onClick={() => handleAreaClick(area.id)}
                            >
                                {selectedArea === area.id ? (
                                    <div className="area-description-marketing">
                                        <p>{area.description}</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="area-icon-marketing">
                                            <img src={area.icon} alt={area.name} />
                                        </div>
                                        <div className="area-name-marketing">{area.name}</div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="areas-footer-marketing">
                    <button className="areas-next-btn-marketing" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
