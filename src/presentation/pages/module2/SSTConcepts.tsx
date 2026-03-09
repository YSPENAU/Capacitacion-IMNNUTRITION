import React, { useState } from 'react';
import './SSTConcepts.css';
import { TopBar } from '../../components/TopBar';
import imnLogo from '../../../assets/logos/logo_imn.svg';
import ejemploPeligro from '../../../assets/modulo_sst/ejemplo_peligro.png';
import ejemploRiesgo from '../../../assets/modulo_sst/ejemplo_riesgo.png';
import ejemploIncidente from '../../../assets/modulo_sst/ejemplo_incidente.png';
import ejemploAccidente from '../../../assets/modulo_sst/ejemplo_accidente.png';
import ejemploActoInseguro from '../../../assets/modulo_sst/ejemplo_acto_inseguro.png';
import ejemploCondicion from '../../../assets/modulo_sst/ejemplo_condicion_insegura.png';

interface SSTConceptsProps {
    onNext: () => void;
    onBack?: () => void;
}

interface ConceptData {
    title: string;
    icon: string;
    def: string;
    image: string;
}

const conceptsList: ConceptData[] = [
    {
        title: "Peligro",
        icon: "⚠️",
        def: "Fuente, situación o acción con el potencial de causar daño en la salud de las personas o en el entorno laboral.",
        image: ejemploPeligro
    },
    {
        title: "Riesgo",
        icon: "🛡️",
        def: "La probabilidad de que un peligro se materialice y cause un daño.",
        image: ejemploRiesgo
    },
    {
        title: "Incidente",
        icon: "📝",
        def: "Suceso relacionado con el trabajo que pudo haber causado daño, pero que no generó lesiones o pérdidas.",
        image: ejemploIncidente
    },
    {
        title: "Accidente",
        icon: "🤕",
        def: "Evento repentino que causa lesiones, daños materiales o afecta la salud de un trabajador.",
        image: ejemploAccidente
    },
    {
        title: "Acto Inseguro",
        icon: "🚫",
        def: "Acción realizada por una persona que aumenta la probabilidad de un accidente.",
        image: ejemploActoInseguro
    },
    {
        title: "Condición Insegura",
        icon: "🏚️",
        def: "Situación del entorno laboral que puede ocasionar un accidente.",
        image: ejemploCondicion
    }
];

export const SSTConcepts: React.FC<SSTConceptsProps> = ({ onNext }) => {
    const [unlockedIndex, setUnlockedIndex] = useState(0);
    const [modalIndex, setModalIndex] = useState<number | null>(null);

    const handleOpenExample = (index: number) => {
        if (index <= unlockedIndex) {
            setModalIndex(index);
        }
    };

    const handleCloseModal = () => {
        if (modalIndex !== null) {
            // Unlock next if we just viewed the current latest unlocked item
            if (modalIndex === unlockedIndex && unlockedIndex < conceptsList.length) {
                setUnlockedIndex(prev => prev + 1);
            }
            setModalIndex(null);
        }
    };

    const isComplete = unlockedIndex >= conceptsList.length; // Actually unlocking index extends past last item index when done

    return (
        <div className="sst-concepts-container">
            {/* Header */}
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">

                {/* Title Section */}
                <div className="sst-main-title concepts-title">
                    Conceptos clave de Seguridad y<br />Prevención
                </div>

                {/* Intro Text */}
                <div className="concepts-intro-text">
                    <p>
                        Conocer y diferenciar estos conceptos es fundamental para prevenir incidentes y mantener un ambiente de trabajo seguro.
                    </p>
                </div>

                {/* Grid */}
                <div className="concepts-grid">
                    {conceptsList.map((concept, index) => {
                        const isLocked = index > unlockedIndex;
                        const cardClass = `concept-card ${isLocked ? 'locked' : 'unlocked'}`;

                        return (
                            <div key={index} className={cardClass}>
                                <div className="concept-header">
                                    <h3 className="concept-name">{concept.title}</h3>
                                    <span className="concept-icon">{concept.icon}</span>
                                </div>
                                <p className="concept-def">{concept.def}</p>
                                <button
                                    className="view-example-btn"
                                    onClick={() => handleOpenExample(index)}
                                    disabled={isLocked}
                                >
                                    “Ver Ejemplo”
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Info Box */}
                <div className={`sst-footer-pill concepts-footer ${isComplete ? 'complete' : ''}`}>
                    <p>
                        Recuerda: identificar peligros, riesgos y condiciones inseguras es el primer paso para evitar accidentes y proteger tu bienestar en el trabajo.
                    </p>
                </div>

                {/* Next Button */}
                <div className="sst-action-footer">
                    <button
                        className={`sst-next-btn ${!isComplete ? 'disabled' : ''}`}
                        onClick={onNext}
                        disabled={!isComplete}
                    >
                        Siguiente ➡
                    </button>
                </div>
            </div>

            {/* Modal */}
            {modalIndex !== null && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content concepts-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={handleCloseModal}>×</button>

                        {/* 
                           We display the image. 
                           If the user provided screenshots show a layout with Title/Text overlay, 
                           we might need HTML. But the plan says "Example Image". 
                           We will just show the image as it contains the content.
                        */}
                        <div className="modal-image-container">
                            <img
                                src={conceptsList[modalIndex].image}
                                alt={`Ejemplo de ${conceptsList[modalIndex].title}`}
                                className="example-img"
                            />
                        </div>

                        <div className="modal-footer-action">
                            <button className="continue-btn" onClick={handleCloseModal}>
                                Continuar ➡
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="chat-fab">💬</div>
        </div>
    );
};
