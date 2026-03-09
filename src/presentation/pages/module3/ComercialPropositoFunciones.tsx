import React from 'react';
import './ComercialPropositoFunciones.css';
import { TopBar } from '../../components/TopBar';

interface ComercialPropositoFuncionesProps {
    onNext: () => void;
    onBack: () => void;
}

export const ComercialPropositoFunciones: React.FC<ComercialPropositoFuncionesProps> = ({ onNext, onBack }) => {
    return (
        <div className="comercial-proposito-container">
            <TopBar moduleTitle="Comercial" onClose={onBack} />

            <div className="comercial-proposito-content">
                {/* Main Card */}
                <div className="comercial-proposito-card">
                    <div className="proposito-header">
                        <div className="proposito-icon">
                            <span className="icon-chart">📊</span>
                        </div>
                        <h2 className="proposito-title">PROPÓSITO Y FUNCIONES DEL ÁREA</h2>
                    </div>

                    <p className="proposito-description">
                        El área Comercial impulsa el crecimiento sostenible de IMN Nutrition mediante la gestión estratégica
                        de ventas, el fortalecimiento de relaciones con clientes y aliados, y la búsqueda de nuevas
                        oportunidades que garanticen la satisfacción del cliente y la rentabilidad del negocio.
                    </p>

                    {/* Functions Grid */}
                    <div className="funciones-grid">
                        <div className="funcion-card">
                            <div className="funcion-icon">🔍</div>
                            <p className="funcion-text">
                                <strong>1.</strong> Prospección y apertura de clientes
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">📈</div>
                            <p className="funcion-text">
                                <strong>2.</strong> Gestión y seguimiento de ventas
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">🤝</div>
                            <p className="funcion-text">
                                <strong>3.</strong> Relación y fidelización de clientes
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">🔗</div>
                            <p className="funcion-text">
                                <strong>4.</strong> Coordinación con otras áreas
                            </p>
                        </div>

                        <div className="funcion-card">
                            <div className="funcion-icon">📊</div>
                            <p className="funcion-text">
                                <strong>5.</strong> Análisis y reporte de resultados
                            </p>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="comercial-proposito-footer">
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
