import React from 'react';
import './CyclePHVA.css';
import { TopBar } from '../../components/TopBar';
import cicloPHVA from '../../../assets/modulo_sst/ciclophva.png';

interface CyclePHVAProps {
    onNext: () => void;
    onBack?: () => void;
}

export const CyclePHVA: React.FC<CyclePHVAProps> = ({ onNext }) => {
    return (
        <div className="phva-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="phva-content-wrapper">

                {/* Title Section */}
                <div className="phva-main-title">
                    El Ciclo PHVA: La Ruta de la<br />Mejora Continua en SST
                </div>

                {/* Main Diagram Area */}
                <div className="phva-diagram-area">

                    {/* Central Image */}
                    <div className="phva-central-image">
                        <img src={cicloPHVA} alt="Ciclo PHVA" />
                    </div>

                    {/* Satellite Cards */}

                    {/* Planear (Purple) - Top Left */}
                    <div className="phva-card card-planear">
                        <div className="card-icon-small">
                            📊
                        </div>
                        <h3>Planear</h3>
                        <p>Planificar de forma que se mejore la seguridad y la salud de los empleados</p>
                    </div>

                    {/* Hacer (Green) - Top Right */}
                    <div className="phva-card card-hacer">
                        <div className="card-icon-small">
                            ⚙️
                        </div>
                        <h3>Hacer</h3>
                        <p>Deberán implementar las medidas planificadas</p>
                    </div>

                    {/* Actuar (Blue) - Bottom Left */}
                    <div className="phva-card card-actuar">
                        <div className="card-icon-small">
                            🏃
                        </div>
                        <h3>Actuar</h3>
                        <p>Deberán realizar las acciones de mejora para obtener los mayores beneficios en la seguridad y la salud de los empleados</p>
                    </div>

                    {/* Verificar (Teal) - Bottom Right */}
                    <div className="phva-card card-verificar">
                        <div className="card-icon-small">
                            📋
                        </div>
                        <h3>Verificar</h3>
                        <p>Deberá realizar una revisión de los procedimientos y acciones implantar para conseguir los resultados deseados</p>
                    </div>

                </div>

                {/* Next Button */}
                <div className="phva-action-footer">
                    <button className="phva-next-btn" onClick={onNext}>
                        Siguiente ➡
                    </button>
                </div>
            </div>

            <div className="chat-fab">💬</div>
        </div>
    );
};
