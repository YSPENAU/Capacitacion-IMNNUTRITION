import React, { useState } from 'react';
import './NuestraFilosofia.css';
import { TopBar } from '../../components/TopBar';
import logoIMN from '../../../assets/logos/logo_imn.svg';
import { FaCheckCircle, FaHeartbeat, FaLeaf } from 'react-icons/fa';

interface NuestraFilosofiaProps {
    onBack: () => void;
    onNext: () => void;
}

const CARDS = [
    {
        icon: <FaCheckCircle size={48} color="#3b9dd9" />,
        title: 'Compromiso con la calidad',
        body: 'En el corazón de nuestra compañía está el compromiso con la calidad, la sostenibilidad, la innovación y la satisfacción de nuestros clientes en la salud y el bienestar.',
        accent: '#3b9dd9',
        grad: 'linear-gradient(135deg, #e0f2fe 0%, #b6e0fe 100%)',
    },
    {
        icon: <FaHeartbeat size={48} color="#6366f1" />,
        title: 'Vida saludable y nutrición',
        body: 'Creemos en la importancia de promover un estilo de vida saludable y en el poder de la nutrición para mejorar la calidad de vida de las personas.',
        accent: '#6366f1',
        grad: 'linear-gradient(135deg, #ede9fe 0%, #c7d2fe 100%)',
    },
    {
        icon: <FaLeaf size={48} color="#10b981" />,
        title: 'Impacto positivo',
        body: 'Nos comprometemos a trabajar en conjunto con nuestros colaboradores, comunidades locales y organizaciones nacionales para hacer una diferencia positiva.',
        accent: '#10b981',
        grad: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
    },
];

export const NuestraFilosofia: React.FC<NuestraFilosofiaProps> = ({ onBack, onNext }) => {
    const [unlocked, setUnlocked] = useState([false, false, false]);
    const allUnlocked = unlocked.every(Boolean);

    const handleUnlock = (i: number) => {
        if (!unlocked[i]) {
            setUnlocked(prev => prev.map((v, idx) => idx === i ? true : v));
        }
    };

    return (
        <div className="nf-container">
            <TopBar moduleTitle="Corporativo IMN" onClose={onBack} />
            <div className="nf-title-pill">Nuestra Filosofía</div>
            <img src={logoIMN} alt="IMN Logo" className="nf-watermark" />
            <div className="nf-cards-row">
                {CARDS.map((card, i) => (
                    <div
                        key={i}
                        className={`nf-card${unlocked[i] ? ' unlocked' : ''}`}
                        style={{
                            background: card.grad,
                            borderColor: card.accent,
                            boxShadow: unlocked[i] ? `0 8px 32px 0 ${card.accent}22` : undefined,
                            animationDelay: `${i * 0.18}s`,
                        }}
                    >
                        <div
                            className="nf-card-svg"
                            style={{ opacity: unlocked[i] ? 0.3 : 1, cursor: unlocked[i] ? 'default' : 'pointer' }}
                            onClick={() => handleUnlock(i)}
                        >
                            {card.icon}
                        </div>
                        <h3 className="nf-card-title" style={{ color: card.accent }}>{card.title}</h3>
                        <p className="nf-card-body">{card.body}</p>
                        {!unlocked[i] && <div className="nf-card-hint">Haz click en el ícono para desbloquear</div>}
                        {unlocked[i] && <div className="nf-card-hint nf-card-hint-ok">¡Desbloqueado!</div>}
                    </div>
                ))}
            </div>
            <button className="nf-next-btn" onClick={allUnlocked ? onNext : undefined} disabled={!allUnlocked}>
                Continuar ➡
            </button>
        </div>
    );
};
