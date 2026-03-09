import React from 'react';
import './ComercialProcesosClave.css';
import { TopBar } from '../../components/TopBar';

interface ComercialProcesosClaveProps {
    onNext: () => void;
    onBack: () => void;
}

export const ComercialProcesosClave: React.FC<ComercialProcesosClaveProps> = ({ onNext, onBack }) => {
    const processes = [
        {
            id: 1,
            title: 'Prospección y apertura de clientes',
            description: 'Identificación de nuevos clientes potenciales, análisis de mercado y planificación de estrategias de acercamiento.'
        },
        {
            id: 2,
            title: 'Presentación y gestión de ventas',
            description: 'Asesoría personalizada, presentación del portafolio, elaboración de cotizaciones y cierre de acuerdos comerciales.'
        },
        {
            id: 3,
            title: 'Seguimiento y atención postventa',
            description: 'Verificación del cumplimiento de pedidos, gestión de reclamos y fortalecimiento de la relación con el cliente.'
        },
        {
            id: 4,
            title: 'Coordinación interáreas',
            description: 'Comunicación constante con Logística, Producción y Finanzas para garantizar la correcta entrega, facturación y pago de pedidos.'
        },
        {
            id: 5,
            title: 'Análisis y reporte de resultados',
            description: 'Evaluación de indicadores de ventas, revisión de desempeño por zonas y retroalimentación a la dirección comercial para la toma de decisiones.'
        }
    ];

    return (
        <div className="comercial-procesos-container">
            <TopBar moduleTitle="Comercial" onClose={onBack} />

            <div className="comercial-procesos-content">
                {/* Main Card */}
                <div className="procesos-card">
                    <h2 className="procesos-title">Procesos Clave del Área</h2>
                    <p className="procesos-subtitle">
                        Estos son los principales procesos que garantizan el cumplimiento de metas, la
                        satisfacción del cliente y el crecimiento sostenible de IMN Nutrition.
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
