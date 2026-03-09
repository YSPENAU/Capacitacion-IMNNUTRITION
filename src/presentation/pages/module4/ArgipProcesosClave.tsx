import React from 'react';
import './ArgipProcesosClave.css';
import { TopBar } from '../../components/TopBar';

interface ArgipProcesosClaveProps {
    onNext: () => void;
    onBack: () => void;
}

export const ArgipProcesosClave: React.FC<ArgipProcesosClaveProps> = ({ onNext, onBack }) => {
    const processes = [
        {
            id: 1,
            title: 'Gestión Documental del SGC',
            description: 'Elaboración y control de procedimientos, manuales e instructivos del Sistema de Gestión.'
        },
        {
            id: 2,
            title: 'Seguimiento y Medición de Procesos',
            description: 'Monitoreo constante del desempeño mediante indicadores y evaluación de eficiencia.'
        },
        {
            id: 3,
            title: 'Auditorías Internas',
            description: 'Planificación y ejecución de auditorías para verificación del cumplimiento normativo.'
        },
        {
            id: 4,
            title: 'Capacitación y Socialización',
            description: 'Identificación de necesidades formativas y capacitación al personal involucrado.'
        },
        {
            id: 5,
            title: 'Gestión de Riesgos y Mejora Continua',
            description: 'Análisis de riesgos e implementación de acciones correctivas y de mejora.'
        }
    ];

    return (
        <div className="argip-procesos-container">
            <TopBar moduleTitle="ARGIP" onClose={onBack} />

            <div className="argip-procesos-content">
                <div className="argip-procesos-card">
                    <h2 className="procesos-title-argip">Procesos Clave del Área</h2>
                    <p className="procesos-subtitle-argip">
                        Estos son los principales procesos que garantizan la gestión integral, el cumplimiento normativo y la mejora continua en IMN Nutrition.
                    </p>

                    <div className="procesos-timeline-argip">
                        {/* Horizontal Line */}
                        <div className="timeline-line-argip"></div>

                        {processes.map((process) => (
                            <div key={process.id} className="proceso-item-argip">
                                <div className="proceso-number-container-argip">
                                    <div className="proceso-number-argip">
                                        {process.id}
                                    </div>
                                </div>
                                <h3 className="proceso-item-title-argip">{process.title}</h3>
                                <p className="proceso-item-description-argip">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="procesos-footer-argip">
                    <button className="procesos-next-btn-argip" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>
            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
