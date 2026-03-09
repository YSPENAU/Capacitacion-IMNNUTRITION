import React, { useState, useRef, useEffect } from 'react';
import './KeyMomentsTimeline.css';
import { TopBar } from '../../components/TopBar';

interface KeyMomentsTimelineProps {
    onComplete: () => void;
    onBack: () => void;
}

const TIMELINE_DATA = [
    {
        year: '2020',
        title: 'Fundada en Ibagué',
        desc: 'IMN nació en Ibagué el 20 de enero de 2020, en un contexto global desafiante. Sus fundadores, Cristian y Angie, iniciaron este proyecto desde el barrio Santa Rita, adaptando su espacio para la producción y almacenamiento, con una visión clara: crear productos de nutrición confiables que aportaran al bienestar y la calidad de vida de las personas. Sus primeros desarrollos fueron multivitamínicos, elaborados con dedicación y altos estándares de calidad. Desde el inicio, un equipo de cinco personas compartió la misma pasión y propósito, sentando las bases de lo que hoy es IMN.',
        icon: '🏠'
    },
    {
        year: '2021',
        title: 'XTRONG LAB',
        desc: 'Ese mismo año nació XTRONG LAB, la primera marca de IMN, creada para ofrecer suplementos nutricionales accesibles, confiables y de calidad, acompañando a personas y familias en su camino hacia una mejor alimentación y bienestar. Desde sus inicios, la marca apostó por una comunicación más cercana, conectando con personas reales y resaltando historias de esfuerzo y superación. Este lanzamiento marcó un hito para IMN, reafirmando su compromiso con una nutrición inclusiva y alineada con las necesidades reales.',
        icon: '🙌'
    },
    {
        year: '2021-2022',
        title: 'Evolución de imagen',
        desc: 'IMN evolucionó su identidad visual: de la línea negra a la línea blanca. Este cambio no fue solo estético: fue una declaración de intenciones. La nueva imagen refleja pureza, confianza y cercanía, valores que nos definen. Con ella, ampliamos nuestro alcance: desde deportistas de alto rendimiento hasta familias que eligen cuidar su salud día a día. Fue un paso clave para consolidar nuestra identidad como una marca humana, accesible y comprometida con el bienestar de todos.',
        icon: '🏷️'
    },
    {
        year: '2022',
        title: 'Expansión de la planta',
        desc: 'El crecimiento trajo un nuevo capítulo: nos trasladamos a la planta de producción en Mirolindo, Ibagué. Allí construimos una infraestructura más robusta, con áreas comerciales, logísticas y administrativas que potenciaron cada proceso. Este paso marcó el inicio de una nueva etapa: de un emprendimiento con alma familiar a una empresa con proyección nacional. Cada metro nuevo se convirtió en espacio para seguir nutriendo vidas con la misma calidad de siempre, pero ahora con mayor alcance.',
        icon: '🏭'
    },
    {
        year: '2023',
        title: 'Consolidación empresarial',
        desc: 'Con la expansión, IMN dio un paso decisivo: organizó su estructura interna y nacieron los departamentos de talento humano, financiero y marketing. Cada área se convirtió en un pilar que fortaleció la gestión y abrió nuevas oportunidades de crecimiento. Ese mismo año llegó un reto que nos entusiasmó: crear una línea de suplementos dietarios para diversificar la oferta y competir con marcas más grandes. Dimos forma a esa ambición con la misma calidad que nos caracteriza, listos para llegar aún más lejos.',
        icon: '👩‍💼'
    },
    {
        year: '2024',
        title: 'Nuevas divisiones',
        desc: 'IMN dio pasos estratégicos hacia el futuro: IMN LAB nació para especializarse en suplementos encapsulados, desarrollados junto con un equipo especializado e interdisciplinario y bajo procesos certificados por INVIMA. Y para que cada producto llegara más lejos, creamos BYF Transportadora, nuestra división logística con flota propia que hoy distribuye a nivel nacional. Dos nuevos motores que nos permiten seguir creciendo sin perder calidad ni cercanía.',
        icon: '🚚'
    },
    {
        year: '2025',
        title: 'Proyección internacional',
        desc: 'IMN se prepara para su mayor reto: expandirse a Ecuador y consolidarse como líder en Colombia. Con innovación, sostenibilidad y calidad como banderas, vamos a inspirar a miles de personas a vivir más saludable. Porque IMN no nació por casualidad: nació de constancia, pasión y el sueño de impactar vidas. Y ese sueño, hoy más vivo que nunca, sigue creciendo con cada producto que llega a una mesa, con cada cliente que nos elige y con cada equipo que se suma a seguir escribiendo esta historia.',
        icon: '🌎'
    }
];

const CARD_COLORS = ['#DBCDE0', '#C9D9EA', '#DDF3F5', '#D0EBE8', '#E6DDD0', '#CEEBE0', '#DAE6CA'];

