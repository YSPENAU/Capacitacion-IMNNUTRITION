import React, { useState } from 'react';
import './ContabilidadAreasApoyo.css';
import { TopBar } from '../../components/TopBar';

// Import logos from Module 3 reusing assets
import iconGerencia from '../../../assets/modulo03/logo_gerenciaadm.png';
import iconTalento from '../../../assets/modulo03/logo_telentoHumano.png';
import iconMarketing from '../../../assets/modulo03/logo_marketing.png';
import iconProduccion from '../../../assets/modulo03/logo_produccion.png';
import iconLogistica from '../../../assets/modulo03/logo_logistica.png';
import iconArgip from '../../../assets/modulo03/logo_argip.png';

interface ContabilidadAreasApoyoProps {
    onNext: () => void;
    onBack: () => void;
}

interface SupportArea {
    id: string;
    name: string;
    icon: string;
    description: string;
    position: 'top' | 'top-right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'top-left';
}

export const ContabilidadAreasApoyo: React.FC<ContabilidadAreasApoyoProps> = ({ onNext, onBack }) => {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const areas: SupportArea[] = [
        {
            id: 'gerencia',
            name: 'Gerencia Administrativa',
            icon: iconGerencia,
            description: 'Contabilidad reporta a Gerencia Administrativa los presupuestos y resultados financieros para la toma de decisiones estratégicas.',
            position: 'top'
        },
        {
            id: 'talento',
            name: 'Talento Humano',
            icon: iconTalento,
            description: 'Contabilidad coordina con Talento Humano la nómina, pagos al personal y seguridad social, garantizando que cada colaborador reciba lo suyo a tiempo.',
            position: 'top-right'
        },
        {
            id: 'marketing',
            name: 'Marketing y Comercial',
            icon: iconMarketing,
            description: 'Contabilidad valida con Marketing y Comercial los gastos de campañas y ventas, asegurando que la inversión en marca se traduzca en resultados medibles.',
            position: 'bottom-right'
        },
        {
            id: 'produccion',
            name: 'Producción y Calidad',
            icon: iconProduccion,
            description: 'Contabilidad recibe de Producción y Calidad los reportes, solicitudes y compras de materia prima e insumos, verificando que los costos estén dentro del presupuesto aprobado.',
            position: 'bottom'
        },
        {
            id: 'logistica',
            name: 'Logística y Despacho',
            icon: iconLogistica,
            description: 'Contabilidad supervisa a Logística y Despacho en el control de inventarios y manejo de recursos, evitando que el dinero se quede estancado en exceso de stock.',
            position: 'bottom-left'
        },
        {
            id: 'argip',
            name: 'ARGIP',
            icon: iconArgip,
            description: 'Contabilidad suministra a ARGIP el control documental y los formatos financieros que cumplen con la normativa y facilitan las auditorías.',
            position: 'top-left'
        }
    ];

    const handleAreaClick = (areaId: string) => {
        setSelectedArea(areaId === selectedArea ? null : areaId);
    };

    return (
        <div className="contabilidad-areas-apoyo-container">
            <TopBar moduleTitle="Contabilidad y Finanzas" onClose={onBack} />

            <div className="contabilidad-areas-content">
                {/* Title Section */}
                <div className="areas-title-section">
                    <h2 className="areas-main-title">Áreas de Apoyo</h2>
                    <p className="areas-subtitle">
                        (Haz clic en cada área para conocer su relación con Contabilidad y Finanzas.)
                    </p>
                </div>

                {/* Diagram Container */}
                <div className="areas-diagram-6">
                    {/* Central Box */}
                    <div className="central-box">
                        CONTABILIDAD<br />Y FINANZAS
                    </div>

                    {/* Support Areas */}
                    {areas.map((area) => (
                        <div key={area.id} className="area-wrapper-6">
                            {/* Arrow */}
                            <div className={`connection-arrow-6 arrow-${area.position}`}></div>

                            <div
                                className={`support-area-circle-6 ${area.position} ${selectedArea === area.id ? 'selected' : ''}`}
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
