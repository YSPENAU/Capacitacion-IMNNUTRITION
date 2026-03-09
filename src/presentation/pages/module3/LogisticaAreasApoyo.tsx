import React, { useState } from 'react';
import './LogisticaAreasApoyo.css';
import { TopBar } from '../../components/TopBar';

// Import logos
import iconGerencia from '../../../assets/modulo03/logo_gerenciaadm.png';
import iconProduccion from '../../../assets/modulo03/logo_produccion.png';
import iconMarketing from '../../../assets/modulo03/logo_marketing.png';
import iconContabilidad from '../../../assets/modulo03/logo_contabilidad.png';

interface LogisticaAreasApoyoProps {
    onNext: () => void;
    onBack: () => void;
}

interface SupportArea {
    id: string;
    name: string;
    icon: string;
    description: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const LogisticaAreasApoyo: React.FC<LogisticaAreasApoyoProps> = ({ onNext, onBack }) => {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const areas: SupportArea[] = [
        {
            id: 'gerencia',
            name: 'Gerencia Administrativa',
            icon: iconGerencia,
            description: 'Logística reporta a Gerencia Administrativa niveles de inventario, velocidad de despacho y eficiencia operativa, convirtiendo datos en decisiones estratégicas para la compañía.',
            position: 'top-left'
        },
        {
            id: 'contabilidad',
            name: 'Contabilidad y Finanzas',
            icon: iconContabilidad,
            description: 'Logística valida con Contabilidad y Finanzas el flujo de documentos: facturas que liberan pedidos y órdenes de compra pendientes que anticipan nuevas entradas.',
            position: 'top-right'
        },
        {
            id: 'produccion',
            name: 'Producción y Calidad',
            icon: iconProduccion,
            description: 'Logística sincroniza con Producción y Calidad la entrega diaria de materias primas, la recepción de producto terminado, las pruebas de calidad en planta Mirolindo y los inventarios en tiempo real.',
            position: 'bottom-left'
        },
        {
            id: 'marketing',
            name: 'Marketing y Comercial',
            icon: iconMarketing,
            description: 'Logística conecta con Marketing y Comercial los pedidos ingresados en la plataforma, actualiza estados de ruta y comparte tiempos de entrega para informar al cliente.',
            position: 'bottom-right'
        }
    ];

    const handleAreaClick = (areaId: string) => {
        setSelectedArea(areaId === selectedArea ? null : areaId);
    };

    return (
        <div className="logistica-areas-apoyo-container">
            <TopBar moduleTitle="Logística y Despacho" onClose={onBack} />

            <div className="logistica-areas-content">
                {/* Title Section */}
                <div className="areas-title-section">
                    <h2 className="areas-main-title">Áreas de Apoyo</h2>
                    <p className="areas-subtitle">
                        (Haz clic en cada área para conocer su relación con Logística y Despacho.)
                    </p>
                </div>

                {/* Diagram Container */}
                <div className="areas-diagram">
                    {/* Central Box */}
                    <div className="central-box">
                        LOGÍSTICA Y<br />DESPACHO
                    </div>

                    {/* Support Areas */}
                    {areas.map((area) => (
                        <div key={area.id} className="area-wrapper">
                            {/* Arrows pointing OUT from center or IN? 
                                Design usually implies connection. 
                                We will place arrows via CSS based on position.
                             */}
                            <div className={`connection-arrow arrow-${area.position}`}></div>

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
                        </div>
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
