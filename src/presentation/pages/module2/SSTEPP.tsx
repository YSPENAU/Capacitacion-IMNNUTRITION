import React from 'react';
import './SSTEPP.css';
import { TopBar } from '../../components/TopBar';
import imgPrincipal from '../../../assets/modulo_sst/img_principal.png';
import iconGafas from '../../../assets/modulo_sst/gafas.png';
import iconCasco from '../../../assets/modulo_sst/casco.png';
import iconGuantes from '../../../assets/modulo_sst/guantes.png';
import iconAuditivos from '../../../assets/modulo_sst/auditivos.png';
import iconCubrebocas from '../../../assets/modulo_sst/cubrebocas.png';
import iconBotas from '../../../assets/modulo_sst/botas.png';
import iconChaleco from '../../../assets/modulo_sst/chaleco.png';

interface SSTEPPProps {
    onNext: () => void;
    onBack?: () => void;
}

export const SSTEPP: React.FC<SSTEPPProps> = ({ onNext }) => {
    return (
        <div className="sst-epp-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">

                {/* Title Section */}
                <div className="sst-main-title epp-title">
                    Elementos de Protección<br />Personal (EPP)
                </div>

                {/* Intro Text */}
                <div className="epp-intro-text">
                    <p>
                        Cada elemento protege una parte de ti. Úsalos siempre de forma correcta.
                    </p>
                </div>

                {/* Main EPP Display */}
                <div className="epp-display-area">

                    {/* Central Model Image */}
                    <div className="epp-model-container">
                        <img src={imgPrincipal} alt="Modelo EPP" className="epp-model-img" />
                    </div>

                    {/* Left Items */}
                    <div className="epp-column left-column">
                        <div className="epp-item fade-in-left delay-1">
                            <div className="epp-icon-circle">
                                <img src={iconGafas} alt="Gafas" />
                            </div>
                            <span className="epp-label">Protectores oculares/faciales<br />(gafas)</span>
                        </div>
                        <div className="epp-item fade-in-left delay-2">
                            <div className="epp-icon-circle">
                                <img src={iconCasco} alt="Casco" />
                            </div>
                            <span className="epp-label">Protectores de cabeza<br />(casco)</span>
                        </div>
                        <div className="epp-item fade-in-left delay-3">
                            <div className="epp-icon-circle">
                                <img src={iconGuantes} alt="Guantes" />
                            </div>
                            <span className="epp-label">Protectores de manos y brazos<br />(guantes)</span>
                        </div>
                    </div>

                    {/* Right Items */}
                    <div className="epp-column right-column">
                        <div className="epp-item fade-in-right delay-1">
                            <div className="epp-icon-circle">
                                <img src={iconAuditivos} alt="Auditivos" />
                            </div>
                            <span className="epp-label">Protectores auditivos<br />(tapones o auriculares)</span>
                        </div>
                        <div className="epp-item fade-in-right delay-2">
                            <div className="epp-icon-circle">
                                <img src={iconCubrebocas} alt="Respirador" />
                            </div>
                            <span className="epp-label">Equipos de protección respiratoria<br />(tapabocas/respirador)</span>
                        </div>
                        <div className="epp-item fade-in-right delay-3">
                            <div className="epp-icon-circle">
                                <img src={iconBotas} alt="Botas" />
                            </div>
                            <span className="epp-label">Protectores de pies y piernas<br />(botas)</span>
                        </div>
                    </div>

                    {/* Bottom Item */}
                    <div className="epp-item bottom-item fade-in-up delay-4">
                        <div className="epp-icon-circle">
                            <img src={iconChaleco} alt="Chaleco" />
                        </div>
                        <span className="epp-label">Protección total del cuerpo (chaleco<br />reflectivo o uniforme)</span>
                    </div>

                </div>

                {/* Footer Info Box */}
                <div className="sst-footer-pill epp-footer">
                    <p>
                        El EPP es tu primera barrera contra los riesgos. ¡Protégete siempre!
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
