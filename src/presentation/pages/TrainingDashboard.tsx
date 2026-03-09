import React, { useEffect, useState } from 'react';
import { Module } from '../../domain/entities/Module';
import { GetModulesUseCase } from '../../domain/usecases/GetModulesUseCase';
import { CompleteModuleUseCase } from '../../domain/usecases/CompleteModuleUseCase';
import { ModuleRepositoryImpl } from '../../data/repositories/ModuleRepositoryImpl';
import './TrainingDashboard.css';
import { TopBar } from '../components/TopBar';

import plantaBase from '../../assets/planta/planta.png';
import imnLogo from '../../assets/logos/logo_imn.svg';

const repository = ModuleRepositoryImpl.getInstance();
const getModulesUseCase = new GetModulesUseCase(repository);
const completeModuleUseCase = new CompleteModuleUseCase(repository);

interface TrainingDashboardProps {
    onModuleSelect?: (id: number) => void;
    onLogout?: () => void;
}

export const TrainingDashboard: React.FC<TrainingDashboardProps> = ({ onModuleSelect, onLogout }) => {
    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);

    const loadModules = async () => {
        try {
            const data = await getModulesUseCase.execute();
            setModules(data);
        } catch (error) {
            console.error('Error loading modules:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadModules();
    }, []);

    const handleComplete = async (id: number) => {
        await completeModuleUseCase.execute(id);
        await loadModules();
    };

    // Helper for Z-Index layering class
    const getLayerClass = (id: number) => {
        switch (id) {
            case 1: return 'layer-corporativo';
            case 2: return 'layer-sst';
            case 3: return 'layer-produccion';
            case 4: return 'layer-apoyo';
            default: return '';
        }
    };

    const getPositionStyle = (id: number): React.CSSProperties => {
        switch (id) {
            // Adjusted approximate positions for aspect-ratio container
            case 1: // Corporativo (Top Right)
                return { top: '32%', left: '76%' };
            case 2: // SST (Far Left)
                return { top: '60%', left: '23%' };
            case 3: // Proceso (Center)
                return { top: '38%', left: '42%' };
            case 4: // Apoyo (Bottom Right)
                return { top: '70%', left: '72%' };
            default:
                return { top: '50%', left: '50%' };
        }
    };

    if (loading) return <div>Cargando...</div>;

    const activeModule = modules.find(m => m.status === 'ACTIVE');

    return (
        <div className="dashboard-container">
            {/* Header */}
            <TopBar
                moduleTitle="Capacitaciones IMN Nutrition"
                showLogout={true}
                onLogout={onLogout}
            />

            <div className="title-pill">Modulos de la Planta IMN</div>

            <div className="map-wrapper">
                <div className="plant-map-container">
                    <img src={plantaBase} alt="Planta Base" className="base-plant" />

                    {/* Overlays */}
                    {modules.map((module) => (
                        <img
                            key={`img-${module.id}`}
                            src={module.image}
                            alt={module.title}
                            className={`module-overlay ${module.status.toLowerCase()} ${getLayerClass(module.id)}`}
                        />
                    ))}

                    {/* Labels */}
                    {modules.map((module) => (
                        <div
                            key={`label-${module.id}`}
                            className="module-label-container"
                            style={getPositionStyle(module.id)}
                        >
                            <div
                                className={`module-label ${module.status.toLowerCase()}`}
                                onClick={() => {
                                    const isAccessible = module.status === 'ACTIVE' || module.status === 'COMPLETED';
                                    if (isAccessible && onModuleSelect) {
                                        onModuleSelect(module.id);
                                    }
                                }}
                            >
                                {module.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