export const KeyMomentsTimeline: React.FC<KeyMomentsTimelineProps> = ({ onComplete, onBack }) => {
    const [unlockedIndex, setUnlockedIndex] = useState(0);
    const [visitedIndices, setVisitedIndices] = useState<Set<number>>(new Set());
    const [activeDetail, setActiveDetail] = useState<number | null>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const progressPercent = (unlockedIndex / (TIMELINE_DATA.length - 1)) * 100;
    const isFinished = unlockedIndex === TIMELINE_DATA.length - 1
        && visitedIndices.has(TIMELINE_DATA.length - 1);

    /* ── Progress bar animation ── */
    useEffect(() => {
        if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progressPercent}%`;
        }
    }, [progressPercent]);

    /* ── Escape to close modal ── */
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveDetail(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    /* ── Click a card or node ── */
    const handleCardClick = (index: number) => {
        if (index > unlockedIndex) return;

        // Mark visited & show detail
        setVisitedIndices(prev => new Set(prev).add(index));
        setActiveDetail(index);

        // Unlock next card
        if (index === unlockedIndex && index < TIMELINE_DATA.length - 1) {
            setUnlockedIndex(prev => prev + 1);
        }
    };

    /* ── Navigate within the modal ── */
    const navigateDetail = (dir: number) => {
        if (activeDetail === null) return;
        const next = activeDetail + dir;
        if (next < 0 || next > unlockedIndex || next >= TIMELINE_DATA.length) return;

        setVisitedIndices(prev => new Set(prev).add(next));
        if (next === unlockedIndex && next < TIMELINE_DATA.length - 1) {
            setUnlockedIndex(prev => prev + 1);
        }
        setActiveDetail(next);
    };

    return (
        <div className="km-container">
            <TopBar moduleTitle="Corporativo IMN" onClose={onBack} />

            <div className="km-title-pill">
                De un Sueño a una Realidad: La Historia de IMN
            </div>

            {/* ── Timeline visual ── */}
            <div className="km-timeline-area">
                <div className="km-timeline-track">
                    {/* Horizontal axis */}
                    <div className="km-axis">
                        <div ref={progressBarRef} className="km-axis-fill" />
                    </div>

                    <div className="km-grid">
                        {TIMELINE_DATA.map((event, i) => {
                            const isTop = i % 2 === 0;
                            const isUnlocked = i <= unlockedIndex;
                            const isVisited = visitedIndices.has(i);
                            const isCurrent = i === unlockedIndex && !isFinished;

                            return (
                                <React.Fragment key={i}>
                                    {/* Card */}
                                    <div
                                        className={[
                                            'km-card',
                                            `km-c${i}`,
                                            isTop ? 'km-top' : 'km-bottom',
                                            isUnlocked ? 'km-unlocked' : 'km-locked',
                                            isVisited ? 'km-visited' : '',
                                            isCurrent ? 'km-current' : '',
                                        ].filter(Boolean).join(' ')}
                                        style={{
                                            gridRow: isTop ? 1 : 3,
                                            gridColumn: i + 1,
                                        }}
                                        onClick={() => handleCardClick(i)}
                                    >
                                        <span className="km-card-icon">{event.icon}</span>
                                        <span className="km-card-year">{event.year}</span>
                                        <span className="km-card-title">{event.title}</span>
                                        {isVisited && <span className="km-card-check">✓</span>}
                                        {isCurrent && <span className="km-card-hint">Toca aquí</span>}
                                    </div>

                                    {/* Node on the axis */}
                                    <div
                                        className="km-node-cell"
                                        style={{ gridRow: 2, gridColumn: i + 1 }}
                                        onClick={() => handleCardClick(i)}
                                    >
                                        <div className={[
                                            'km-node',
                                            isUnlocked ? 'km-unlocked' : '',
                                            isCurrent ? 'km-current' : '',
                                        ].filter(Boolean).join(' ')} />
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Detail Modal ── */}
            {activeDetail !== null && (
                <div className="km-overlay" onClick={() => setActiveDetail(null)}>
                    <div
                        className="km-detail"
                        style={{ borderTopColor: CARD_COLORS[activeDetail] }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="km-detail-close" onClick={() => setActiveDetail(null)}>
                            ✕
                        </button>

                        <div className="km-detail-header">
                            <span className="km-detail-icon">{TIMELINE_DATA[activeDetail].icon}</span>
                            <span className="km-detail-year">{TIMELINE_DATA[activeDetail].year}</span>
                        </div>

                        <h2 className="km-detail-title">{TIMELINE_DATA[activeDetail].title}</h2>
                        <p className="km-detail-desc">{TIMELINE_DATA[activeDetail].desc}</p>

                        {/* Navigation */}
                        <div className="km-detail-nav">
                            {activeDetail > 0 && (
                                <button className="km-nav-btn" onClick={() => navigateDetail(-1)}>
                                    ← Anterior
                                </button>
                            )}
                            <button className="km-ok-btn" onClick={() => setActiveDetail(null)}>
                                Entendido ✓
                            </button>
                            {activeDetail < unlockedIndex && (
                                <button className="km-nav-btn" onClick={() => navigateDetail(1)}>
                                    Siguiente →
                                </button>
                            )}
                        </div>

                        {/* Step indicator */}
                        <div className="km-detail-steps">
                            {TIMELINE_DATA.map((_, i) => (
                                <span
                                    key={i}
                                    className={[
                                        'km-step-dot',
                                        i === activeDetail ? 'active' : '',
                                        visitedIndices.has(i) ? 'visited' : '',
                                        i <= unlockedIndex ? '' : 'locked',
                                    ].filter(Boolean).join(' ')}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Finish button ── */}
            {isFinished && (
                <button className="km-finish-btn" onClick={onComplete}>
                    Continuar ➡
                </button>
            )}
        </div>
    );
};
