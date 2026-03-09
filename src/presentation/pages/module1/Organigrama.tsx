import React, { useState } from 'react';
import './Organigrama.css';
import { TopBar } from '../../components/TopBar';

// Import all organigrama images
import gerenciaEjecutiva from '../../../assets/modulo01/organigrama/gerenciaEjecutiva.png';
import gerenciaAdministrativa from '../../../assets/modulo01/organigrama/gerenciaAdministrativa.png';
import contabilidadFinanzas from '../../../assets/modulo01/organigrama/contabilidadFinanzas.png';
import marketingComunicacion from '../../../assets/modulo01/organigrama/marketingComunicacion.png';
import ProduccionCalidad from '../../../assets/modulo01/organigrama/ProduccionCalidad.png';
import comercial from '../../../assets/modulo01/organigrama/comercial.png';
import talentoHumano from '../../../assets/modulo01/organigrama/talentoHumano.png';
import logisticaDespacho from '../../../assets/modulo01/organigrama/logisticaDespacho.png';
import argip from '../../../assets/modulo01/organigrama/argip.png';

interface OrganigramaProps {
    onBack: () => void;
    onNext: () => void;
}

const AREAS = [
    { id: 0, name: 'Gerencia Ejecutiva', image: gerenciaEjecutiva, level: 1 },
    { id: 1, name: 'Gerencia Administrativa', image: gerenciaAdministrativa, level: 2 },
    { id: 2, name: 'Contabilidad y\nFinanzas', image: contabilidadFinanzas, level: 3 },
    { id: 3, name: 'Marketing y\nCominucación', image: marketingComunicacion, level: 3 },
    { id: 4, name: 'Producción y\nCalidad', image: ProduccionCalidad, level: 3 },
    { id: 5, name: 'Comercial', image: comercial, level: 3 },
    { id: 6, name: 'Talento Humano', image: talentoHumano, level: 3 },
    { id: 7, name: 'Logística y\nDespacho', image: logisticaDespacho, level: 3 },
    { id: 8, name: '(ARGIP)', image: argip, level: 3 }
];

export const Organigrama: React.FC<OrganigramaProps> = ({ onBack, onNext }) => {
    const [viewedAreas, setViewedAreas] = useState<Set<number>>(new Set());
    const [currentModal, setCurrentModal] = useState<number | null>(null);

    const handleAreaClick = (areaId: number) => {
        // Only allow clicking if it's the next area in sequence
        if (areaId === viewedAreas.size) {
            setCurrentModal(areaId);
        }
    };

    const closeModal = () => {
        if (currentModal !== null) {
            const newViewed = new Set(viewedAreas);
            newViewed.add(currentModal);
            setViewedAreas(newViewed);
            setCurrentModal(null);
        }
    };

    const isAreaUnlocked = (areaId: number) => {
        return areaId === viewedAreas.size || viewedAreas.has(areaId);
    };

    const isAreaViewed = (areaId: number) => {
        return viewedAreas.has(areaId);
    };

    const allAreasViewed = viewedAreas.size === AREAS.length;

    return (
        <div className="organigrama-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title Pill */}
            <div className="organigrama-title-pill">
                Organigrama
            </div>

            {/* Progress Bar */}
            <div className="org-progress-text">{viewedAreas.size}/{AREAS.length} áreas exploradas</div>
            <div className="org-progress-bar">
                <div className="org-progress-fill" style={{ width: `${(viewedAreas.size / AREAS.length) * 100}%` }} />
            </div>

            {/* Organizational Chart */}
            <div className="org-chart-wrapper">
                {/* Level 1: Gerencia Ejecutiva */}
                <div className="org-level level-1">
                    <div
                        className={`org-box ${isAreaViewed(0) ? 'viewed' : ''} ${isAreaUnlocked(0) ? 'unlocked' : 'locked'}`}
                        onClick={() => handleAreaClick(0)}
                    >
                        <div className="org-box-title">{AREAS[0].name}</div>
                        <div className="org-box-subtitle">(Haz clic)</div>
                    </div>
                </div>

                {/* Connector Line */}
                <div className="org-connector vertical"></div>

                {/* Level 2: Gerencia Administrativa */}
                <div className="org-level level-2">
                    <div
                        className={`org-box ${isAreaViewed(1) ? 'viewed' : ''} ${isAreaUnlocked(1) ? 'unlocked' : 'locked'}`}
                        onClick={() => handleAreaClick(1)}
                    >
                        <div className="org-box-title">{AREAS[1].name}</div>
                        <div className="org-box-subtitle">(Haz clic)</div>
                    </div>
                </div>

                {/* Connector Line */}
                <div className="org-connector vertical"></div>

                {/* Level 3: Departments */}
                <div className="org-level level-3">

                    <div className="departments-row">
                        {AREAS.slice(2).map((area) => (
                            <div
                                key={area.id}
                                className={`org-box department ${isAreaViewed(area.id) ? 'viewed' : ''} ${isAreaUnlocked(area.id) ? 'unlocked' : 'locked'}`}
                                onClick={() => handleAreaClick(area.id)}
                            >
                                <div className="org-box-title">{area.name}</div>
                                <div className="org-box-subtitle">(Haz clic)</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {currentModal !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>
                        <h3 className="modal-title">{AREAS[currentModal].name}</h3>
                        <img
                            src={AREAS[currentModal].image}
                            alt={AREAS[currentModal].name}
                            className="modal-image"
                        />
                    </div>
                </div>
            )}

            {/* Footer Navigation */}
            <div className="organigrama-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>



                <button
                    className={`organigrama-next-btn ${allAreasViewed ? 'enabled' : 'disabled'}`}
                    onClick={allAreasViewed ? onNext : undefined}
                    disabled={!allAreasViewed}
                >
                    Siguiente ➡
                </button>
            </div>
        </div>
    );
};
