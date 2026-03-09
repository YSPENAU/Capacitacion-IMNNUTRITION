import React, { useState, useEffect } from 'react';
import './CoberturaGeografica.css';
import { TopBar } from '../../components/TopBar';
import colombiaBase from '../../../assets/modulo01/colombiaregiones.png';
import region1 from '../../../assets/modulo01/regiones1.png';
import region2 from '../../../assets/modulo01/regiones2.png';

interface CoberturaGeograficaProps {
    onBack: () => void;
    onNext: () => void;
}

export const CoberturaGeografica: React.FC<CoberturaGeograficaProps> = ({ onBack, onNext }) => {
    const [hoveredRegion, setHoveredRegion] = useState<1 | 2 | null>(null);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [canProceed, setCanProceed] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed((prev) => {
                const newTime = prev + 1;
                if (newTime >= 15) {
                    setCanProceed(true);
                    clearInterval(timer);
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const centerX = rect.width / 2;

        if (x < centerX) {
            setHoveredRegion(2); // Left side = Region 2
        } else {
            setHoveredRegion(1); // Right side = Region 1
        }
    };

    const handleMouseLeave = () => {
        setHoveredRegion(null);
    };

    return (
        <div className="cobertura-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title */}
            <div className="cobertura-title-pill">
                Cobertura Geográfica IMN
            </div>
            <p className="cobertura-subtitle">
                (Pasa sobre cada región y descubre nuestra cobertura)
            </p>

            {/* Main Content */}
            <div className="cobertura-content">
                {/* Info Cards */}
                <div className="info-cards">
                    <div className="info-card">
                        <div className="card-icon">🇨🇴</div>
                        <h3 className="card-title">Cobertura Nacional</h3>
                        <p className="card-text">
                            IMN está presente en las principales regiones de Colombia,
                            llegando a clientes en todo el país.
                        </p>
                    </div>
                    <div className="info-card">
                        <div className="card-icon">🌎</div>
                        <h3 className="card-title">Expansión Internacional</h3>
                        <p className="card-text">
                            Nuestro siguiente paso estratégico es la expansión hacia Ecuador,
                            fortaleciendo nuestra presencia internacional.
                        </p>
                    </div>
                </div>

                {/* Interactive Map */}
                <div
                    className="map-container"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Base Map */}
                    <img src={colombiaBase} alt="Colombia" className="map-base" />

                    {/* Region Overlays */}
                    <img
                        src={region1}
                        alt="Región 1"
                        className={`map-overlay region-1 ${hoveredRegion === 1 ? 'visible' : ''}`}
                    />
                    <img
                        src={region2}
                        alt="Región 2"
                        className={`map-overlay region-2 ${hoveredRegion === 2 ? 'visible' : ''}`}
                    />

                    {/* Region Labels */}
                    <div className="region-label label-region-1">Región 1</div>
                    <div className="region-label label-region-2">Región 2</div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="cobertura-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>



                <button
                    className={`cobertura-next-btn ${canProceed ? 'enabled' : 'disabled'}`}
                    onClick={canProceed ? onNext : undefined}
                    disabled={!canProceed}
                >
                    {canProceed ? 'Siguiente ➡' : `Espera ${15 - timeElapsed}s`}
                </button>
            </div>
        </div>
    );
};
