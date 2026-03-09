import React, { useState } from 'react';
import './ProduccionAreasApoyo.css';
import { TopBar } from '../../components/TopBar';
import iconGerencia from '../../../assets/modulo03/logo_gerenciaadm.png';
import iconTalento from '../../../assets/modulo03/logo_telentoHumano.png';
import iconArgip from '../../../assets/modulo03/logo_argip.png';
import iconComercial from '../../../assets/modulo03/logo_comercial.png';
import iconLogistica from '../../../assets/modulo03/logo_logistica.png';

interface ProduccionAreasApoyoProps {
    onNext: () => void;
    onBack: () => void;
}

interface SupportArea {
    id: string;
    name: string;
    icon: string;
    description: string;
    position: 'top' | 'right' | 'bottom-right' | 'bottom-left' | 'left';
}

export const ProduccionAreasApoyo: React.FC<ProduccionAreasApoyoProps> = ({ onNext, onBack }) => {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const supportAreas: SupportArea[] = [
        {
            id: 'gerencia',
            name: 'Gerencia Administrativa',
            icon: iconGerencia,
            description: 'Producción coordina con Gerencia Administrativa la adquisición de materias primas, materiales de empaque, insumos y servicios necesarios para garantizar la continuidad del proceso productivo.',
            position: 'top'
        },
        {
            id: 'talento',
            name: 'Talento Humano',
            icon: iconTalento,
            description: 'Producción colabora con Talento Humano en la formación, seguridad laboral, dotación de EPP, bienestar e ingreso de nuevos operarios.',
            position: 'right'
        },
        {
            id: 'argip',
            name: 'ARGIP',
            icon: iconArgip,
            description: 'Producción trabaja con ARGIP en la gestión de requisitos regulatorios, auditorías, certificaciones y cumplimiento normativo.',
            position: 'bottom-right'
        },
        {
            id: 'comercial',
            name: 'Comercial',
            icon: iconComercial,
            description: 'Producción coordina con Comercial los pedidos, pronósticos de ventas y priorización de órdenes de producción.',
            position: 'bottom-left'
        },
        {
            id: 'logistica',
            name: 'Logística y Despacho',
            icon: iconLogistica,
            description: 'Producción entrega a Logística y Despacho el producto terminado y sus certificados de calidad, coordinando fechas y volúmenes de despacho.',
            position: 'left'
        }
    ];

    const handleAreaClick = (areaId: string) => {
        setSelectedArea(selectedArea === areaId ? null : areaId);
    };

    return (
        <div className="produccion-areas-apoyo-container">
            <TopBar moduleTitle="Producción y Calidad" onClose={onBack} />

            <div className="produccion-areas-content">
                {/* Title */}
                <div className="areas-title-section">
                    <h2 className="areas-main-title">Áreas de Apoyo</h2>
                    <p className="areas-subtitle">
                        (Haz clic en cada área para conocer su relación con Producción y Calidad.)
                    </p>
                </div>

                {/* Interactive Diagram */}
                <div className="areas-diagram">
                    {/* Central Box */}
                    <div className="central-box">
                        <h3>Producción y<br />Calidad</h3>
                    </div>

                    {/* Support Area Circles */}
                    {supportAreas.map((area) => (
                        <div
                            key={area.id}
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

                            {/* Arrow pointing to center */}
                            <div className="arrow-to-center"></div>
                        </div>
                    ))}

                    {/* Connecting Arrows */}
                    <div className="connection-arrow arrow-top"></div>
                    <div className="connection-arrow arrow-right"></div>
                    <div className="connection-arrow arrow-bottom-right"></div>
                    <div className="connection-arrow arrow-bottom-left"></div>
                    <div className="connection-arrow arrow-left"></div>
                </div>

                {/* Next Button */}
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
