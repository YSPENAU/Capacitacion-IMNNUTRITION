import React, { useState } from 'react';
import './CorporativoPage.css';
import { TopBar } from '../../components/TopBar';
import fundadoresImg from '../../../assets/modulo01/fundadores.png';

interface CorporativoPageProps {
    initialStage?: number;
    onBack: () => void;
    onNavigateTo: (view: 'key-moments' | 'quienes-somos' | 'que-hacemos-video') => void;
    queHacemosUnlocked?: boolean;
}

export const CorporativoPage: React.FC<CorporativoPageProps> = ({ initialStage = 1, onBack, onNavigateTo, queHacemosUnlocked = false }) => {
    // 1 = Momentos Clave unlocked
    // 2 = Quiénes Somos unlocked
    // 3 = Qué Hacemos unlocked
    const [unlockedStage, setUnlockedStage] = useState(queHacemosUnlocked ? 3 : initialStage);

    const handleOptionClick = (stage: number) => {
        if (stage > unlockedStage) return; // Locked

        if (stage === 1) {
            // Momentos Clave
            onNavigateTo('key-moments');
        } else if (stage === 2) {
            // Quiénes Somos
            onNavigateTo('quienes-somos');
        } else if (stage === 3) {
            // Qué Hacemos
            onNavigateTo('que-hacemos-video');
        }
    };

    return (
        <div className="corporativo-container">
            <TopBar moduleTitle="Corporativo IMN" onClose={onBack} />

            {/* Title */}
            <div className="title-section">
                <div className="page-title-pill">
                    Una Historia Que Nos Inspira
                </div>
            </div>

            {/* Main Content Image */}
            <div className="main-content">
                <img src={fundadoresImg} alt="Fundadores IMN" className="founders-image" />
            </div>

            {/* Navigation Buttons */}
            <div className="bottom-nav">
                {/* Button 1: Momentos Clave */}
                <button
                    className={`nav-btn ${unlockedStage >= 1 ? 'active' : 'disabled'}`}
                    onClick={() => handleOptionClick(1)}
                >
                    Momentos Clave
                </button>

                {/* Button 2: Quiénes Somos */}
                <button
                    className={`nav-btn ${unlockedStage >= 2 ? 'active' : 'disabled'}`}
                    style={{ backgroundColor: unlockedStage < 2 ? '#666' : undefined }} // Explicit gray for locked
                    onClick={() => handleOptionClick(2)}
                >
                    Quiénes Somos
                </button>

                {/* Button 3: Qué Hacemos */}
                <button
                    className={`nav-btn ${unlockedStage >= 3 ? 'active' : 'disabled'}`}
                    style={{ backgroundColor: unlockedStage < 3 ? '#666' : undefined }}
                    onClick={() => handleOptionClick(3)}
                >
                    Qué Hacemos
                </button>
            </div>


        </div>
    );
};
