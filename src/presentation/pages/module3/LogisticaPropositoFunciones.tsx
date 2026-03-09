import React from 'react';
import './LogisticaPropositoFunciones.css';
import { TopBar } from '../../components/TopBar';
import logoLogistica from '../../../assets/modulo03/logo_logistica.png';

interface LogisticaPropositoFuncionesProps {
    onNext: () => void;
    onBack: () => void;
}

export const LogisticaPropositoFunciones: React.FC<LogisticaPropositoFuncionesProps> = ({ onNext, onBack }) => {
    return (
        <div className="logistica-proposito-container">
            <TopBar moduleTitle="Logística y Despacho" onClose={onBack} />

            <div className="logistica-proposito-content">
                {/* Main Card */}
                <div className="logistica-proposito-card">
                    <div className="proposito-header">
                        <div className="proposito-icon-container">
                            <img src={logoLogistica} alt="Logística Icon" className="proposito-main-icon" />
                        </div>
                        <div className="proposito-text-content">
                            <h2 className="proposito-title">PROPÓSITO Y FUNCIONES DEL ÁREA</h2>
                            <p className="proposito-description">
                                Garantizar la recepción, almacenamiento y alistamiento eficiente de materias primas, insumos y
                                productos terminados, asegurando el despacho oportuno de pedidos para cumplir con los
                                requerimientos diarios de producción y distribución.
                            </p>
                        </div>
                    </div>

                    {/* Functions Grid */}
                    <div className="funciones-grid">
                        <div className="funcion-card">
                            <div className="funcion-icon">🏭</div>
                            <p className="funcion-text">
                                <strong>1.</strong> Recepción y Almacenamiento
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">🛒</div>
                            <p className="funcion-text">
                                <strong>2.</strong> Abastecimiento a Producción
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">📝</div>
                            <p className="funcion-text">
                                <strong>3.</strong> Gestión de Sobrantes
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">📦</div>
                            <p className="funcion-text">
                                <strong>4.</strong> Preparación de Pedidos
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">🚚</div>
                            <p className="funcion-text">
                                <strong>5.</strong> Despacho y Validación
                            </p>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="logistica-proposito-footer">
                    <button className="proposito-next-btn" onClick={onNext}>
                        Siguiente →
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
