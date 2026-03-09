import React, { useState } from 'react';
import './ObjetivosEstrategicos.css';
import { TopBar } from '../../components/TopBar';

interface ObjetivosEstrategicosProps {
    onBack: () => void;
    onNext: () => void;
}

const OBJECTIVES = [
    {
        id: 1,
        icon: '📦',
        title: 'Calidad y servicio al cliente',
        content: 'Mejorar la calidad del servicio al cliente y postventa.'
    },
    {
        id: 2,
        icon: '💰',
        title: 'Rentabilidad sostenida',
        content: 'Incrementar en 16% la rentabilidad del modelo de producción anualmente.'
    },
    {
        id: 3,
        icon: '💡',
        title: 'Nuevas líneas de producto',
        content: 'Ampliar anualmente las líneas de producto en cualquiera de las marcas que maneja la compañía.'
    },
    {
        id: 4,
        icon: '👥',
        title: 'Fortalecer un ambiente laboral positivo e innovador',
        content: 'Promover la colaboración y el compromiso para impulsar el desempeño y la creatividad del equipo.'
    },
    {
        id: 5,
        icon: '🏷️',
        title: 'Fortalecer nuestras marcas',
        content: 'Aumentar y posicionar cada marca en su segmento.'
    }
];

export const ObjetivosEstrategicos: React.FC<ObjetivosEstrategicosProps> = ({ onBack, onNext }) => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set([1])); // First one open by default
    const [viewedItems, setViewedItems] = useState<Set<number>>(new Set([1])); // Track which have been opened

    const toggleItem = (id: number) => {
        const newOpenItems = new Set(openItems);
        const newViewedItems = new Set(viewedItems);

        if (openItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
            newViewedItems.add(id); // Mark as viewed when opened
        }

        setOpenItems(newOpenItems);
        setViewedItems(newViewedItems);
    };

    const allViewed = viewedItems.size === OBJECTIVES.length;

    return (
        <div className="objetivos-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title Pill */}
            <div className="objetivos-title-pill">
                Nuestros Objetivos Estratégicos
            </div>

            {/* Accordion */}
            <div className="accordion-wrapper">
                {OBJECTIVES.map((objective) => (
                    <div
                        key={objective.id}
                        className={`accordion-item ${openItems.has(objective.id) ? 'open' : ''}`}
                    >
                        <button
                            className="accordion-header"
                            onClick={() => toggleItem(objective.id)}
                        >
                            <span className="accordion-icon">{objective.icon}</span>
                            <span className="accordion-title">{objective.title}</span>
                            <span className="accordion-arrow">
                                {openItems.has(objective.id) ? '▲' : '▼'}
                            </span>
                        </button>
                        {openItems.has(objective.id) && (
                            <div className="accordion-content">
                                {objective.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer Navigation */}
            <div className="objetivos-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>



                <button
                    className={`objetivos-next-btn ${allViewed ? 'enabled' : 'disabled'}`}
                    onClick={allViewed ? onNext : undefined}
                    disabled={!allViewed}
                >
                    Siguiente ➡
                </button>
            </div>
        </div>
    );
};
