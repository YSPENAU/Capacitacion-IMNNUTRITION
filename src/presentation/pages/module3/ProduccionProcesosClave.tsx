import React, { useState } from 'react';
import './ProduccionProcesosClave.css';
import { TopBar } from '../../components/TopBar';

interface ProduccionProcesosClaveProps {
    onNext: () => void;
    onBack: () => void;
}

interface KeyProcess {
    id: number;
    title: string;
    description: string;
}

export const ProduccionProcesosClave: React.FC<ProduccionProcesosClaveProps> = ({ onNext, onBack }) => {
    const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);

    const processes: KeyProcess[] = [
        {
            id: 1,
            title: 'Programación y Planeación de Producción',
            description: 'Organización de órdenes, tiempos y recursos para garantizar una producción eficiente y alineada con la demanda.'
        },
        {
            id: 2,
            title: 'Ejecución de Procesos Productivos',
            description: 'Fabricación, dosificación, envasado y empaque de los productos siguiendo protocolos establecidos.'
        },
        {
            id: 3,
            title: 'Controles de Calidad e Inocuidad',
            description: 'Supervisión de materias primas, procesos y productos para asegurar cumplimiento de estándares y normativas.'
        },
        {
            id: 4,
            title: 'Liberación y Trazabilidad de Productos',
            description: 'Revisión final, aprobación de lotes y registro de información para garantizar trazabilidad y conformidad.'
        },
        {
            id: 5,
            title: 'Mantenimiento y Soporte Operativo',
            description: 'Intervenciones preventivas y correctivas a equipos para asegurar la continuidad y seguridad de la operación.'
        }
    ];

    return (
        <div className="produccion-procesos-clave-container">
            <TopBar moduleTitle="Producción y Calidad" onClose={onBack} />

            <div className="produccion-procesos-content">
                {/* Main Card */}
                <div className="procesos-main-card">
                    {/* Title and Description */}
                    <div className="procesos-header">
                        <h2 className="procesos-title">Procesos Clave del Área</h2>
                        <p className="procesos-description">
                            Estos procesos garantizan una producción segura, controlada y de alta calidad,
                            cumpliendo con estándares internos y regulatorios.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="procesos-timeline">
                        {processes.map((process, index) => (
                            <React.Fragment key={process.id}>
                                {/* Number Circle */}
                                <div
                                    className={`process-number ${hoveredProcess === process.id ? 'hovered' : ''}`}
                                    onMouseEnter={() => setHoveredProcess(process.id)}
                                    onMouseLeave={() => setHoveredProcess(null)}
                                >
                                    {process.id}
                                </div>

                                {/* Connector Line (except after last item) */}
                                {index < processes.length - 1 && <div className="process-connector">—</div>}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Process Details */}
                    <div className="procesos-details-grid">
                        {processes.map((process) => (
                            <div
                                key={process.id}
                                className="process-detail-card"
                                onMouseEnter={() => setHoveredProcess(process.id)}
                                onMouseLeave={() => setHoveredProcess(null)}
                            >
                                <h3 className="process-detail-title">{process.title}</h3>
                                <p className="process-detail-description">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <div className="procesos-footer">
                    <button className="procesos-next-btn" onClick={onNext}>
                        Siguiente →
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
