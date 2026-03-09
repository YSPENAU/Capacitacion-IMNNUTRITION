import React, { useState } from 'react';
import './SSTCommittees.css';
import { TopBar } from '../../components/TopBar';
import integrantesCopasst from '../../../assets/modulo_sst/integrantes_copasst.png';
import integrantesCocola from '../../../assets/modulo_sst/integrantes_cocola.png';
import integrantesBrigada from '../../../assets/modulo_sst/integrantes_brigadas.png';

type CommitteeType = 'copasst' | 'cocola' | 'brigada' | null;

interface SSTCommitteesProps {
    onNext: () => void;
    onBack?: () => void;
}

export const SSTCommittees: React.FC<SSTCommitteesProps> = ({ onNext }) => {
    const [activeCommittee, setActiveCommittee] = useState<CommitteeType>(null);
    const [showModal, setShowModal] = useState(false);

    const committeesData = {
        copasst: {
            title: "COPASST",
            icon: "🛡️✅", // Placeholder icon
            def: "Es el comité encargado de Vigilar y Promover la seguridad y la salud en el trabajo dentro de la empresa. Conformado por representantes del empleador y de los trabajadores.",
            funcs: [
                "Vigilar las condiciones de trabajo",
                "Proponer medidas de prevención y control",
                "Promover y participar en actividades de capacitación",
                "Investigar accidentes de trabajo",
                "Inspeccionar áreas laborales",
                "Fomentar el autocuidado"
            ],
            image: integrantesCopasst
        },
        cocola: {
            title: "COCOLA",
            icon: "👥🤝", // Placeholder icon
            def: "Es el comité encargado de promover un ambiente laboral respetuoso y sano, mediante la prevención y atención de situaciones de acoso laboral, fomentando el diálogo, el respeto y la buena convivencia.",
            funcs: [
                "Prevenir el acoso laboral",
                "Recibe y tramita quejas sobre conductas que puedan constituir acoso laboral",
                "Promueve el diálogo para resolver conflictos internos",
                "Actuar con imparcialidad y confidencialidad"
            ],
            image: integrantesCocola
        },
        brigada: {
            title: "Brigada de Emergencias",
            icon: "🚨⛑️", // Placeholder icon
            def: "Es el grupo de trabajadores voluntarios, capacitados y entrenados para actuar antes, durante y después de una emergencia o siniestro.",
            funcs: [
                "Atender emergencias médicas (primeros auxilios)",
                "Combatir incendios (contraincendios)",
                "Coordinar evacuaciones",
                "Gestionar comunicaciones durante emergencias",
                "Realizar inspecciones preventivas"
            ],
            image: integrantesBrigada
        }
    };

    const handleCardClick = (type: CommitteeType) => {
        // If clicking the same card, collapse it. Else open it.
        setActiveCommittee(activeCommittee === type ? null : type);
    };

    const openModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="sst-committees-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">

                {/* Title Section */}
                <div className="sst-main-title committee-title">
                    Comités de Apoyo y Brigada de<br />Emergencias
                </div>

                {/* Intro Text */}
                <div className="committee-intro-text">
                    <p>
                        En IMN contamos con diferentes comités y equipos de apoyo que fortalecen la seguridad, la convivencia y la respuesta ante emergencias. Conoce su propósito, funciones y quiénes los integran.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="committee-cards-container">
                    {(Object.keys(committeesData) as CommitteeType[]).map((key) => {
                        const data = committeesData[key!];
                        const isActive = activeCommittee === key;

                        return (
                            <div
                                key={key}
                                className={`committee-card ${isActive ? 'active' : ''}`}
                                onClick={() => handleCardClick(key)}
                            >
                                <div className="card-header">
                                    <div className="committee-icon">{data.icon}</div>
                                    <h3>{data.title}</h3>
                                </div>

                                {isActive ? (
                                    <div className="card-body-expanded">
                                        <p className="committee-def">{data.def}</p>
                                        <ul className="committee-funcs">
                                            {data.funcs.map((func, i) => (
                                                <li key={i}>{func}</li>
                                            ))}
                                        </ul>
                                        <button className="view-members-btn" onClick={openModal}>
                                            “Ver Integrantes”
                                        </button>
                                    </div>
                                ) : (
                                    <div className="click-hint">(Haz clic aquí)</div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Footer Info Box */}
                <div className="sst-footer-pill committee-footer">
                    <p>
                        Estos comités protegen tu bienestar y promueven un ambiente laboral seguro para todos.
                    </p>
                </div>

                {/* Next Button */}
                <div className="sst-action-footer">
                    <button className="sst-next-btn" onClick={onNext}>
                        Siguiente ➡
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && activeCommittee && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>×</button>
                        <h2 className="modal-title">Integrantes - {committeesData[activeCommittee].title}</h2>
                        <div className="modal-image-container">
                            <img
                                src={committeesData[activeCommittee].image}
                                alt={`Integrantes de ${committeesData[activeCommittee].title}`}
                                className="members-img"
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="chat-fab">💬</div>
        </div>
    );
};
