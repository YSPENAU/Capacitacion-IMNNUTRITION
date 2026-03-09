import React, { useState } from 'react';
import './ProduccionOrganigrama.css';
import { TopBar } from '../../components/TopBar';
import directorPhoto from '../../../assets/modulo03/joseluis.png';


interface ProduccionOrganigramaProps {
    onNext: () => void;
    onBack: () => void;
}

interface TeamMember {
    id: string;
    name: string;
    role: string;
    photo?: string;
    responsibilities?: string;
    count?: number;
}

export const ProduccionOrganigrama: React.FC<ProduccionOrganigramaProps> = ({ onNext, onBack }) => {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    const director: TeamMember = {
        id: 'director',
        name: 'José Luis Rodríguez',
        role: 'Dir. Producción y Calidad',
        photo: directorPhoto,
        responsibilities: 'Supervisa todo el proceso productivo, garantiza el cumplimiento de normas y estándares, coordina los equipos de producción y calidad, y toma decisiones de mejora del área de Producción, Calidad y Mantenimiento'
    };

    const teamMembers: TeamMember[] = [
        {
            id: 'jefe-produccion',
            name: '',
            role: 'Jefe de Producción',
            responsibilities: 'Planifica y organiza la producción diaria, distribuye tareas, verifica avances de fabricación y garantiza el cumplimiento de tiempos y estándares operativos.'
        },
        {
            id: 'jefe-calidad',
            name: 'Paola Chaves',
            role: 'Jefe De Calidad',
            responsibilities: 'Asegura el cumplimiento de normas de calidad, valida materias primas, controla procesos, ejecuta muestreos y libera o retiene lotes según los requisitos técnicos.'
        },
        {
            id: 'jefe-mantenimiento',
            name: 'Juan Bernardo',
            role: 'Jefe de Mantenimiento',
            responsibilities: 'Ejecuta y coordina el mantenimiento preventivo y correctivo de maquinaria y equipos, asegurando la continuidad y seguridad del proceso productivo.'
        },
        {
            id: 'operarios',
            name: '',
            role: 'Operari@s De Producción',
            count: 7,
            responsibilities: 'Operan maquinaria y realizan procesos técnicos y manuales en la línea de producción, apoyando el empaque, etiquetado, surtido y preparación del producto terminado según las instrucciones del área.'
        },
        {
            id: 'auxiliar-calidad',
            name: 'Tania Useche',
            role: 'Auxiliar De Calidad',
            responsibilities: 'Asegura el cumplimiento de normas de calidad, valida materias primas, controla procesos, ejecuta muestreos y libera o retiene lotes según los requisitos técnicos.'
        },
        {
            id: 'auxiliar-mantenimiento',
            name: 'Juan Campino',
            role: 'Auxiliar de Mantenimiento',
            responsibilities: 'Realiza labores de mantenimiento preventivo y correctivo, apoyando la revisión, reparación y correcto funcionamiento de equipos, instalaciones y maquinaria para garantizar la continuidad y seguridad de los procesos.'
        }
    ];

    return (
        <div className="produccion-organigrama-container">
            <TopBar moduleTitle="Producción y Calidad" onClose={onBack} />

            <div className="produccion-organigrama-content">
                {/* Subtitle */}
                <div className="organigrama-subtitle">
                    (Pasa el cursor sobre cada integrante y descubre su función dentro del área.)
                </div>

                {/* Description */}
                <div className="organigrama-description">
                    El equipo de Producción y Calidad garantiza una fabricación segura, ordenada y
                    confiable, asegurando que cada producto cumpla con los más altos estándares de
                    calidad e inocuidad de IMN Nutrition.
                </div>

                {/* Organizational Chart */}
                <div className="org-chart-container">
                    <h3 className="org-chart-title">Dir. de Producción y Calidad</h3>

                    {/* Director */}
                    <div className="director-section">
                        <div className="director-card">
                            <div className="director-photo-circle">
                                <img src={director.photo} alt={director.name} />
                            </div>
                            <div
                                className="director-info"
                                onMouseEnter={() => setHoveredMember('director')}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                {hoveredMember === 'director' ? (
                                    <div className="director-info-hover">
                                        <p>{director.responsibilities}</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="director-role">{director.role}</div>
                                        <div className="director-name">{director.name}</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="team-members-grid">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="team-member-card"
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                <div className="member-role">{member.role}</div>
                                {member.name && <div className="member-name">{member.name}</div>}
                                {member.count && <div className="member-count">({member.count})</div>}

                                {/* Hover Tooltip */}
                                {hoveredMember === member.id && member.responsibilities && (
                                    <div className="member-tooltip">
                                        {member.responsibilities}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <div className="organigrama-footer">
                    <button className="organigrama-next-btn" onClick={onNext}>
                        Siguiente →
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
