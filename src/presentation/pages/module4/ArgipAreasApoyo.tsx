import React, { useState } from 'react';
import './ArgipAreasApoyo.css';
import { TopBar } from '../../components/TopBar';

// Import icons from modulo03 (reusing assets)
import iconGerencia from '../../../assets/modulo03/logo_gerenciaadm.png';
import iconTalento from '../../../assets/modulo03/logo_telentoHumano.png';
import iconMarketing from '../../../assets/modulo03/logo_marketing.png';
import iconProduccion from '../../../assets/modulo03/logo_produccion.png';
import iconLogistica from '../../../assets/modulo03/logo_logistica.png';
import iconContabilidad from '../../../assets/modulo03/logo_contabilidad.png';

interface ArgipAreasApoyoProps {
    onNext: () => void; // Maybe to quiz or finish
    onBack: () => void;
}

export const ArgipAreasApoyo: React.FC<ArgipAreasApoyoProps> = ({ onNext, onBack }) => {
    const [selectedArea, setSelectedArea] = useState<{ id: string, title: string, text: string } | null>(null);

    const areas = [
        {
            id: 'gerencia',
            title: 'Gerencia Administrativa',
            icon: iconGerencia,
            text: 'ARGIP recibe de Gerencia Administrativa los lineamientos estratégicos y objetivos corporativos, y traduce esas metas en requisitos legales y calendarios de cumplimiento para todo el Sistema de Gestión.'
        },
        {
            id: 'talento',
            title: 'Talento Humano',
            icon: iconTalento,
            text: 'ARGIP coordina con Talento Humano los programas de capacitación que integran la normativa (SST, INVIMA, BPM, ambiental) en la cultura diaria de cada colaborador.'
        },
        {
            id: 'marketing',
            title: 'Marketing y Comercial',
            icon: iconMarketing,
            text: 'ARGIP valida con Marketing y Comercial que campañas, publicidad, precios y promociones cumplan la legislación de industria de suplementos y competencia leal antes de salir al aire.'
        },
        {
            id: 'produccion',
            title: 'Producción y Calidad',
            icon: iconProduccion,
            text: 'ARGIP audita con Producción y Calidad los procesos productivos, fichas técnicas y registros sanitarios, asegurando que cada lote esté respaldado por documentación conforme y trazable.'
        },
        {
            id: 'logistica',
            title: 'Logística y Despacho',
            icon: iconLogistica,
            text: 'ARGIP verifica con Logística y Despacho que almacenes, vehículos y rutas mantengan la trazabilidad, temperatura y seguridad exigidas para productos de consumo humano.'
        },
        {
            id: 'contabilidad',
            title: 'Contabilidad y Finanzas',
            icon: iconContabilidad,
            text: 'ARGIP revisa para Contabilidad y Finanzas que los procesos de facturación, tributación y conservación de soportes cumplan la normativa contable y sanitaria, garantizando auditorías sin hallazgos.'
        }
    ];

    return (
        <div className="argip-areas-container">
            <TopBar moduleTitle="ARGIP" onClose={onBack} />

            <div className="argip-areas-content">
                <div className="areas-header">
                    <h2 className="areas-title">Áreas de Apoyo</h2>
                    <p className="areas-subtitle">(Haz clic en cada área para conocer su relación con ARGIP.)</p>
                </div>

                <div className="circular-layout-container">
                    {/* Central Node */}
                    <div className="central-node">
                        <span className="central-text">ARGIP</span>
                    </div>

                    {/* Satellite Nodes */}
                    {areas.map((area, index) => (
                        <div
                            key={area.id}
                            className={`satellite-node node-${index + 1}`}
                            onClick={() => setSelectedArea(area)}
                        >
                            <div className="satellite-icon-wrapper">
                                <img src={area.icon} alt={area.title} className="satellite-icon" />
                            </div>
                            <div className="satellite-label">{area.title}</div>

                            {/* Directional Arrow (CSS handled) */}
                            <div className="arrow-connector"></div>
                        </div>
                    ))}
                </div>

                <div className="areas-footer">
                    <button className="areas-next-btn" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>

            {/* Modal for details */}
            {selectedArea && (
                <div className="area-modal-overlay" onClick={() => setSelectedArea(null)}>
                    <div className="area-modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setSelectedArea(null)}>×</button>
                        <div className="modal-icon-wrapper">
                            {/* Find icon again based on selected or pass it */}
                            <img src={areas.find(a => a.id === selectedArea?.id)?.icon} alt="icon" />
                        </div>
                        <h3 className="modal-title">{selectedArea.title}</h3>
                        <p className="modal-text">{selectedArea.text}</p>
                    </div>
                </div>
            )}

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
