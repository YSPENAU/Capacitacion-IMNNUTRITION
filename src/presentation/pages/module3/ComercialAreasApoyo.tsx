import React, { useState } from 'react';
import './ComercialAreasApoyo.css';
import { TopBar } from '../../components/TopBar';

// Import logos (reusing existing ones as requested)
import iconGerencia from '../../../assets/modulo03/logo_gerenciaadm.png';
import iconLogistica from '../../../assets/modulo03/logo_logistica.png';
import iconProduccion from '../../../assets/modulo03/logo_produccion.png';
import iconMarketing from '../../../assets/modulo03/logo_marketing.png';
import iconContabilidad from '../../../assets/modulo03/logo_contabilidad.png';

interface ComercialAreasApoyoProps {
    onNext: () => void;
    onBack: () => void;
}

interface SupportArea {
    id: string;
    name: string;
    icon: string;
    description: string;
    position: 'top' | 'right' | 'bottom-right' | 'bottom-left' | 'left';
    arrowClass: string;
}

export const ComercialAreasApoyo: React.FC<ComercialAreasApoyoProps> = ({ onNext, onBack }) => {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const areas: SupportArea[] = [
        {
            id: 'gerencia',
            name: 'Gerencia Administrativa',
            icon: iconGerencia,
            description: 'Comercial recibe de Gerencia Administrativa los lineamientos estratégicos y metas comerciales, asegurando alineación con los objetivos globales de IMN.',
            position: 'top',
            arrowClass: 'arrow-top'
        },
        {
            id: 'logistica',
            name: 'Logística y Despacho',
            icon: iconLogistica,
            description: 'Comercial coordina con Logística y Despacho el envío y entrega de productos según órdenes de venta, garantizando cumplimiento de tiempos y calidad de servicio.',
            position: 'right',
            arrowClass: 'arrow-right'
        },
        {
            id: 'produccion',
            name: 'Producción y Calidad',
            icon: iconProduccion,
            description: 'Comercial valida con Producción y Calidad la disponibilidad de productos y los estándares de calidad para ofrecer al cliente un portafolio confiable y actualizado.',
            position: 'bottom-right',
            arrowClass: 'arrow-bottom-right'
        },
        {
            id: 'marketing',
            name: 'Marketing',
            icon: iconMarketing,
            description: 'Comercial diseña con Marketing y Comunicación las estrategias publicitarias, lanzamientos de productos y campañas que impulsan las ventas.',
            position: 'bottom-left',
            arrowClass: 'arrow-bottom-left'
        },
        {
            id: 'contabilidad',
            name: 'Contabilidad y Finanzas',
            icon: iconContabilidad,
            description: 'Comercial reporta a Contabilidad y Finanzas la facturación, pagos y conciliaciones derivadas de las ventas realizadas.',
            position: 'left',
            arrowClass: 'arrow-left'
        }
    ];

    const handleAreaClick = (areaId: string) => {
        setSelectedArea(areaId === selectedArea ? null : areaId);
    };

    return (
        <div className="comercial-areas-apoyo-container">
            <TopBar moduleTitle="Comercial" onClose={onBack} />

            <div className="comercial-areas-content">
                {/* Title Section */}
                <div className="areas-title-section">
                    <h2 className="areas-main-title">Áreas de Apoyo</h2>
                    <p className="areas-subtitle">
                        (Haz clic en cada área para conocer su relación con Comercial.)
                    </p>
                </div>

                {/* Diagram Container */}
                <div className="areas-diagram">
                    {/* Central Box */}
                    <div className="central-box">
                        COMERCIAL
                    </div>

                    {/* Support Areas */}
                    {areas.map((area) => (
                        <React.Fragment key={area.id}>
                            <div
                                className={`support-area-circle ${area.position} ${selectedArea === area.id ? 'selected' : ''}`}
                                onClick={() => handleAreaClick(area.id)}
                            >
                                {selectedArea === area.id ? (
                                    <div className="area-description">
                                        <p>{area.description}</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="area-icon">
                                            <img src={area.icon} alt={area.name} />
                                        </div>
                                        <div className="area-name">{area.name}</div>
                                    </>
                                )}
                            </div>
                            {/* Visual Arrow */}
                            <div className={`connection-arrow ${area.arrowClass}`}></div>
                        </React.Fragment>
                    ))}
                </div>

                {/* Footer */}
                <div className="areas-footer">
                    <button className="areas-next-btn" onClick={onNext}>
                        Siguiente →
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
