import React, { useState } from 'react';
import './SSTKnowledgeCheck.css';
import { TopBar } from '../../components/TopBar';

interface SSTKnowledgeCheckProps {
    onNext: () => void;
    onBack?: () => void;
}

export const SSTKnowledgeCheck: React.FC<SSTKnowledgeCheckProps> = ({ onNext, onBack }) => {
    const [step, setStep] = useState<'question' | 'explanation'>('question');
    const [response, setResponse] = useState<'yes' | 'no' | null>(null);

    const handleResponse = (answer: 'yes' | 'no') => {
        setResponse(answer);
        setStep('explanation');
    };

    return (
        <div className="sst-knowledge-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">
                {/* Title Section */}
                <div className="sst-question-title">
                    ¿Sabes qué es la Seguridad y<br />Salud en el Trabajo (SST)?
                </div>

                {step === 'question' && (
                    <div className="sst-options-container">
                        <button className="sst-option-btn primary" onClick={() => handleResponse('yes')}>
                            Si, lo se
                        </button>
                        <button className="sst-option-btn secondary" onClick={() => handleResponse('no')}>
                            No estoy seguro
                        </button>
                    </div>
                )}

                {step === 'explanation' && (
                    <div className="sst-explanation-container">
                        <div className="info-card-central">
                            {response === 'yes' ? (
                                <h2>¡Excelente!</h2>
                            ) : (
                                <h2>No te preocupes, aquí te lo explicamos:</h2>
                            )}
                            <p>
                                Es el conjunto de medidas, normas y prácticas que garantizan la
                                protección física, mental y social de los trabajadores, buscando
                                prevenir riesgos y mejorar el bienestar laboral.
                            </p>
                        </div>

                        <div className="benefits-grid">
                            {/* Card 1: Protección */}
                            <div className="benefit-card">
                                <div className="icon-circle">
                                    🛡️
                                </div>
                                <h3>Protección</h3>
                                <p>Prevención de accidentes y enfermedades laborales para cuidar tu integridad.</p>
                            </div>

                            {/* Card 2: Productividad */}
                            <div className="benefit-card">
                                <div className="icon-circle">
                                    📈
                                </div>
                                <h3>Productividad</h3>
                                <p>Un entorno seguro permite trabajar mejor, con mayor eficiencia y confianza.</p>
                            </div>

                            {/* Card 3: Bienestar */}
                            <div className="benefit-card">
                                <div className="icon-circle">
                                    💖
                                </div>
                                <h3>Bienestar</h3>
                                <p>La SST también cuida tu salud emocional y calidad de vida en el trabajo.</p>
                            </div>
                        </div>

                        <div className="action-footer">
                            <button className="next-btn" onClick={onNext}>
                                Siguiente ➡
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="chat-fab">💬</div>
        </div>
    );
};
