import React, { useState } from 'react';
import './SSTPoliciesObjectives.css';
import { TopBar } from '../../components/TopBar';

interface SSTPoliciesObjectivesProps {
    onNext: () => void;
    onBack?: () => void;
}

export const SSTPoliciesObjectives: React.FC<SSTPoliciesObjectivesProps> = ({ onNext }) => {
    const [activeTab, setActiveTab] = useState<'policies' | 'objectives'>('policies');

    return (
        <div className="sst-policies-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">

                {/* Title Section */}
                <div className="sst-main-title">
                    {activeTab === 'policies' ? 'Nuestras Políticas y Objetivos en SST' : 'Nuestras Políticas y Objetivos en SST'}
                </div>

                {/* Sliding Panels Container */}
                <div className="sliding-panels-container">

                    {/* Panel Left: Policies */}
                    <div
                        className={`panel-left ${activeTab === 'policies' ? 'expanded' : 'collapsed'}`}
                        onClick={() => setActiveTab('policies')}
                    >
                        {activeTab === 'policies' ? (
                            <div className="panel-content-active">
                                <p className="intro-text">
                                    En IMN NUTRITION, la protección de la vida, la salud y el bienestar de todos
                                    nuestros trabajadores, contratistas y visitantes, es una prioridad, al igual que las
                                    condiciones de trabajo seguras y saludables.
                                    <br />
                                    A través de nuestra Política de Seguridad y Salud en el trabajo nos comprometemos a:
                                </p>

                                <div className="policy-item">
                                    <div className="icon-box">📜</div>
                                    <div className="text-box">
                                        <h4>Cumplimiento legal</h4>
                                        <p>Cumplir la normatividad vigente en Seguridad y salud en el trabajo e implementar el SG-SST, destinando los recursos necesarios.</p>
                                    </div>
                                </div>

                                <div className="policy-item">
                                    <div className="icon-box">👷</div>
                                    <div className="text-box">
                                        <h4>Prevención</h4>
                                        <p>Cuidar la salud y seguridad física y mental de todos los trabajadores, mediante la identificación, evaluación y control de riesgos.</p>
                                    </div>
                                </div>

                                <div className="policy-item">
                                    <div className="icon-box">🛡️</div>
                                    <div className="text-box">
                                        <h4>Cultura de seguridad</h4>
                                        <p>Promover una cultura de autocuidado, respeto y responsabilidad compartida, fomentando hábitos de vida saludable.</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="panel-content-collapsed">
                                <span className="collapsed-title">Políticas</span>
                                <div className="chevron-left">«</div>
                            </div>
                        )}
                    </div>

                    {/* Panel Right: Objectives */}
                    <div
                        className={`panel-right ${activeTab === 'objectives' ? 'expanded' : 'collapsed'}`}
                        onClick={() => setActiveTab('objectives')}
                    >
                        {activeTab === 'objectives' ? (
                            <div className="panel-content-active">
                                <h2 className="panel-title">Objetivos del SG-SST</h2>

                                <div className="objectives-timeline">
                                    <div className="timeline-line"></div>

                                    <div className="objective-node">
                                        <div className="node-circle">1</div>
                                        <h4>Reducir la<br />accidentalidad</h4>
                                        <p>Disminuir los índices de incidentes y accidentes laborales.</p>
                                    </div>

                                    <div className="objective-node">
                                        <div className="node-circle">2</div>
                                        <h4>Promover el<br />autocuidado</h4>
                                        <p>Fomentar hábitos de vida saludables y seguros.</p>
                                    </div>

                                    <div className="objective-node">
                                        <div className="node-circle">3</div>
                                        <h4>Capacitación<br />constante</h4>
                                        <p>Desarrollar programas de formación y sensibilización en SST.</p>
                                    </div>

                                    <div className="objective-node">
                                        <div className="node-circle">4</div>
                                        <h4>Mejora<br />continua</h4>
                                        <p>Evaluar y ajustar periódicamente los procesos.</p>
                                    </div>
                                </div>

                                <button className="return-arrow" onClick={(e) => { e.stopPropagation(); setActiveTab('policies'); }}>
                                    « Volver a Políticas
                                </button>
                            </div>
                        ) : (
                            <div className="panel-content-collapsed">
                                <div className="chevron-right">»</div>
                                <span className="collapsed-title">Objetivos</span>
                                <div className="collapsed-number">1</div>
                            </div>
                        )}
                    </div>

                </div>

                {/* Footer Info Box */}
                <div className="sst-footer-pill">
                    <p>
                        En IMN, nuestras políticas y objetivos en SST están diseñados para proteger lo más valioso: la vida, la salud y el bienestar de nuestra gente.
                    </p>
                </div>

                {/* Next Button */}
                <div className="sst-action-footer">
                    <button className="sst-next-btn" onClick={onNext}>
                        Siguiente ➡
                    </button>
                </div>
            </div>

            <div className="chat-fab">💬</div>
        </div>
    );
};
