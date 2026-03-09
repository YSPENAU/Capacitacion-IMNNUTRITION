import React, { useState } from 'react';
import './ComercialOrganigrama.css';
import { TopBar } from '../../components/TopBar';
import directorPhoto from '../../../assets/modulo03/dir_comercial.png';

interface ComercialOrganigramaProps {
    onNext: () => void;
    onBack: () => void;
}

interface OrgMember {
    id: string;
    name: string;
    role: string;
    responsibilities: string;
    photo?: string;
}

export const ComercialOrganigrama: React.FC<ComercialOrganigramaProps> = ({ onNext, onBack }) => {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    const director: OrgMember = {
        id: 'director',
        name: 'Jorge Carranza',
        role: 'Dir. Nacional de Ventas',
        photo: directorPhoto,
        responsibilities: 'Supervisa la operación comercial a nivel nacional, define estrategias de venta, establece metas y lidera al equipo para asegurar el cumplimiento de los objetivos de crecimiento y rentabilidad.'
    };

    const members: Record<string, OrgMember> = {
        senior1: {
            id: 'senior1',
            name: 'Mauricio Rincón',
            role: 'Representante de Ventas Senior',
            responsibilities: 'Gestiona las operaciones de venta regional, apoya la ejecución de estrategias comerciales y realiza seguimiento al desempeño del equipo asignado.'
        },
        senior2: {
            id: 'senior2',
            name: 'Edwin Caina',
            role: 'Representante de Ventas Senior',
            responsibilities: 'Coordina actividades comerciales, impulsa el cumplimiento de metas en su zona y acompaña a los representantes en campo para fortalecer relaciones con los clientes.'
        },
        junior1: {
            id: 'junior1',
            name: 'Jhoan Sáenz',
            role: 'Representante de Ventas Junior',
            responsibilities: 'Atiende clientes asignados, ejecuta estrategias de venta directa y contribuye al cumplimiento de los objetivos de su zona.'
        },
        junior2: {
            id: 'junior2',
            name: 'José Bohórquez',
            role: 'Representante de Ventas Junior',
            responsibilities: 'Realiza seguimiento a pedidos y pagos, asegura la satisfacción del cliente y promueve el cumplimiento de metas comerciales.'
        },
        junior3: {
            id: 'junior3',
            name: 'Alejandro Benavides',
            role: 'Representante de Ventas Junior',
            responsibilities: 'Apoya la gestión comercial, realiza visitas a clientes, presenta el portafolio, toma pedidos y fortalece la relación con los clientes bajo la supervisión del equipo de ventas.'
        },
        ejecutivo: {
            id: 'ejecutivo',
            name: 'Miguel Martínez',
            role: 'Ejecutivo de Ventas',
            responsibilities: 'Gestiona y desarrolla relaciones comerciales, promueve el portafolio de productos, cumple metas de ventas y brinda asesoría a clientes para fortalecer el posicionamiento y crecimiento de la marca.'
        },
        impulsadora: {
            id: 'impulsadora',
            name: 'Nicole Junkar',
            role: 'Impulsadora Comercial y Vtas',
            responsibilities: 'Promueve los productos en puntos de venta, asesora a los clientes, impulsa la rotación, visibilidad y posicionamiento de la marca, apoyando el cumplimiento de los objetivos comerciales.'
        }
    };

    const renderCard = (member: OrgMember) => (
        <div
            className="org-card"
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
        >
            {hoveredMember === member.id ? (
                <div className="org-card-hover">
                    <p>{member.responsibilities}</p>
                </div>
            ) : (
                <>
                    <div className="org-card-role">{member.role}</div>
                    <div className="org-card-name">{member.name}</div>
                </>
            )}
        </div>
    );

    return (
        <div className="comercial-organigrama-container">
            <TopBar moduleTitle="Comercial" onClose={onBack} />

            <div className="comercial-organigrama-content">
                <div className="organigrama-subtitle">
                    (Pasa el cursor sobre cada integrante y descubre su función dentro del área.)
                </div>

                <div className="organigrama-description">
                    El equipo Comercial de IMN Nutrition impulsa el crecimiento de la compañía mediante la gestión
                    estratégica de ventas, la atención personalizada al cliente y la expansión continua del mercado,
                    garantizando el cumplimiento de metas y el fortalecimiento de las relaciones comerciales.
                </div>

                <div className="comercial-chart-wrapper">
                    <h3 className="chart-title">Dir. Comercial</h3>

                    {/* Director */}
                    <div className="chart-level level-0">
                        <div className="director-photo">
                            <img src={director.photo} alt={director.name} />
                        </div>
                        {renderCard(director)}
                    </div>

                    {/* Hierarchy Visual Lines */}
                    <div className="hierarchy-lines">
                        <div className="line-vertical-main"></div>
                        <div className="line-horizontal-top"></div>
                        <div className="line-vertical-branch branch-1"></div>
                        <div className="line-vertical-branch branch-2"></div>
                        <div className="line-vertical-branch branch-3"></div>
                        <div className="line-vertical-branch branch-4"></div>
                    </div>

                    {/* Level 1 Columns */}
                    <div className="chart-level level-1">
                        {/* Column 1: Seniors */}
                        <div className="chart-column">
                            {renderCard(members.senior1)}
                            <div className="line-vertical-connector"></div>
                            {renderCard(members.senior2)}
                        </div>

                        {/* Column 2: Juniors */}
                        <div className="chart-column">
                            {renderCard(members.junior1)}
                            <div className="line-vertical-connector"></div>
                            {renderCard(members.junior2)}
                            <div className="line-vertical-connector"></div>
                            {renderCard(members.junior3)}
                        </div>

                        {/* Column 3: Ejecutivo */}
                        <div className="chart-column">
                            {renderCard(members.ejecutivo)}
                        </div>

                        {/* Column 4: Impulsadora */}
                        <div className="chart-column">
                            {renderCard(members.impulsadora)}
                        </div>
                    </div>
                </div>

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
