import React from 'react';
import './ContabilidadProcesosClave.css';
import { TopBar } from '../../components/TopBar';

interface ContabilidadProcesosClaveProps {
    onNext: () => void;
    onBack: () => void;
}

export const ContabilidadProcesosClave: React.FC<ContabilidadProcesosClaveProps> = ({ onNext, onBack }) => {
    const processes = [
        {
            id: 1,
            title: 'Registro y validación de documentos',
            description: 'Revisión de facturas, comprobantes y soportes contables antes del registro.'
        },
        {
            id: 2,
            title: 'Contabilización',
            description: 'Ingreso de movimientos en el sistema contable, asegurando exactitud y cumplimiento normativo.'
        },
        {
            id: 3,
            title: 'Gestión de tesorería y pagos',
            description: 'Programación de pagos a proveedores y control de ingresos.'
        },
        {
            id: 4,
            title: 'Conciliaciones bancarias y reportes',
            description: 'Revisión de extractos y generación de reportes.'
        },
        {
            id: 5,
            title: 'Cumplimiento tributario y cierres contables',
            description: 'Preparación de informes financieros.'
        }
    ];

    return (
        <div className="contabilidad-procesos-container">
            <TopBar moduleTitle="Contabilidad y Finanzas" onClose={onBack} />

            <div className="contabilidad-procesos-content">
                {/* Main Card */}
                <div className="procesos-card">
                    <h2 className="procesos-title">Procesos Clave del Área</h2>
                    <p className="procesos-subtitle">
                        Estos son los principales procesos que garantizan el control financiero y la transparencia en IMN Nutrition.
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
