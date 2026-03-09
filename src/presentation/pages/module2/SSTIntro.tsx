import React from 'react';
import './SSTIntro.css';
import { TopBar } from '../../components/TopBar';
import sstConstructor from '../../../assets/modulo_sst/sstinicio.png';

interface SSTIntroProps {
    onStart: () => void;
    onBack: () => void;
}

export const SSTIntro: React.FC<SSTIntroProps> = ({ onStart, onBack }) => {
    return (
        <div className="sst-intro-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />

            <div className="sst-content-wrapper">
                {/* Left Side: Title Card */}
                <div className="sst-title-card">
                    <h1>INDUCCIÓN DE<br />SEGURIDAD Y<br />SALUD EN EL<br />TRABAJO (SST)</h1>
                </div>

                {/* Right Side: Constructor Image */}
                <div className="sst-image-container">
                    <img src={sstConstructor} alt="Constructor SST" className="constructor-img" />
                </div>
            </div>

            {/* Footer / Start Button */}
            <div className="sst-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>
                <div className="chat-fab-placeholder">💬</div>

                <button className="sst-start-btn" onClick={onStart}>
                    Iniciar Módulo ➡
                </button>
            </div>
        </div>
    );
};
