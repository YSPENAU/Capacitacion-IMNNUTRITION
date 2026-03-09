import React from 'react';
import './ProduccionPropositoFunciones.css';
import { TopBar } from '../../components/TopBar';

interface ProduccionPropositoFuncionesProps {
    onNext: () => void;
    onBack: () => void;
}

export const ProduccionPropositoFunciones: React.FC<ProduccionPropositoFuncionesProps> = ({ onNext, onBack }) => {
    const functions = [
        {
            id: 1,
            icon: '🏭👥',
            title: 'Planificación Estratégica de la Producción'
        },
        {
            id: 2,
            icon: '⚙️📋',
            title: 'Control y Ejecución de Procesos Productivos'
        },
        {
            id: 3,
            icon: '📋✅',
            title: 'Aseguramiento de la Calidad del Producto'
        },
        {
            id: 4,
            icon: '🤲✨',
            title: 'Cumplimiento de Normas de Inocuidad y BPM'
        },
        {
            id: 5,
            icon: '📁',
            title: 'Registro, documentación y trazabilidad del proceso'
        }
    ];

    return (
        <div className="produccion-proposito-container">
            <TopBar moduleTitle="Producción y Calidad" onClose={onBack} />

            <div className="produccion-proposito-content">
                {/* Main Card */}
                <div className="proposito-main-card">
                    {/* Icon */}
                    <div className="proposito-icon-section">
                        <div className="conveyor-icon">
                            📦📦➡<br />📋
                        </div>
                    </div>

                    {/* Title and Description */}
                    <div className="proposito-text-section">
                        <h2 className="proposito-title">PROPÓSITO Y FUNCIONES DEL ÁREA</h2>
                        <p className="proposito-description">
                            Asegurar que cada producto de IMN Nutrition se fabrique bajo procesos controlados, seguros y
                            estandarizados, garantizando calidad, inocuidad, trazabilidad y cumplimiento normativo. El área respalda
                            una producción eficiente y confiable que protege al consumidor y la reputación de la empresa.
                        </p>

                        {/* Functions Grid */}
                        <div className="funciones-grid">
                            {functions.map((func) => (
                                <div key={func.id} className="funcion-card">
                                    <div className="funcion-icon">{func.icon}</div>
                                    <p className="funcion-title">{func.id}. {func.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="proposito-footer">
                    <button className="proposito-next-btn" onClick={onNext}>
                        Siguiente →
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
