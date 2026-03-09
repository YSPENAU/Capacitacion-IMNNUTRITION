import React, { useState } from 'react';
import './QuienesSomos.css';
import { TopBar } from '../../components/TopBar';
import inversionesImg from '../../../assets/modulo01/iversionesmutant.png';

interface QuienesSomosProps {
    onBack: () => void;
    onNext: () => void;
}

/* ── Data ── */
const CARDS = [
    {
        icon: '🔬',
        title: 'Innovamos para tu bienestar',
        highlight: 'IMN Nutrition',
        body: 'es una compañía dedicada a la innovación, fabricación y distribución de productos nutricionales, suplementos alimenticios y premezclas saludables que promueven el bienestar integral. Nuestra misión es ofrecer alternativas confiables y de alta calidad que acompañen a las personas en el cuidado de su salud, el fortalecimiento de sus hábitos de vida y el logro de sus metas personales.',
        accent: '#3b9dd9',
    },
    {
        icon: '🏃‍♂️',
        title: 'Soluciones para un estilo de vida activo',
        highlight: 'Brindamos soluciones nutricionales',
        body: 'diseñadas para apoyar el rendimiento físico y mental, fomentar una alimentación balanceada y contribuir al desarrollo de una mejor calidad de vida. En un mundo donde los estilos de vida son cada vez más dinámicos y exigentes, estamos aquí para ti.',
        accent: '#6366f1',
    },
    {
        icon: '🤝',
        title: 'Confianza que transforma',
        highlight: 'Más que productos,',
        body: 'entregamos confianza, respaldo científico y compromiso con el bienestar de cada uno de nuestros clientes y colaboradores. Cada fórmula refleja nuestra dedicación a la excelencia y el cuidado genuino por las personas.',
        accent: '#10b981',
    },
];

export const QuienesSomos: React.FC<QuienesSomosProps> = ({ onBack, onNext }) => {
    const [flipped, setFlipped] = useState<Set<number>>(new Set());

    const toggleCard = (i: number) => {
        setFlipped(prev => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });
    };

    const allRevealed = flipped.size === CARDS.length;

    return (
        <div className="qs-container">
            <TopBar moduleTitle="Corporativo IMN" onClose={onBack} />

            {/* ── Hero section ── */}
            <section className="qs-hero">
                <div className="qs-hero-text">
                    <span className="qs-badge">¿Quiénes Somos?</span>
                    <h1 className="qs-headline">
                        Inversiones<br />
                        <span className="qs-headline-accent">Mutant Nutrition</span>
                    </h1>
                    <p className="qs-hero-sub">
                        Conoce nuestra esencia. Toca cada tarjeta para descubrir lo que nos define.
                    </p>
                </div>
                <div className="qs-hero-img-wrap">
                    <img src={inversionesImg} alt="Inversiones Mutant Nutrition" className="qs-hero-img" />
                    <div className="qs-hero-glow" />
                </div>
            </section>

            {/* ── Interactive flip cards ── */}
            <section className="qs-cards-section">
                <div className="qs-cards-grid">
                    {CARDS.map((card, i) => {
                        const isFlipped = flipped.has(i);
                        return (
                            <div
                                key={i}
                                className={`qs-card-perspective ${isFlipped ? 'flipped' : ''}`}
                                style={{ animationDelay: `${i * 0.15}s`, '--card-accent': card.accent } as React.CSSProperties}
                                onClick={() => toggleCard(i)}
                            >
                                <div className="qs-card-inner">
                                    {/* Front */}
                                    <div className="qs-card-front">
                                        <span className="qs-card-icon">{card.icon}</span>
                                        <h3 className="qs-card-title">{card.title}</h3>
                                        <span className="qs-card-hint">Toca para descubrir →</span>
                                    </div>
                                    {/* Back */}
                                    <div className="qs-card-back">
                                        <p className="qs-card-body">
                                            <strong>{card.highlight}</strong> {card.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Progress indicator */}
                <div className="qs-progress-row">
                    {CARDS.map((_, i) => (
                        <span key={i} className={`qs-progress-dot ${flipped.has(i) ? 'done' : ''}`} />
                    ))}
                    <span className="qs-progress-label">{flipped.size}/{CARDS.length} descubiertas</span>
                </div>
            </section>

            {/* ── Navigation ── */}
            <button className="qs-back-btn" onClick={onBack}>⬅ Regresar</button>
            {allRevealed && (
                <button className="qs-next-btn" onClick={onNext}>
                    Siguiente ➡
                </button>
            )}
        </div>
    );
};
