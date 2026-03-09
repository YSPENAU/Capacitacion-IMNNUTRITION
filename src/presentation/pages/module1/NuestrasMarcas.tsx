import React, { useState } from 'react';
import './NuestrasMarcas.css';
import { TopBar } from '../../components/TopBar';
import logoIMN from '../../../assets/modulo01/logo ofi 1.png';
import logoXtrong from '../../../assets/modulo01/xtronglab 1.png';
import logoIMNLab from '../../../assets/modulo01/imn_lab 1.png';
import logoBYF from '../../../assets/modulo01/byf 1.png';

interface NuestrasMarcasProps {
    onBack: () => void;
    onNext: () => void;
}

const BRANDS = [
    {
        id: 'imn',
        name: 'IMN Nutrition',
        year: '2020',
        logo: logoIMN,
        position: 'center-top',
        borderColor: '#2FBCEB',
        content: 'En IMN creemos que la verdadera transformación comienza desde adentro, cuando cada colaborador impulsa el crecimiento y la innovación con propósito.'
    },
    {
        id: 'xtronglab',
        name: 'XTRONG LAB',
        year: '2021',
        logo: logoXtrong,
        position: 'left',
        borderColor: '#2FBCEB',
        content: 'Misión: Brindar productos saludables, innovadores y deliciosos, acercando a las familias a una alimentación más nutritiva mediante canales de distribución accesibles.\n\nVisión 2028: Ser una marca líder en productos saludables para las familias, ampliando constantemente nuestro catálogo para satisfacer las necesidades del consumidor.'
    },
    {
        id: 'imnlab',
        name: 'IMN LAB',
        year: '2023',
        logo: logoIMNLab,
        position: 'bottom',
        borderColor: '#87CEEB',
        content: 'Misión: Brindar suplementos dietarios de alta calidad con fórmulas garantizadas, respaldadas por nuestro laboratorio, que apoyen la nutrición y ayuden a superar deficiencias de nutrientes.\n\nVisión 2028: Consolidarnos como una marca líder en suplementos de máxima calidad, ofreciendo formulaciones confiables que fortalezcan la nutrición de diferentes grupos poblacionales.'
    },
    {
        id: 'byf',
        name: 'B Y F TRANSPORTE Y LOGÍSTICA',
        year: '2021',
        logo: logoBYF,
        position: 'right',
        borderColor: '#FF6B6B',
        content: 'Garantizar el servicio de transporte de mercancías de consumo humano de manera segura y confiable, soportados con un equipo competente y comprometido que brinde un acompañamiento cercano al cliente en el momento de la distribución de los productos.\n\nAmpliar nuestra flota de transporte para distribuir productos de consumo humano en toda Colombia.'
    }
];

export const NuestrasMarcas: React.FC<NuestrasMarcasProps> = ({ onBack, onNext }) => {
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [viewedBrands, setViewedBrands] = useState<Set<string>>(new Set());

    const handleBrandClick = (brandId: string) => {
        setSelectedBrand(brandId);
        setViewedBrands(prev => new Set([...prev, brandId]));
    };

    const allViewed = viewedBrands.size === BRANDS.length;

    return (
        <div className="marcas-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title */}
            <div className="marcas-title-pill">
                Nuestras Marcas
            </div>
            <p className="marcas-subtitle">
                ( Haz clic en cada logo )
            </p>

            {/* Brands Diagram */}
            <div className="brands-diagram">
                {BRANDS.map((brand) => (
                    <div
                        key={brand.id}
                        className={`brand-circle ${brand.position} ${selectedBrand === brand.id ? 'active' : ''} ${viewedBrands.has(brand.id) ? 'viewed' : ''}`}
                        style={{ borderColor: brand.borderColor }}
                        onClick={() => handleBrandClick(brand.id)}
                    >
                        {selectedBrand === brand.id ? (
                            <div className="brand-info">
                                <p className="brand-info-text">{brand.content}</p>
                            </div>
                        ) : (
                            <>
                                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                                <div className="brand-details">
                                    <p className="brand-name">{brand.name}</p>
                                    <p className="brand-year">{brand.year}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}

                {/* Connecting Lines */}
                <svg className="connection-lines" viewBox="0 0 1000 700">
                    {/* IMN to XtrongLab */}
                    <line x1="500" y1="140" x2="280" y2="350" stroke="#D3D3D3" strokeWidth="2" />
                    {/* IMN to BYF */}
                    <line x1="500" y1="140" x2="720" y2="350" stroke="#D3D3D3" strokeWidth="2" />
                    {/* IMN to IMN Lab */}
                    <line x1="500" y1="140" x2="500" y2="580" stroke="#D3D3D3" strokeWidth="2" />
                </svg>

                {/* Arrow indicators */}
                <div className="arrow-indicator left-arrow">»</div>
                <div className="arrow-indicator bottom-arrow">»</div>
            </div>

            {/* Footer Navigation */}
            <div className="marcas-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>



                <button
                    className={`marcas-next-btn ${allViewed ? 'enabled' : 'disabled'}`}
                    onClick={allViewed ? onNext : undefined}
                    disabled={!allViewed}
                >
                    Siguiente ➡
                </button>
            </div>
        </div>
    );
};
