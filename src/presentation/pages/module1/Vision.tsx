import React, { useState, useRef } from 'react';
import './Mision.css';
import { FaEye } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { TopBar } from '../../components/TopBar';
import bgVision from '../../../assets/modulo01/bg_vision.png';

interface VisionProps {
    onBack: () => void;
    onNext: () => void; // Navigate to Next Section (Qué Hacemos)
}

export const Vision: React.FC<VisionProps> = ({ onBack, onNext }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleCardClick = () => {
        if (!isRevealed) {
            setIsRevealed(true);
            setTimeout(() => {
                confetti({
                    particleCount: 80,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#2FBCEB', '#25aae0', '#fff', '#226b8e'],
                });
            }, 350);
        }
    };

    return (
        <div className="mision-container" style={{ backgroundImage: `url(${bgVision})` }}>
            <TopBar moduleTitle="Corporativo IMN" />
            <div className="mision-title-pill">Visión</div>
            <div className="mision-content-wrapper">
                <div
                    ref={cardRef}
                    className={`mision-card ${isRevealed ? 'revealed animated' : 'collapsed'}`}
                    onClick={handleCardClick}
                >
                    {!isRevealed ? (
                        <div className="card-collapsed-content">
                            <div className="mision-icon">
                                <FaEye size={70} color="#2FBCEB" className="icon-animate" />
                            </div>
                            <h2 className="collapsed-title">Visión</h2>
                            <p className="click-instruction">¡Haz clic para descubrir la visión!</p>
                        </div>
                    ) : (
                        <div className="card-revealed-content">
                            <p>
                                Para el año <strong>2030</strong>, nos consolidaremos como la empresa líder de
                                <strong> Latinoamérica</strong> en el desarrollo, fabricación y comercialización de
                                suplementos nutricionales y alimentos saludables de alto desempeño.
                            </p>
                            <p>
                                Seremos reconocidos por nuestra <strong>innovación</strong> en fórmulas, el
                                cumplimiento riguroso de <strong>BPM</strong>, y por un crecimiento sólido,
                                llevando con orgullo el nombre del país a mercados internacionales.
                            </p>
                            <p>
                                Nuestra visión es construir una <strong>compañía</strong> referente por su
                                excelencia, calidad, transparencia y sostenibilidad, inspirando un
                                estilo de vida <strong>saludable y accesible</strong>, generando empleo formal,
                                impulsando el talento nacional y creando oportunidades para
                                cientos de familias.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="mision-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>
                {isRevealed && (
                    <button className="mision-next-btn" onClick={onNext}>
                        Siguiente ➡
                    </button>
                )}
            </div>
        </div>
    );
};
