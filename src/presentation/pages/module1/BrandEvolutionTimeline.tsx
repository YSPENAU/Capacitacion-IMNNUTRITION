import React, { useState, useEffect } from 'react';
import './BrandEvolutionTimeline.css';
import { TopBar } from '../../components/TopBar';

/* ── Assets ── */
import xtrongLogo from '../../../assets/logos/logoXtronglab.svg';
import xtrongLogoOld from '../../../assets/logos/logo-antiguo.extronglab.svg';

import img01 from '../../../assets/modulo01/lineanegra01.png';
import img02 from '../../../assets/modulo01/lineanegra02.png';
import img03 from '../../../assets/modulo01/lineanegra03.png';
import img04 from '../../../assets/modulo01/lineanegra04.png';
import img05 from '../../../assets/modulo01/lineanegra05.png';
import img06 from '../../../assets/modulo01/lineanegra06.png';

import bcaaPurple from '../../../assets/modulo01/BCAS GULUPA 01 1.png';
import bcaaRed from '../../../assets/modulo01/BCAS FRESA 01 1.png';
import pancakes from '../../../assets/modulo01/PANCAKES B_ 1.png';
import bebida from '../../../assets/modulo01/ACHOCOLATADA B_ 1.png';

interface BrandEvolutionTimelineProps {
    onBack: () => void;
    onComplete: () => void;
}

/* ── Data for each era ── */
interface Era {
    id: number;
    period: string;
    title: string;
    subtitle: string;
    description: string;
    logo: string | null;
    logoLabel: string;
    accent: string;
    products: { src: string; name: string }[];
}

const ERAS: Era[] = [
    {
        id: 0,
        period: '2020 – 2021',
        title: 'La Línea Negra',
        subtitle: 'Los primeros pasos',
        description:
            'IMN comenzó con la "Línea Negra" de XTRONG LAB: suplementos deportivos con imagen fuerte y audaz. Productos como el Mass Gainer, Pre-Workout, Yohimbe y Gold Whey fueron los pioneros que pusieron a IMN en el mapa del mercado fitness colombiano.',
        logo: xtrongLogoOld,
        logoLabel: 'XTRONG LAB (Línea Negra)',
        accent: '#1a1a2e',
        products: [
            { src: img01, name: 'Mass Gainer' },
            { src: img02, name: 'Pre-Workout' },
            { src: img03, name: 'Yohimbe' },
            { src: img04, name: 'Gold Whey' },
        ],
    },
    {
        id: 1,
        period: '2021 – 2022',
        title: 'Transición Visual',
        subtitle: 'Evolucionando la identidad',
        description:
            'La marca evolucionó hacia una imagen más limpia y profesional. Nuevos suplementos con presentación renovada marcaron la transición de la línea negra a la línea blanca, reflejando pureza, confianza y cercanía con un público más amplio.',
        logo: xtrongLogo,
        logoLabel: 'XTRONG LAB® (Nueva imagen)',
        accent: '#3b9dd9',
        products: [
            { src: img05, name: 'Vitamina C' },
            { src: img06, name: 'Multi MN' },
        ],
    },
    {
        id: 2,
        period: '2022 – 2024',
        title: 'La Línea Blanca',
        subtitle: 'Pureza, calidad y confianza',
        description:
            'La consolidación total: la "Línea Blanca" representa la madurez de la marca. Productos como BCAA\'s, Pancakes Proteicos y bebidas funcionales reflejan una marca moderna, accesible, pensada para deportistas y familias que eligen cuidar su salud día a día.',
        logo: xtrongLogo,
        logoLabel: 'XTRONG LAB® (Línea Blanca)',
        accent: '#32cd32',
        products: [
            { src: bcaaPurple, name: "BCAA's Gulupa" },
            { src: bcaaRed, name: "BCAA's Fresa" },
            { src: pancakes, name: 'Pancakes Proteicos' },
            { src: bebida, name: 'Achocolatada' },
        ],
    },
];

