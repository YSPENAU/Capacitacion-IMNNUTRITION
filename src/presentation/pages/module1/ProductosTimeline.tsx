import React, { useState } from 'react';
import './ProductosTimeline.css';
import { TopBar } from '../../components/TopBar';

// Import product images
import supDietarios from '../../../assets/modulo01/productos/sup_dietarios.png';
import supDietariosHover from '../../../assets/modulo01/productos/sup_dietarios_hoover.png';
import aminoacidos from '../../../assets/modulo01/productos/aminoacidos.png';
import aminoacidosHover from '../../../assets/modulo01/productos/aminoaciodos_hoover.png';
import creatina from '../../../assets/modulo01/productos/creatina.png';
import creatinaHover from '../../../assets/modulo01/productos/creatinas_hoover.png';
import preMezclas from '../../../assets/modulo01/productos/pre-mezclas.png';
import preMezclasHover from '../../../assets/modulo01/productos/pre-mezclas_hoover.png';
import vitaminas from '../../../assets/modulo01/productos/vitaminas.png';
import vitaminasHover from '../../../assets/modulo01/productos/vitaminas_hoover.png';
import colageno from '../../../assets/modulo01/productos/colageno.png';
import colagenoHover from '../../../assets/modulo01/productos/colageno_hoover.png';
import cafeina from '../../../assets/modulo01/productos/cafeina.png';
import cafeinaHover from '../../../assets/modulo01/productos/cafeina_hoover.png';
import proteinas from '../../../assets/modulo01/productos/proteinas.png';
import proteinasHover from '../../../assets/modulo01/productos/proteinas_hoover.png';

interface ProductosTimelineProps {
    onBack: () => void;
    onNext: () => void;
}

const PRODUCTS = [
    { id: 1, name: 'Suplementos Dietarios', image: supDietarios, hoverImage: supDietariosHover },
    { id: 2, name: 'Aminoácidos', image: aminoacidos, hoverImage: aminoacidosHover },
    { id: 3, name: 'Creatina', image: creatina, hoverImage: creatinaHover },
    { id: 4, name: 'Pre-Mezclas', image: preMezclas, hoverImage: preMezclasHover },
    { id: 5, name: 'Vitaminas', image: vitaminas, hoverImage: vitaminasHover },
    { id: 6, name: 'Colágeno', image: colageno, hoverImage: colagenoHover },
    { id: 7, name: 'Cafeína', image: cafeina, hoverImage: cafeinaHover },
    { id: 8, name: 'Proteínas', image: proteinas, hoverImage: proteinasHover }
];

export const ProductosTimeline: React.FC<ProductosTimelineProps> = ({ onBack, onNext }) => {
    const [revealedProducts, setRevealedProducts] = useState<Set<number>>(new Set([1]));
    const [currentUnlocked, setCurrentUnlocked] = useState(1);

    const handleProductClick = (productId: number) => {
        if (productId <= currentUnlocked) {
            const newRevealed = new Set(revealedProducts);
            newRevealed.add(productId);
            setRevealedProducts(newRevealed);

            // Unlock next product
            if (productId === currentUnlocked && productId < PRODUCTS.length) {
                setCurrentUnlocked(productId + 1);
            }
        }
    };

    const allViewed = revealedProducts.size === PRODUCTS.length;

    return (
        <div className="productos-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title */}
            <div className="productos-title-pill">
                Nuestros Productos
            </div>




            {/* Products Grid */}
            <div className="products-grid">
                {/* Top Row */}
                <div className="products-row top-row">
                    {PRODUCTS.slice(0, 4).map((product) => (
                        <div
                            key={product.id}
                            className={`product-card ${product.id <= currentUnlocked ? 'unlocked' : 'locked'} ${revealedProducts.has(product.id) ? 'revealed' : ''}`}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img
                                src={revealedProducts.has(product.id) ? product.hoverImage : product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            {revealedProducts.has(product.id) && (
                                <div className="checkmark">✓</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Timeline Connector */}
                <div className="timeline-connector"></div>

                {/* Bottom Row */}
                <div className="products-row bottom-row">
                    {PRODUCTS.slice(4, 8).map((product) => (
                        <div
                            key={product.id}
                            className={`product-card ${product.id <= currentUnlocked ? 'unlocked' : 'locked'} ${revealedProducts.has(product.id) ? 'revealed' : ''}`}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img
                                src={revealedProducts.has(product.id) ? product.hoverImage : product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            {revealedProducts.has(product.id) && (
                                <div className="checkmark">✓</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="productos-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>

                <div className="chat-fab-placeholder">💬</div>

                <button
                    className={`productos-next-btn ${allViewed ? 'enabled' : 'disabled'}`}
                    onClick={allViewed ? onNext : undefined}
                    disabled={!allViewed}
                >
                    Siguiente ➡
                </button>
            </div>
        </div>
    );
};
