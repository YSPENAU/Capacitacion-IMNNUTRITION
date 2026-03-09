import React, { useState } from 'react';
import './SSTAccidentFlow.css';
import { TopBar } from '../../components/TopBar';
import iconTrabajador from '../../../assets/modulo_sst/trabajadorAccidentado.png';
import iconJefe from '../../../assets/modulo_sst/jefeInmediato.png';
import iconSST from '../../../assets/modulo_sst/areaSst.png';
import iconFormatos from '../../../assets/modulo_sst/formatos.png';
import iconPositiva from '../../../assets/modulo_sst/positivaSeguros.png';

interface SSTAccidentFlowProps {
    onNext: () => void;
    onBack?: () => void;
}

interface StepData {
    title: string;
    icon: string;
    description: string;
    connectorLabel: string;
}

const stepsList: StepData[] = [
    {
        title: "Trabajador\nAccidentado",
        icon: iconTrabajador,
        description: "Mantén la calma y avisa inmediatamente al supervisor o brigada de emergencias.",
        connectorLabel: "Informar"
    },
    {
        title: "Jefe Inmediato",
        icon: iconJefe,
        description: "El brigadista aplica primeros auxilios y activa el protocolo según la gravedad del accidente.",
        connectorLabel: "Reportar"
    },
    {
        title: "Área SST",
        icon: iconSST,
        description: "Notifica el accidente llenando el formato establecido por la empresa.",
        connectorLabel: "Atención y\nRelato AT"
    },
    {
        title: "Formatos",
        icon: iconFormatos,
        description: "Se revisan las causas para implementar correctivos y evitar que vuelva a suceder.",
        connectorLabel: "Remitir"
    },
    {
        title: "Positiva Compañía\nDe Seguros",
        icon: iconPositiva,
        description: "Refuerza el uso de EPP, sigue las normas de seguridad y participa en las capacitaciones.",
        connectorLabel: ""
    }
];

export const SSTAccidentFlow: React.FC<SSTAccidentFlowProps> = ({ onNext }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [maxUnlocked, setMaxUnlocked] = useState(0);
    const [selectedStep, setSelectedStep] = useState(0);

    const onStepClick = (index: number) => {
        if (index <= maxUnlocked) {
            setSelectedStep(index);
            // Unlock next one if we are at the edge
            if (index === maxUnlocked && index < stepsList.length - 1) {
                // Determine if we want immediate or delayed unlock. Immediate is snappier.
                setMaxUnlocked(prev => prev + 1);
            }
        }
    };

    const isComplete = maxUnlocked === stepsList.length - 1;

    return (
        <div className="sst-accidents-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">

                {/* Title Section */}
                <div className="sst-main-title accidents-title">
                    ¿Qué hacer en caso de<br />accidentes?
                </div>

                {/* Intro Text */}
                <div className="accidents-intro-text">
                    <p>
                        Conocer qué hacer en caso de un accidente y aplicar medidas de prevención es clave para tu seguridad y la de tus compañeros.
                    </p>
                </div>

                {/* Flow Container */}
                <div className="accidents-flow-container">
                    {stepsList.map((step, index) => {
                        const isUnlocked = index <= maxUnlocked;
                        const isSelected = index === selectedStep;

                        return (
                            <React.Fragment key={index}>
                                {/* Step Node */}
                                <div className="flow-step-wrapper">
                                    {/* Connector Arrow (if not last) */}
                                    {index < stepsList.length - 1 && (
                                        <div className={`flow-connector ${index < maxUnlocked ? 'active' : ''}`}>
                                            <span className="connector-label">
                                                {step.connectorLabel}
                                                <div className="arrow-line"></div>
                                                <span className="arrow-head">►</span>
                                            </span>
                                        </div>
                                    )}

                                    <div
                                        className={`flow-circle ${isUnlocked ? 'unlocked' : 'locked'} ${isSelected ? 'selected' : ''}`}
                                        onClick={() => onStepClick(index)}
                                    >
                                        <img src={step.icon} alt={step.title} />
                                    </div>
                                    <h3 className="step-title">{step.title}</h3>

                                    <div className={`step-description ${isSelected ? 'visible' : ''}`}>
                                        {step.description}
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Footer Info Box */}
                <div className="sst-footer-pill accidents-footer">
                    <p>
                        La prevención es tu mejor herramienta. ¡Cuidémonos entre todos!
                    </p>
                </div>

                {/* Next Button / Quiz Button */}
                <div className="sst-action-footer">
                    <button
                        className={`sst-next-btn ${!isComplete ? 'disabled' : ''}`}
                        onClick={onNext}
                        disabled={!isComplete}
                    >
                        Quiz 3 ➡
                    </button>
                </div>
            </div>

            <div className="chat-fab">💬</div>
        </div>
    );
};
