import React from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const percent = Math.min(100, (current / total) * 100);

    return (
        <div className="quiz-progress-wrapper" style={{ width: '100%', padding: '0 1rem' }}>
            <div className="progress-track" style={{ height: '8px', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div
                    className="progress-fill"
                    style={{
                        width: `${percent}%`,
                        height: '100%',
                        background: '#3CA9D6',
                        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                ></div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#888', marginTop: '4px' }}>
                {Math.round(percent)}% Completado
            </div>
        </div>
    );
};
