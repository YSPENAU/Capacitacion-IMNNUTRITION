import React from 'react';
import './ArgipIntro.css';
import { TopBar } from '../../components/TopBar';
import introImage from '../../../assets/modulo4/intro-argip.png';

interface ArgipIntroProps {
    onStart: () => void;
    onBack: () => void;
}

export const ArgipIntro: React.FC<ArgipIntroProps> = ({ onStart, onBack }) => {
    return (
        <div className="argip-intro-container">
            <TopBar moduleTitle="ARGIP" onClose={onBack} />

            <div className="argip-intro-content">

                {/* Hero Section Container */}
                <div className="argip-hero-section">
                    {/* Left Title Box */}
                    <div className="argip-title-box">
                        <h1 className="argip-hero-title">
                            <span className="hero-title-small">MÓDULO DE</span>
                            <span className="hero-title-large">ARGIP</span>
                        </h1>
                    </div>

                    {/* Right Image */}
                    <div className="argip-hero-image-wrapper">
                        <img src={introImage} alt="Introducción ARGIP" className="intro-image-argip" />
                    </div>
                </div>

                <div className="intro-text-content">
                    <p className="intro-description">
                        Conoce cómo este equipo asegura la trazabilidad, el orden y el cumplimiento en IMN Nutrition,
                        optimizando cada proceso para fortalecer la eficiencia de toda la organización.
                    </p>

                    <button className="start-module-btn" onClick={onStart}>
                        Comenzar Módulo
                    </button>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
