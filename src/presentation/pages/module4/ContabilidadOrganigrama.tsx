import React from 'react';
import './ContabilidadOrganigrama.css';
import { TopBar } from '../../components/TopBar';

// Import photos
import photoAnaMaria from '../../../assets/modulo4/anaMaria.png';
import photoNorma from '../../../assets/modulo4/normaOchoa.png';
import photoLaura from '../../../assets/modulo4/lauraQuintero.png';
import photoMayerly from '../../../assets/modulo4/mayerlimedina.png';
import photoLeidy from '../../../assets/modulo4/leydiSolanilla.png';

interface ContabilidadOrganigramaProps {
    onNext: () => void;
    onBack: () => void;
}

interface TeamMember {
    id: string;
    name: string;
    role: string;
    photo: string;
    description: string;
}

export const ContabilidadOrganigrama: React.FC<ContabilidadOrganigramaProps> = ({ onNext, onBack }) => {
    const leader: TeamMember = {
        id: 'leader',
        name: 'Ana María Sánchez',
        role: 'Coordinadora Contable',
        photo: photoAnaMaria,
        description: 'Supervisa los procesos contables y financieros del área, asegurando la precisión en los registros y el cumplimiento de las normas vigentes.'
    };

    const team: TeamMember[] = [
        {
            id: 'member1',
            name: 'Norma Ochoa',
            role: 'Auxiliar Contable',
            photo: photoNorma,
            description: 'Registra los gastos operativos y administrativos, controlando el flujo de información contable diario.'
        },
        {
            id: 'member2',
            name: 'Laura Quintero',
            role: 'Analista Contable y Tesorería',
            photo: photoLaura,
            description: 'Administra los pagos, control de caja y conciliaciones bancarias, garantizando la liquidez y transparencia financiera.'
        },
        {
            id: 'member3',
            name: 'Mayerly Medina',
            role: 'Auxiliar de Facturación',
            photo: photoMayerly,
            description: 'Gestiona la facturación diaria, revisión de cotizaciones y control de recibos de pago y cartera.'
        },
        {
            id: 'member4',
            name: 'Leidy Solanilla',
            role: 'Analista de Compras',
            photo: photoLeidy,
            description: 'Coordina la adquisición de materia prima y suministros, negociando con proveedores para optimizar costos y calidad.'
        }
    ];

    return (
        <div className="contabilidad-organigrama-container">
            <TopBar moduleTitle="Contabilidad y Finanzas" onClose={onBack} />

            <div className="contabilidad-organigrama-content">
                {/* Header Description */}
                <div className="org-header-box">
                    <h2>Contabilidad y Finanzas</h2>
                    <p className="instruction-text">(Pasa el cursor sobre cada integrante y descubre su función dentro del área.)</p>
                    <p className="description-text">
                        El equipo de Contabilidad y Finanzas garantiza la gestión eficiente y transparente de los recursos económicos de IMN Nutrition.
                        Su labor asegura que cada movimiento financiero cumpla con las normativas vigentes, fortaleciendo la estabilidad y el
                        crecimiento de la empresa.
                    </p>
                </div>

                {/* Main Org Chart Card */}
                <div className="org-chart-card">
                    <h3 className="chart-title">Estructura del Área de Contabilidad y Finanzas</h3>

                    <div className="chart-structure">
                        {/* Level 1: Leader */}
                        <div className="chart-level level-1">
                            <div className="member-node leader-node">
                                <div className="node-content">
                                    <div className="member-photo">
                                        <img src={leader.photo} alt={leader.name} />
                                    </div>
                                    <div className="member-info">
                                        <div className="member-role">{leader.role}</div>
                                        <div className="member-name">{leader.name}</div>
                                    </div>
                                </div>
                                <div className="node-overlay">
                                    <p>{leader.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Connector Line Vertical */}
                        <div className="connector-vertical"></div>

                        {/* Connector Line Horizontal */}
                        <div className="connector-horizontal-bar"></div>

                        {/* Level 2: Subordinates */}
                        <div className="chart-level level-2">
                            {/* Connector Lines Vertical Small for each */}
                            {team.map((member) => (
                                <div key={member.id} className="member-column">
                                    <div className="connector-vertical-small"></div>
                                    <div className="member-node subordinate-node">
                                        <div className="node-content subordinate-content">
                                            <div className="member-info">
                                                <div className="member-role">{member.role}</div>
                                                <div className="member-name">{member.name}</div>
                                            </div>
                                            <div className="member-photo photo-bottom">
                                                <img src={member.photo} alt={member.name} />
                                            </div>
                                        </div>
                                        <div className="node-overlay">
                                            <p>{member.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Button */}
                <div className="org-footer">
                    <button className="org-next-btn" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>

                {/* Chat FAB */}
                <div className="chat-fab">💬</div>
            </div>
        </div>
    );
};
