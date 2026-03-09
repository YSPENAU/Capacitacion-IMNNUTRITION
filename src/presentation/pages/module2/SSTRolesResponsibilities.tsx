import React from 'react';
import './SSTRolesResponsibilities.css';
import { TopBar } from '../../components/TopBar';

interface SSTRolesResponsibilitiesProps {
    onNext: () => void;
    onBack?: () => void;
}

export const SSTRolesResponsibilities: React.FC<SSTRolesResponsibilitiesProps> = ({ onNext }) => {
    return (
        <div className="sst-roles-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">

                {/* Title Section */}
                <div className="sst-main-title">
                    Roles y Responsabilidades en SST
                </div>

                {/* Intro Text */}
                <div className="roles-intro-text">
                    <p>
                        En IMN NUTRITION, creemos que trabajar seguro es la mejor forma de cuidarnos, y que la Seguridad y Salud en el Trabajo es un compromiso compartido entre la empresa y cada uno de nosotros.
                        <br />
                        Por eso, hemos diseñado un "trato" de cuidado mutuo donde todos somos piezas clave:
                    </p>
                </div>

                {/* Cards Container */}
                <div className="roles-cards-container">

                    {/* Employer Card */}
                    <div className="role-card employer-card">
                        <div className="role-icon">👨‍💼</div>
                        <h3>Empleador</h3>
                        <ul className="role-checklist">
                            <li>✔ Proteger a nuestros colaboradores</li>
                            <li>✔ Identificar y controlar riesgos</li>
                            <li>✔ Implementar el SG-SST</li>
                            <li>✔ Cumplir la normatividad legal</li>
                            <li>✔ Capacitar a nuestro equipo</li>
                            <li>✔ Entregar de EPP</li>
                            <li>✔ Promover la salud y el bienestar</li>
                            <li>✔ Asignar recursos</li>
                            <li>✔ Actuar ante emergencias, Accidentes, Incidentes y enfermedades laborales</li>
                        </ul>
                    </div>

                    {/* Worker Card */}
                    <div className="role-card worker-card">
                        <div className="role-icon">👷</div>
                        <h3>Trabajador</h3>
                        <ul className="role-checklist">
                            <li>✔ El Autocuidado</li>
                            <li>✔ Cumplir las normas</li>
                            <li>✔ Usar adecuadamente los EPP</li>
                            <li>✔ Participación activa</li>
                            <li>✔ Reportar riesgos</li>
                            <li>✔ Tener hábitos de vida saludable</li>
                            <li>✔ Cuidar a tus compañeros</li>
                        </ul>
                    </div>

                </div>

                {/* Footer Info Box */}
                <div className="sst-footer-pill roles-footer">
                    <p>
                        La seguridad es responsabilidad de todos: juntos construimos un entorno laboral seguro y saludable.
                    </p>
                </div>

                {/* Next Button */}
                <div className="sst-action-footer">
                    <button className="sst-next-btn" onClick={onNext}>
                        Siguiente ➡
                    </button>
                </div>
            </div>

            <div className="chat-fab">💬</div>
        </div>
    );
};
