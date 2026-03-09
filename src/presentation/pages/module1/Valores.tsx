import React, { useState } from 'react';
import './Valores.css';
import { TopBar } from '../../components/TopBar';
import { FaUserFriends, FaHandshake, FaBrain, FaMedal, FaLightbulb } from 'react-icons/fa';

interface ValoresProps {
    onBack: () => void;
    onNext: () => void;
}

const VALUES_DATA = [
    {
        title: 'Integridad',
        icon: <FaBrain size={40} color="#2FBCEB" className="valor-icon-anim" />,
        text: 'Actuamos con transparencia, ética, honorabilidad y coherencia en cada decisión, honrando nuestra palabra y construyendo relaciones de confianza con colaboradores, aliados y consumidores.'
    },
    {
        title: 'Innovación',
        icon: <FaLightbulb size={40} color="#25aae0" className="valor-icon-anim" />,
        text: 'Buscamos constantemente nuevas formas de mejorar la vida de nuestros consumidores, respaldadas por evidencias científica desarrollada con el mejor conocimiento técnico.'
    },
    {
        title: 'Calidad',
        icon: <FaMedal size={40} color="#226b8e" className="valor-icon-anim" />,
        text: 'Garantizamos productos seguros, eficientes y formulados con los más altos estándares.'
    },
    {
        title: 'Responsabilidad social',
        icon: <FaHandshake size={40} color="#10b981" className="valor-icon-anim" />,
        text: 'Promovemos la salud integral, protegemos el medio ambiente, apoyamos el talento colombiano e impulsamos la industria nacional, llevando con orgullo el nombre de la empresa.'
    },
    {
        title: 'Orientación al Cliente',
        icon: <FaUserFriends size={40} color="#6366f1" className="valor-icon-anim" />,
        text: 'Actuamos con transparencia, ética, honorabilidad y coherencia en cada decisión, honrando nuestra palabra y construyendo relaciones de confianza con colaboradores, aliados y consumidores.'
    }
];

export const Valores: React.FC<ValoresProps> = ({ onBack, onNext }) => {
    const [activeIndex, setActiveIndex] = useState<number|null>(null);
    return (
        <div className="valores-container">
            <TopBar moduleTitle="Corporativo IMN" />
            <div className="valores-title-pill">Valores Corporativos</div>
            <div className="valores-content-wrapper">
                <div className="valores-grid">
                    <div className="valores-row top-row">
                        {VALUES_DATA.slice(0, 3).map((val, index) => (
                            <div
                                key={index}
                                className={`valor-card${activeIndex === index ? ' active' : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="valor-icon">{val.icon}</div>
                                <h3 className="valor-title">{val.title}</h3>
                                <p className="valor-text">{val.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="valores-row bottom-row">
                        {VALUES_DATA.slice(3, 5).map((val, index) => (
                            <div
                                key={index + 3}
                                className={`valor-card${activeIndex === index + 3 ? ' active' : ''}`}
                                onMouseEnter={() => setActiveIndex(index + 3)}
                                onMouseLeave={() => setActiveIndex(null)}
                                onClick={() => setActiveIndex(index + 3)}
                            >
                                <div className="valor-icon">{val.icon}</div>
                                <h3 className="valor-title">{val.title}</h3>
                                <p className="valor-text">{val.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="valores-footer">
                <button className="fab-btn" onClick={onBack}>⬅</button>
                <div className="chat-fab-placeholder">💬</div>
                <button className="valores-next-btn" onClick={onNext}>Siguiente ➡</button>
            </div>
        </div>
    );
};
