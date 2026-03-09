import React from 'react';
import './BeneficiosIMN.css';
import { TopBar } from '../../components/TopBar';

interface BeneficiosIMNProps {
    onBack: () => void;
    onNext: () => void;
}

const BENEFITS = [
    {
        id: 1,
        title: 'Descuentos exclusivos IMN',
        icon: '🎁',
        description: 'Aprovecha precios especiales en toda nuestra línea de productos y suplementos.'
    },
    {
        id: 2,
        title: 'Celebraciones corporativas',
        icon: '🎉',
        description: 'Participa en actividades y festividades durante todo el año, fortaleciendo el sentido de pertenencia y el trabajo en equipo.'
    },
    {
        id: 3,
        title: 'Capacitación constante',
        icon: '📚',
        description: 'Fortalece tus habilidades con entrenamientos, talleres y espacios de aprendizaje continuo para crecer profesionalmente.'
    },
    {
        id: 4,
        title: 'Buen ambiente laboral',
        icon: '👥',
        description: 'Disfruta de un entorno colaborativo, respetuoso y motivador, donde cada voz cuenta y el trabajo en equipo marca la diferencia.'
    },
    {
        id: 5,
        title: 'Crecimiento profesional',
        icon: '📈',
        description: 'Desarrolla tu carrera dentro de una empresa que impulsa el talento y promueve nuevas oportunidades.'
    },
    {
        id: 6,
        title: 'Bienestar integral',
        icon: '❤️',
        description: 'Programas enfocados en cuidar tu salud física y emocional, porque sabemos que un colaborador feliz es un colaborador productivo.'
    }
];

export const BeneficiosIMN: React.FC<BeneficiosIMNProps> = ({ onBack, onNext }) => {
    return (
        <div className="beneficios-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title Pill */}
            <div className="beneficios-title-pill">
                Beneficios de ser parte de IMN
            </div>

            {/* Intro Text */}
            <div className="beneficios-intro">
                <p>
                    En IMN valoramos el esfuerzo, el compromiso y el bienestar de nuestro equipo.
                    Por eso, ofrecemos beneficios que impulsan tu desarrollo personal y profesional,
                    creando un entorno donde crecer y sentirse bien es parte del día a día.
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="benefits-grid">
                {BENEFITS.map((benefit) => (
                    <div key={benefit.id} className="benefit-card">
                        <div className="benefit-icon">{benefit.icon}</div>
                        <h3 className="benefit-title">
                            {benefit.id}. {benefit.title}
                        </h3>
                        <p className="benefit-description">{benefit.description}</p>
                    </div>
                ))}
            </div>

            {/* Footer Message */}
            <div className="beneficios-footer-message">
                <p>
                    En IMN creemos que el éxito se construye con personas apasionadas, comprometidas y felices.
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="beneficios-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>



                <button className="beneficios-next-btn" onClick={onNext}>
                    Quiz ➡
                </button>
            </div>
        </div>
    );
};
