import React from 'react';
import './MarketingIntro.css';
import { TopBar } from '../../components/TopBar';
import introImage from '../../../assets/modulo4/intro-marketing.png';

interface MarketingIntroProps {
    onStart: () => void;
    onBack: () => void;
}

export const MarketingIntro: React.FC<MarketingIntroProps> = ({ onStart, onBack }) => {
    return (
        <div className="marketing-intro-container">
            <TopBar moduleTitle="Marketing y Comunicación" onClose={onBack} />

            <div className="marketing-intro-content">
                <div className="intro-card-marketing">
                    <div className="intro-header-marketing">
                        <div className="intro-title-box-marketing">
                            <h1>
                                MÓDULO DE<br />
                                MARKETING
                            </h1>
                        </div>
                        <div className="intro-image-marketing">
                            <img src={introImage} alt="Ilustración Marketing" />
                        </div>
                    </div>

                    <p className="intro-description-marketing">
                        Descubre cómo el área de Marketing y Comunicación impulsa la estrategia, la imagen y
                        la conexión de IMN Nutrition con sus clientes, fortaleciendo la presencia y
                        el crecimiento de la marca.
                    </p>

                    <button className="intro-start-btn-marketing" onClick={onStart}>
                        Iniciar Módulo
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
