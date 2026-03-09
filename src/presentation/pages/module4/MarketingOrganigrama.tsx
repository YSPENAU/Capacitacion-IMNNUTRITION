import React, { useState } from 'react';
import './MarketingOrganigrama.css';
import { TopBar } from '../../components/TopBar';

// Photos
import directorPhoto from '../../../assets/modulo4/mauricioDiaz.png';
import coordinadorPhoto from '../../../assets/modulo4/camiloMartinez.png';
// Using marketing logo as placeholder for others
import marketingIcon from '../../../assets/modulo03/logo_marketing.png';

interface MarketingOrganigramaProps {
    onNext: () => void;
    onBack: () => void;
}

interface OrgMember {
    id: string;
    name?: string;
    role: string;
    responsibilities: string;
    photo?: string;
    isicon?: boolean;
}

export const MarketingOrganigrama: React.FC<MarketingOrganigramaProps> = ({ onNext, onBack }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    const members: OrgMember[] = [
        {
            id: 'director',
            name: 'Mauricio Diaz',
            role: 'Dir. de Marketing y comunicación',
            photo: directorPhoto,
            responsibilities: 'Dirige la estrategia total del área, asegura que la marca hable siempre con la misma voz, aprueba la estrategia de medios, fija presupuestos y garantiza que cada campaña impulse la empresa'
        },
        {
            id: 'coordinador',
            name: 'Camilo Martinez',
            role: 'Coordinador de Marketing',
            photo: coordinadorPhoto,
            responsibilities: 'Dirige la estrategia global del área, asegurando la coherencia de la marca, la planificación de campañas y la coordinación entre los diferentes equipos y áreas de la empresa.'
        },
        {
            id: 'disenador',
            name: 'Jonathan Robayo',
            role: 'Diseñador Gráfico',
            photo: marketingIcon,
            isicon: true,
            responsibilities: 'Desarrolla piezas visuales alineadas con la identidad de IMN Nutrition, apoyando campañas, materiales comerciales y comunicación interna.'
        },
        {
            id: 'community',
            name: 'Juliana Vargas',
            role: 'Community Manager',
            photo: marketingIcon,
            isicon: true,
            responsibilities: 'Gestiona las redes sociales de la marca, crea contenido digital y mantiene la interacción con la comunidad, fortaleciendo la presencia online de IMN.'
        },
        {
            id: 'realizadora',
            name: 'Sandra Martin',
            role: 'Realizadora Audiovisual',
            photo: marketingIcon,
            isicon: true,
            responsibilities: 'Produce y edita contenido audiovisual —videos, fotografías y material promocional— para reforzar la comunicación visual de la marca.'
        },
        {
            id: 'productora',
            name: 'Angélica Jaramillo',
            role: 'Productora Multimedia',
            photo: marketingIcon,
            isicon: true,
            responsibilities: 'Coordina la producción de materiales multimedia y apoya la ejecución de campañas visuales y digitales, asegurando la calidad de las entregas.'
        },
        {
            id: 'apoyo',
            name: 'Brian Martínez',
            role: 'Apoyo Audiovisual',
            photo: marketingIcon,
            isicon: true,
            responsibilities: 'Gestiona campañas pagas y pauta digital, analiza resultados y optimiza el rendimiento de la inversión publicitaria.'
        },
        {
            id: 'asesora',
            name: 'Deisy Forero',
            role: 'Asesora de servicio al cliente',
            photo: marketingIcon,
            isicon: true,
            responsibilities: 'Atiende consultas, recopila retroalimentación de los usuarios y canaliza la información al área para mejorar la experiencia del cliente.'
        }
    ];

    const renderCard = (member: OrgMember, isTopLevel: boolean = false) => (
        <div
            className={`marketing-org-card ${isTopLevel ? 'top-card' : ''}`}
            // Using internal overlay approach
            onMouseEnter={() => setHoveredMember(member.id)} // For tracking if needed, but CSS handles hover primarily
        >
            {/* Standard Content */}
            <div className="org-card-content">
                {isTopLevel ? (
                    <div className="card-photo-container">
                        <img src={member.photo} alt={member.role} className="card-photo" />
                    </div>
                ) : (
                    member.isicon && (
                        <div className="card-icon-small">
                            <img src={member.photo} alt="icon" />
                        </div>
                    )
                )}
                <div className="org-card-role">{member.role}</div>
                {member.name && <div className="org-card-name">{member.name}</div>}
            </div>

            {/* Overlay for Description */}
            <div className="org-card-overlay">
                <p>{member.responsibilities}</p>
            </div>
        </div>
    );

    return (
        <div className="marketing-organigrama-container">
            <TopBar moduleTitle="Marketing y Comunicación" onClose={onBack} />

            <div className="marketing-organigrama-content">
                <div className="organigrama-header">
                    <h2 className="organigrama-main-title">Marketing</h2>
                    <div className="organigrama-subtitle">
                        (Pasa el cursor sobre cada integrante y descubre su función dentro del área.)
                    </div>
                </div>

                <div className="organigrama-description">
                    El equipo de Marketing y Comunicación fortalece la identidad institucional de IMN Nutrition,
                    desarrollando estrategias creativas, contenidos y campañas que posicionan la marca, impulsan el
                    crecimiento y refuerzan la conexión con nuestros públicos internos y externos.
                </div>

                <div className="marketing-chart-wrapper">
                    <div className="chart-header-label">Dir. de Marketing</div>

                    {/* Level 1: Director & Coordinator */}
                    <div className="chart-level level-top">
                        <div className="top-member-wrapper">
                            {renderCard(members[0], true)}
                        </div>
                        <div className="top-member-wrapper">
                            {renderCard(members[1], true)}
                        </div>
                    </div>

                    {/* Connectors */}
                    <div className="hierarchy-connector-complex">
                        {/* Bridge connecting top two */}
                        <div className="connector-bridge"></div>
                        {/* Vertical line down */}
                        <div className="connector-vertical-main"></div>
                        {/* Horizontal spine for bottom row */}
                        <div className="connector-horizontal-bottom"></div>
                        {/* Branches to each child */}
                        <div className="connector-vertical-branches">
                            {/* 6 branches for 6 members */}
                            <div className="branch branch-1"></div>
                            <div className="branch branch-2"></div>
                            <div className="branch branch-3"></div>
                            <div className="branch branch-4"></div>
                            <div className="branch branch-5"></div>
                            <div className="branch branch-6"></div>
                        </div>
                    </div>

                    {/* Level 2: Team Members (6 cards) */}
                    <div className="chart-level level-bottom">
                        {members.slice(2).map((member) => (
                            <div key={member.id} className="bottom-member-wrapper">
                                {renderCard(member)}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="marketing-organigrama-footer">
                    <button className="organigrama-next-btn" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
