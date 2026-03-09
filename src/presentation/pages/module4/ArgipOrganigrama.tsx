import React, { useState } from 'react';
import './ArgipOrganigrama.css';
import { TopBar } from '../../components/TopBar';
import sebastianPhoto from '../../../assets/modulo4/sebastiaGutierres.png';

interface ArgipOrganigramaProps {
    onNext: () => void;
    onBack: () => void;
}

export const ArgipOrganigrama: React.FC<ArgipOrganigramaProps> = ({ onNext, onBack }) => {
    // Single member for this chart
    const sebastian = {
        id: 1,
        name: 'Sebastian Gutiérrez',
        role: 'Analista',
        photo: sebastianPhoto,
        description: 'Garantiza el cumplimiento normativo, gestiona documentación del SGC, realiza auditorías internas, y coordina la mejora continua de procesos en toda la organización.'
    };

    return (
        <div className="argip-organigrama-container">
            <TopBar moduleTitle="ARGIP" onClose={onBack} />

            <div className="argip-organigrama-content">
                {/* Header Section */}
                <div className="org-header-section">
                    <div className="org-title-pill">
                        <span className="org-title-main">ARGIP</span>
                        <span className="org-title-subtitle">(Pasa el cursor sobre cada integrante y descubre su función dentro del área.)</span>
                    </div>
                </div>

                <div className="org-intro-text">
                    El área de ARGIP garantiza el orden, la trazabilidad y el cumplimiento normativo de IMN Nutrition, liderando la gestión integral de procesos y asegurando que cada procedimiento esté documentado, actualizado y alineado con los objetivos corporativos.
                </div>

                {/* Single Card Section */}
                <div className="org-single-card-container">
                    <div className="argip-contact-card">
                        <div className="card-top-title">Dir. ARGIP</div>

                        <div className="card-photo-wrapper">
                            <img src={sebastian.photo} alt={sebastian.name} className="card-photo" />

                            {/* Overlay */}
                            <div className="card-overlay">
                                <p className="overlay-text">{sebastian.description}</p>
                            </div>
                        </div>

                        <div className="card-info">
                            <div className="card-role">{sebastian.role}</div>
                            <div className="card-name">{sebastian.name}</div>
                        </div>
                    </div>
                </div>

                <div className="org-footer">
                    <button className="org-next-btn" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>
            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
