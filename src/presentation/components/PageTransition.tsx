import React, { useEffect, useState, useRef } from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
    viewKey: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, viewKey }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState<'enter' | 'idle' | 'exit'>('enter');
    const previousKey = useRef(viewKey);

    useEffect(() => {
        if (viewKey !== previousKey.current) {
            setTransitionStage('exit');
            const timer = setTimeout(() => {
                setDisplayChildren(children);
                setTransitionStage('enter');
                previousKey.current = viewKey;
                setTimeout(() => {
                    setTransitionStage('idle');
                }, 400);
            }, 250);
            return () => clearTimeout(timer);
        } else {
            setDisplayChildren(children);
            const timer = setTimeout(() => {
                setTransitionStage('idle');
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [viewKey, children]);

    const getStyle = (): React.CSSProperties => {
        switch (transitionStage) {
            case 'enter':
                return {
                    animation: 'pageEnter 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
                };
            case 'exit':
                return {
                    animation: 'pageExit 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
                };
            case 'idle':
            default:
                return {
                    opacity: 1,
                    transform: 'none',
                };
        }
    };

    return (
        <div
            style={{
                width: '100%',
                minHeight: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                ...getStyle(),
            }}
        >
            {displayChildren}
        </div>
    );
};
