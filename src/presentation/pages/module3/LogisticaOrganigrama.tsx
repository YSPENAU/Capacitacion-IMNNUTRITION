import React, { useState } from 'react';
import './LogisticaOrganigrama.css';
import { TopBar } from '../../components/TopBar';
import directorPhoto from '../../../assets/modulo03/director_logistica.png';
import coordinadorPhoto from '../../../assets/modulo03/coordinador_logistica.png';
import logisticaIcon from '../../../assets/modulo03/logo_logistica.png';

interface LogisticaOrganigramaProps {
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

export const LogisticaOrganigrama: React.FC<LogisticaOrganigramaProps> = ({ onNext, onBack }) => {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    const members: OrgMember[] = [
        {
            id: 'director',
            name: 'Juan Carlos Romero',
            role: 'Dir. de Logística y Despacho',
            photo: directorPhoto,
            responsibilities: 'Dirige la operación completa de recepción, almacenamiento y despacho, planifica la distribución nacional, administra el inventario de todas las bodegas y garantiza que cada pedido llegue a tiempo y en perfectas condiciones.'
        },
        {
            id: 'coordinador',
            name: 'Juan Camilo Rodriguez',
            role: 'Coordinador de Logística y Despacho',
            photo: coordinadorPhoto,
            responsibilities: 'Valida que los procesos de recepción, almacenamiento y despacho se ejecuten correctamente, gestiona los inventarios de todas las bodegas, supervisa el alistamiento de pedidos y garantiza el cumplimiento de los estándares logísticos establecidos.'
        },
        {
            id: 'aux_logistica',
            role: 'Auxiliar de Logística y Despacho',
            photo: logisticaIcon,
            isicon: true,
            responsibilities: 'Realiza recogida de producto terminado en planta Mirolindo, traslado seguro a bodegas CEDI y entrega eficiente de pedidos locales en la ciudad de Ibagué.'
        },
        {
            id: 'operador',
            role: 'Operador de Logística',
            photo: logisticaIcon,
            isicon: true,
            responsibilities: 'Realiza picking, packing y alistamiento completo de pedidos diarios, elabora guías de despacho y coordina la validación final de envíos con el área comercial.'
        },
        {
            id: 'aux_mp',
            role: 'Auxiliar de Materias Primas',
            photo: logisticaIcon,
            isicon: true,
            responsibilities: 'Recibe, verifica y almacena materias primas, entrega insumos diarios a producción y gestiona la recolección de materiales sobrantes al final de cada jornada operativa.'
        }
    ];

    const renderCard = (member: OrgMember, isTopLevel: boolean = false) => (
        <div
            className={`org-card ${isTopLevel ? 'top-card' : ''}`}
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
        >
            {isTopLevel && (
                <div className="card-photo-container">
                    <img src={member.photo} alt={member.role} className="card-photo" />
                </div>
            )}

            {hoveredMember === member.id ? (
                <div className="org-card-hover">
                    <p>{member.responsibilities}</p>
                </div>
            ) : (
                <div className="org-card-content">
                    {!isTopLevel && member.isicon && (
                        // Small icon for bottom level cards not top photo
                        <div className="card-icon-small">
                            <img src={member.photo} alt="icon" />
                        </div>
                    )}
                    <div className="org-card-role">{member.role}</div>
                    {member.name && <div className="org-card-name">{member.name}</div>}
                </div>
            )}
        </div>
    );

    return (
        <div className="logistica-organigrama-container">
            <TopBar moduleTitle="Logística y Despacho" onClose={onBack} />

            <div className="logistica-organigrama-content">
                <div className="organigrama-header">
                    <h2 className="organigrama-main-title">Logística y Despacho</h2>
                    <div className="organigrama-subtitle">
                        (Pasa el cursor sobre cada integrante y descubre su función dentro del área.)
                    </div>
                </div>

                <div className="organigrama-description">
                    El equipo de Logística y Despacho garantiza la gestión eficiente del almacenamiento y distribución,
                    asegurando la disponibilidad de materiales para producción y el despacho oportuno de pedidos.
                </div>

                <div className="logistica-chart-wrapper">
                    <div className="chart-header-label">Dir. de Logística y Despacho</div>

                    {/* Level 1: Director & Coordinator */}
                    <div className="chart-level level-top">
                        <div className="top-member-wrapper">
                            {renderCard(members[0], true)}
                        </div>
                        <div className="top-member-wrapper">
                            {renderCard(members[1], true)}
                        </div>
                    </div>

                    {/* Connector Lines between Levels */}
                    <div className="hierarchy-connector-complex">
                        {/* Horizontal connecting top two */}
                        <div className="connector-bridge"></div>
                        {/* Vertical line down from bridge center */}
                        <div className="connector-vertical-main"></div>
                        {/* Horizontal line for bottom three */}
                        <div className="connector-horizontal-bottom"></div>
                        {/* Vertical lines to bottom cards */}
                        <div className="connector-vertical-branches">
                            <div className="branch branch-left"></div>
                            <div className="branch branch-center"></div>
                            <div className="branch branch-right"></div>
                        </div>
                    </div>

                    {/* Level 2: Auxiliaries & Operator */}
                    <div className="chart-level level-bottom">
                        <div className="bottom-member-wrapper">
                            {renderCard(members[2])}
                        </div>
                        <div className="bottom-member-wrapper">
                            {renderCard(members[3])}
                        </div>
                        <div className="bottom-member-wrapper">
                            {renderCard(members[4])}
                        </div>
                    </div>
                </div>

                <div className="logistica-organigrama-footer">
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
