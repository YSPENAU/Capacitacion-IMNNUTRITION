import React from 'react';
import './PropuestaValor.css';
import { TopBar } from '../../components/TopBar';

interface PropuestaValorProps {
    onBack: () => void;
    onNext: () => void;
}

export const PropuestaValor: React.FC<PropuestaValorProps> = ({ onBack, onNext }) => {
    return (
        <div className="propuesta-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title Pill */}
            <div className="propuesta-title-pill">
                Propuesta de valor
            </div>

            {/* Main Content Card */}
            <div className="propuesta-content-wrapper">
                <div className="propuesta-card">
                    <p className="propuesta-text">
                        En <strong>Inversiones Mutant Nutrition SAS</strong>, estamos
                        comprometidos en entregar productos innovadores y de alta
                        calidad, respaldados por la ciencia, que impulsan tu <strong>bienestar</strong> y
                        el de tu familia. Te acompañamos con asesoría experta hacia
                        una <strong>vida saludable</strong>, ofreciendo variedad, diseño y soluciones
                        integrales en un solo lugar.
                    </p>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="propuesta-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>



                <button className="propuesta-next-btn" onClick={onNext}>
                    Siguiente ➡
                </button>
            </div>
        </div>
    );
};
