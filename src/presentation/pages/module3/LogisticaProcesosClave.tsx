import React from 'react';
import './LogisticaProcesosClave.css';
import { TopBar } from '../../components/TopBar';

interface LogisticaProcesosClaveProps {
    onNext: () => void;
    onBack: () => void;
}

export const LogisticaProcesosClave: React.FC<LogisticaProcesosClaveProps> = ({ onNext, onBack }) => {
    const processes = [
        {
            id: 1,
            title: 'Recepción y Control de Ingresos',
            description: 'Recepción, verificación y almacenamiento de materias primas, envases e insumos según estándares de calidad.'
        },
        {
            id: 2,
            title: 'Gestión de Inventarios',
            description: 'Control y actualización de inventarios en bodegas MP Mirolindo, CEDI Ibagué y CEDI Bogotá, asegurando trazabilidad.'
        },
        {
            id: 3,
            title: 'Abastecimiento a Producción',
            description: 'Entrega diaria de insumos y materiales a producción, y recolección de sobrantes al final de la jornada.'
        },
        {
            id: 4,
            title: 'Preparación y Alistamiento',
            description: 'Picking, packing y alistamiento de pedidos diarios según requerimientos del área comercial.'
        },
        {
            id: 5,
            title: 'Despacho y Validación',
            description: 'Generación de guías de despacho, validación de envíos y coordinación de entregas con transportadores.'
        }
    ];

    return (
        <div className="logistica-procesos-container">
            <TopBar moduleTitle="Logística y Despacho" onClose={onBack} />

            <div className="logistica-procesos-content">
                {/* Main Card */}
                <div className="procesos-card">
                    <h2 className="procesos-title">Procesos Clave del Área</h2>
                    <p className="procesos-subtitle">
                        Estos son los principales procesos que garantizan la eficiencia en la cadena de
                        suministro y la distribución oportuna en IMN Nutrition.
                    </p>

                    {/* Timeline Grid */}
                    <div className="procesos-timeline">
                        {/* Connecting Line */}
                        <div className="timeline-line"></div>

                        {processes.map((process) => (
                            <div key={process.id} className="proceso-item">
                                <div className="proceso-number-container">
                                    <div className="proceso-number">{process.id}</div>
                                </div>
                                <h3 className="proceso-item-title">{process.title}</h3>
                                <p className="proceso-item-description">{process.description}</p>
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
