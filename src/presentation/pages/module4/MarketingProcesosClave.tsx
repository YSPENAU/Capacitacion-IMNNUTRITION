import React from 'react';
import './MarketingProcesosClave.css';
import { TopBar } from '../../components/TopBar';

interface MarketingProcesosClaveProps {
    onNext: () => void;
    onBack: () => void;
}

export const MarketingProcesosClave: React.FC<MarketingProcesosClaveProps> = ({ onNext, onBack }) => {
    const processes = [
        {
            id: 1,
            title: 'Planeación Estratégica de Marketing',
            description: 'Definición de objetivos, presupuestos y estrategias de marca alineadas con la visión de la empresa.'
        },
        {
            id: 2,
            title: 'Gestión y Ejecución de Campañas',
            description: 'Diseño, implementación y monitoreo de campañas publicitarias en medios digitales y presenciales.'
        },
        {
            id: 3,
            title: 'Producción de Contenidos',
            description: 'Creación de materiales gráficos, audiovisuales y narrativos que transmiten el mensaje de la marca de manera coherente.'
        },
        {
            id: 4,
            title: 'Gestión de Canales y Audiencias',
            description: 'Administración de redes sociales, plataformas digitales y relaciones con aliados, embajadores y comunidades.'
        },
        {
            id: 5,
            title: 'Análisis y Optimización de Resultados',
            description: 'Medición de desempeño, interpretación de métricas e implementación de mejoras basadas en datos.'
        }
    ];

    return (
        <div className="marketing-procesos-container">
            <TopBar moduleTitle="Marketing y Comunicación" onClose={onBack} />

            <div className="marketing-procesos-content">
                {/* Main Card */}
                <div className="marketing-procesos-card">
                    <h2 className="procesos-title-marketing">Procesos Clave del Área</h2>
                    <p className="procesos-subtitle-marketing">
                        Estos son los principales procesos que garantizan la gestión estratégica,
                        creativa y analítica del marketing en IMN Nutrition.
                    </p>

                    {/* Timeline Grid */}
                    <div className="procesos-timeline-marketing">
                        {/* Connecting Line */}
                        <div className="timeline-line-marketing"></div>

                        {processes.map((process) => (
                            <div key={process.id} className="proceso-item-marketing">
                                <div className="proceso-number-container-marketing">
                                    <div className="proceso-number-marketing">{process.id}</div>
                                </div>
                                <h3 className="proceso-item-title-marketing">{process.title}</h3>
                                <p className="proceso-item-description-marketing">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <div className="procesos-footer-marketing">
                    <button className="procesos-next-btn-marketing" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