export const BrandEvolutionTimeline: React.FC<BrandEvolutionTimelineProps> = ({ onBack, onComplete }) => {
    const [activeEra, setActiveEra] = useState(0);
    const [visitedEras, setVisitedEras] = useState<Set<number>>(new Set([0]));
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const allVisited = ERAS.every((_, i) => visitedEras.has(i));

    const goTo = (index: number) => {
        if (index === activeEra || index < 0 || index >= ERAS.length || animating) return;
        setDirection(index > activeEra ? 'right' : 'left');
        setAnimating(true);
        setTimeout(() => {
            setActiveEra(index);
            setVisitedEras(prev => new Set(prev).add(index));
            setAnimating(false);
        }, 300);
    };

    /* Keyboard navigation */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goTo(activeEra + 1);
            if (e.key === 'ArrowLeft') goTo(activeEra - 1);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [activeEra, animating]);

    const era = ERAS[activeEra];

    return (
        <div className="be-container">
            <TopBar moduleTitle="Corporativo IMN" onClose={onBack} />

            <div className="be-title-pill">Evolución de la Marca</div>

            {/* ── Era selector (3 tabs) ── */}
            <div className="be-tabs">
                {ERAS.map((e, i) => (
                    <button
                        key={i}
                        className={[
                            'be-tab',
                            i === activeEra ? 'active' : '',
                            visitedEras.has(i) ? 'visited' : '',
                        ].filter(Boolean).join(' ')}
                        style={{ '--tab-accent': e.accent } as React.CSSProperties}
                        onClick={() => goTo(i)}
                    >
                        <span className="be-tab-period">{e.period}</span>
                        <span className="be-tab-title">{e.title}</span>
                    </button>
                ))}
            </div>

            {/* ── Progress bar ── */}
            <div className="be-progress-track">
                <div
                    className="be-progress-fill"
                    style={{ width: `${((activeEra + 1) / ERAS.length) * 100}%`, background: era.accent }}
                />
            </div>

            {/* ── Content area ── */}
            <div className="be-content-area">
                <div
                    className={`be-slide ${animating ? `be-exit-${direction}` : 'be-enter'}`}
                    key={activeEra}
                >
                    {/* Left: text panel */}
                    <div className="be-text-panel">
                        <span className="be-period-badge" style={{ background: era.accent }}>
                            {era.period}
                        </span>
                        <h2 className="be-era-title">{era.title}</h2>
                        <p className="be-era-subtitle">{era.subtitle}</p>
                        <p className="be-era-desc">{era.description}</p>

                        {era.logo && (
                            <div className="be-logo-box">
                                <img src={era.logo} alt={era.logoLabel} className="be-logo-img" />
                                <span className="be-logo-label">{era.logoLabel}</span>
                            </div>
                        )}
                    </div>

                    {/* Right: products grid */}
                    <div className="be-products-panel">
                        {era.products.map((prod, pi) => (
                            <div
                                key={pi}
                                className="be-product-card"
                                style={{ animationDelay: `${pi * 0.1}s` }}
                            >
                                <img src={prod.src} alt={prod.name} />
                                <span className="be-product-name">{prod.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Navigation arrows ── */}
            <div className="be-nav">
                <button
                    className="be-nav-btn"
                    onClick={() => goTo(activeEra - 1)}
                    disabled={activeEra === 0}
                >
                    ← Anterior
                </button>

                <div className="be-dots">
                    {ERAS.map((_, i) => (
                        <span
                            key={i}
                            className={`be-dot ${i === activeEra ? 'active' : ''} ${visitedEras.has(i) ? 'visited' : ''}`}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>

                <button
                    className="be-nav-btn"
                    onClick={() => goTo(activeEra + 1)}
                    disabled={activeEra === ERAS.length - 1}
                >
                    Siguiente →
                </button>
            </div>

            {/* ── Footer message ── */}
            <div className="be-footer">
                <p>De la <strong>línea negra</strong> a la <strong>línea blanca</strong>: una transformación que representa <em>pureza, calidad y confianza</em>.</p>
            </div>

            {/* ── Finish button (visible when all eras visited) ── */}
            {allVisited && (
                <button className="be-finish-btn" onClick={onComplete}>
                    Continuar ➡
                </button>
            )}

            {/* ── Back button (always visible) ── */}
            <button className="be-back-btn" onClick={onBack}>
                ⬅ Regresar
            </button>
        </div>
    );
};
