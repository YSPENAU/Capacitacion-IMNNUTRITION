import React, { useState } from 'react';
import './ProcessPortal.css';
import { TopBar } from '../../components/TopBar';
import logoProduccionCalidad from '../../../assets/modulo03/logo_produccion.png';
import logoComercial from '../../../assets/modulo03/logo_comercial.png';
import logoLogisticaDespacho from '../../../assets/modulo03/logo_logistica.png';

interface ProcessPortalProps {
    onModuleSelect: (moduleId: number) => void;
    onBack: () => void;
    completedModules: number[];
}

type ModuleStatus = 'active' | 'locked' | 'completed';

interface SubModule {
    id: number;
    title: string;
    icon: string;
    status: ModuleStatus;
}

export const ProcessPortal: React.FC<ProcessPortalProps> = ({ onModuleSelect, onBack, completedModules }) => {
    // Determine module statuses based on completedModules
    const getModuleStatus = (moduleId: number): ModuleStatus => {
        if (completedModules.includes(moduleId)) {
            return 'completed';
        }
        // Module 1 is always active initially
        if (moduleId === 1) {
            return 'active';
        }
        // A module is active if the previous module is completed
        if (completedModules.includes(moduleId - 1)) {
            return 'active';
        }
        return 'locked';
    };

    const modules: SubModule[] = [
        {
            id: 1,
            title: 'Producción y Calidad',
            icon: logoProduccionCalidad,
            status: getModuleStatus(1)
        },
        {
            id: 2,
            title: 'Comercial',
            icon: logoComercial,
            status: getModuleStatus(2)
        },
        {
            id: 3,
            title: 'Logística y Despacho',
            icon: logoLogisticaDespacho,
            status: getModuleStatus(3)
        }
    ];

    const handleModuleClick = (moduleId: number) => {
        const module = modules.find(m => m.id === moduleId);
        if (module && (module.status === 'active' || module.status === 'completed')) {
            onModuleSelect(moduleId);
        }
    };

    return (
        <div className="process-portal-container">
            <TopBar moduleTitle="Nuestro Proceso" onClose={onBack} />

            <div className="process-portal-content">
                {/* Title Section */}
                <div className="portal-title-section">
                    <h1 className="portal-main-title">Portal De Nuestro Proceso</h1>
                    <p className="portal-subtitle">
                        (Completa cada módulo respondiendo al menos 3 respuestas correctas para avanzar.)
                    </p>
                </div>

                {/* Description */}
                <div className="portal-description">
                    <p>Explora cada módulo y conoce cómo funciona cada área de IMN.</p>
                </div>

                {/* Module Cards Grid */}
                <div className="process-modules-grid">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className={`process-module-card ${module.status}`}
                            onClick={() => handleModuleClick(module.id)}
                        >
                            <div className="module-icon-container">
                                <img src={module.icon} alt={module.title} className="module-icon" />
                            </div>
                            <h3 className="module-title">{module.title}</h3>

                            {/* Show checkmark for completed modules */}
                            {module.status === 'completed' && (
                                <div className="module-checkmark">✓</div>
                            )}

                            <button
                                className={`module-button ${module.status}`}
                                disabled={module.status === 'locked'}
                            >
                                Ingresar al Módulo
                            </button>
                        </div>
                    ))}
                </div>

                {/* Completion Button */}
                {completedModules.length === 3 && (
                    <div className="portal-completion-section">
                        <button className="portal-finish-btn" onClick={onBack}>
                            Finalizar Módulo y Regresar 🏠
                        </button>
                    </div>
                )}
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
