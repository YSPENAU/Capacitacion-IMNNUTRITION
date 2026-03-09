import React, { ReactNode } from 'react';
import bgImage from '../../assets/iconimnbg.svg';

interface StageWrapperProps {
    children: ReactNode;
}

export const StageWrapper: React.FC<StageWrapperProps> = ({ children }) => {
    return (
        <div
            className="stage-wrapper"
            style={{
                width: '100%',
                minHeight: '100vh',
                backgroundColor: '#939393',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div className="stage-wrapper-inner" style={{
                width: '100%',
                flex: 1,
                minHeight: '100vh',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                position: 'relative'
            }}>
                {children}
            </div>
        </div>
    );
};
