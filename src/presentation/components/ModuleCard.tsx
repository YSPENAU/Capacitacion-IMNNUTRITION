import React from 'react';
import { Module } from '../../domain/entities/Module';
import './ModuleCard.css';

interface ModuleCardProps {
    module: Module;
    onComplete: (id: number) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, onComplete }) => {
    const isLocked = module.status === 'LOCKED';
    const isCompleted = module.status === 'COMPLETED';
    const isActive = module.status === 'ACTIVE';

    const handleClick = () => {
        if (isActive && !isCompleted) {
            onComplete(module.id);
        }
    };

    return (
        <div className={`module-card ${module.status.toLowerCase()}`}>
            <div className="module-image-container">
                <span className={`module-status-badge ${module.status.toLowerCase()}`}>
                    {isLocked && 'Bloqueado'}
                    {isActive && 'Disponible'}
                    {isCompleted && 'Completado'}
                </span>
                <img src={module.image} alt={module.title} />
            </div>

            <div className="module-content">
                <h3 className="module-title">{module.title}</h3>
                <p className="module-description">{module.description}</p>

                {isActive && (
                    <button className="module-action-btn" onClick={(e) => {
                        e.stopPropagation();
                        onComplete(module.id);
                    }}>
                        Completar Módulo
                    </button>
                )}

                {isCompleted && (
                    <button className="module-action-btn" disabled>
                        ✔ Finalizado
                    </button>
                )}

                {isLocked && (
                    <button className="module-action-btn" disabled style={{ opacity: 0.5, backgroundColor: '#333' }}>
                        Bloqueado
                    </button>
                )}
            </div>
        </div>
    );
};
