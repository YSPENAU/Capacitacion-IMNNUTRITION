import React, { useState } from 'react';
import './ContabilidadPropositoFunciones.css';
import { TopBar } from '../../components/TopBar';

// Import function icons
import icon1 from '../../../assets/modulo4/proposito1.png';
import icon2 from '../../../assets/modulo4/proposito2.png';
import icon3 from '../../../assets/modulo4/porposito3.png'; // Typo in filename maintained
import icon4 from '../../../assets/modulo4/proposito4.png';
import icon5 from '../../../assets/modulo4/proposito5.png';

interface ContabilidadPropositoFuncionesProps {
    onNext: () => void;
    onBack: () => void;
}

export const ContabilidadPropositoFunciones: React.FC<ContabilidadPropositoFuncionesProps> = ({ onNext, onBack }) => {

    const functions = [
        {
            id: 1,
            title: "Registro contable y control de gastos",
            icon: icon1
        },
        {
            id: 2,
            title: "Pagos, cobros y conciliaciones",
            icon: icon2
        },
        {
            id: 3,
            title: "Cumplimiento tributario y legal",
            icon: icon3
        },
        {
            id: 4,
            title: "Manejo de presupuestos y proyecciones financieras",
            icon: icon4
        },
        {
            id: 5,
            title: "Reportes financieros y estados de resultados",
            icon: icon5
        }
    ];

    return (
        <div className="contabilidad-proposito-container">
            <TopBar moduleTitle="Contabilidad y Finanzas" onClose={onBack} />

            <div className="contabilidad-proposito-content">
                {/* Main Card */}
                <div className="contabilidad-proposito-card">
                    <div className="proposito-header">
                        <div className="proposito-icon-container">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="proposito-main-icon">
                                <path d="M9 21C9 21.5523 9.44772 22 10 22H14C14.5523 22 15 21.5523 15 21V20H9V21ZM12 2C8.13401 2 5 5.13401 5 9C5 11.3869 6.20862 13.4969 8 14.7426V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V14.7426C17.7914 13.4969 19 11.3869 19 9C19 5.13401 15.866 2 12 2ZM15.8584 13.5658L15 14.1672V16H9V14.1672L8.14159 13.5658C6.83737 12.6519 6 11.0189 6 9.16667V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V9.16667C18 11.0189 17.1626 12.6519 15.8584 13.5658Z" fill="#F8B64C" stroke="#F8B64C" strokeWidth="1" />
                                <path d="M12 6V8" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 11L14 9" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="proposito-text-content">
                            <h2 className="proposito-title">PROPÓSITO Y CICLO DEL ÁREA</h2>
                            <p className="proposito-description">
                                El área de Contabilidad y Finanzas tiene como propósito controlar, registrar y optimizar los recursos
                                financieros de IMN Nutrition, asegurando el cumplimiento de las normas contables, la transparencia
                                en los procesos y la sostenibilidad económica de la organización.
                            </p>
                        </div>
                    </div>

                    {/* Functions Grid */}
                    <div className="funciones-grid">
                        {functions.map((func) => (
                            <div key={func.id} className="funcion-card">
                                <div className="funcion-icon-container-small">
                                    <img src={func.icon} alt={`Function ${func.id}`} />
                                </div>
                                <p className="funcion-text">
                                    <strong>{func.id}.</strong> {func.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="contabilidad-proposito-footer">
                    <button className="proposito-next-btn" onClick={onNext}>
                        Siguiente ➜
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
