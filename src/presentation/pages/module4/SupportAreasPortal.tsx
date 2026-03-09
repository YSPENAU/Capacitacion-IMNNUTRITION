import React from 'react';
import './SupportAreasPortal.css';
import { TopBar } from '../../components/TopBar';

// Import logos from Module 3 since they are stored there
import logoContabilidad from '../../../assets/modulo03/logo_contabilidad.png';
import logoMarketing from '../../../assets/modulo03/logo_marketing.png';
import logoArgip from '../../../assets/modulo03/logo_argip.png';

interface SupportAreasPortalProps {
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

export const SupportAreasPortal: React.FC<SupportAreasPortalProps> = ({ onModuleSelect, onBack, completedModules }) => {
    // Determine module statuses based on completedModules
    // Logic: 
    // 1 (Contabilidad) is always active initially (or unlocked)
    // 2 (Marketing) unlocks after 1
    // 3 (ARGIP) unlocks after 2

    // Note: completedModules here refers to submodule IDs within Module 4.
    // e.g., 1 = Contabilidad, 2 = Marketing, 3 = ARGIP.

    const getModuleStatus = (moduleId: number): ModuleStatus => {
        if (completedModules.includes(moduleId)) {
            return 'completed';
        }
        if (moduleId === 1) {
            return 'active';
        }
        if (completedModules.includes(moduleId - 1)) {
            return 'active';
        }
        return 'locked';
    };

    const modules: SubModule[] = [
        {
            id: 1,
            title: 'Contabilidad y Finanzas',
            icon: logoContabilidad,
            status: getModuleStatus(1)
        },
        {
            id: 2,
            title: 'Marketing',
            icon: logoMarketing,
            status: getModuleStatus(2)
        },
        {
            id: 3,
            title: 'ARGIP',
            icon: logoArgip,
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
        <div className="support-portal-container">
            <TopBar moduleTitle="Portal De Áreas De Apoyo" onClose={onBack} />

            <div className="support-portal-content">
                {/* Title Section */}
                <div className="portal-title-section">
                    <h1 className="portal-main-title">Portal De Áreas De Apoyo</h1>
                    <p className="portal-subtitle">
                        (Completa cada módulo respondiendo al menos 3 respuestas correctas para avanzar.)
                    </p>
                </div>

                {/* Description */}
                <div className="portal-description">
                    <p>Explora cada módulo y conoce cómo funciona cada área de IMN.</p>
                </div>

                {/* Module Cards Grid */}
                <div className="support-modules-grid">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className={`support-module-card ${module.status}`}
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

                {/* Completion Buttons */}
                {completedModules.length === 3 && (
                    <div className="portal-completion-section">
                        <h2 className="completion-title">🎉 ¡Felicitaciones! Has completado todos los módulos</h2>
                        <p className="completion-message">
                            Has finalizado exitosamente el Portal de Áreas de Apoyo.
                            Ahora puedes regresar al dashboard o completar la encuesta final.
                        </p>
                        <div className="completion-buttons">
                            <button className="portal-dashboard-btn" onClick={onBack}>
                                🏠 Volver al Dashboard
                            </button>
                            <button className="portal-survey-btn" onClick={() => {
                                // TODO: Navigate to survey
                                alert('Encuesta Final - Próximamente');
                            }}>
                                📋 Encuesta Final
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
