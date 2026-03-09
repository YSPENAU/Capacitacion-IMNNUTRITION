import React, { useState, useRef } from 'react';
import './Mision.css';
import { TopBar } from '../../components/TopBar';
import bgMision from '../../../assets/modulo01/bg_mision.png';
import { FaBullseye } from 'react-icons/fa';
import confetti from 'canvas-confetti';

interface MisionProps {
    onBack: () => void;
    onNext: () => void; // Navigate to Visión
}

export const Mision: React.FC<MisionProps> = ({ onBack, onNext }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleCardClick = () => {
        if (!isRevealed) {
            setIsRevealed(true);
            // Lanzar confeti al revelar
            setTimeout(() => {
                confetti({
                    particleCount: 80,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#2FBCEB', '#25aae0', '#fff', '#333'],
                });
            }, 350);
        }
    };

    return (
        <div className="mision-container" style={{ backgroundImage: `url(${bgMision})` }}>
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title Pill (Cyan) */}
            <div className="mision-title-pill">
                Misión
            </div>

            {/* Central Card */}
            <div className="mision-content-wrapper">
                <div
                    ref={cardRef}
                    className={`mision-card ${isRevealed ? 'revealed animated' : 'collapsed'}`}
                    onClick={handleCardClick}
                >
                    {!isRevealed ? (
                        <div className="card-collapsed-content">
                            <div className="mision-icon">
                                <FaBullseye size={70} color="#2FBCEB" className="icon-animate" />
                            </div>
                            <h2 className="collapsed-title">Misión</h2>
                            <p className="click-instruction">¡Haz clic para descubrir la misión!</p>
                        </div>
                    ) : (
                        <div className="card-revealed-content">
                            <p>
                                En <strong>INVERSIONES MUTANT NUTRITION S.A.S</strong> Nos dedicamos al
                                desarrollo, fabricación y comercialización de productos nutricionales,
                                saludables, cumpliendo con los más altos estándares de calidad (BPM)
                                y demostrando nuestro compromiso con la protección del medio ambiente,
                                enfocados en satisfacer las expectativas y necesidades de nuestros clientes
                                en salud y el bienestar.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="mision-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>
                {isRevealed && (
                    <button className="mision-next-btn" onClick={onNext}>
                        Ver Visión ➡
                    </button>
                )}
            </div>
        </div>
    );
};
