import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import './QueHacemosVideo.css';
import { TopBar } from '../../components/TopBar';

interface QueHacemosVideoProps {
    onBack: () => void;
    onNext: () => void;
}

export const QueHacemosVideo: React.FC<QueHacemosVideoProps> = ({ onBack, onNext }) => {
    const [videoCompleted, setVideoCompleted] = useState(false);

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // Access to player in all event handlers via event.target
        console.log('YouTube player ready');
    };

    const onVideoEnd: YouTubeProps['onEnd'] = (event) => {
        console.log('Video ended');
        setVideoCompleted(true);
    };

    const opts: YouTubeProps['opts'] = {
        height: '450',
        width: '800',
        playerVars: {
            autoplay: 0,
            rel: 0, // Don't show related videos
            modestbranding: 1, // Minimal YouTube branding
        },
    };

    return (
        <div className="video-container">
            <TopBar moduleTitle="Corporativo IMN" />

            {/* Title Pill */}
            <div className="video-title-pill">
                Video Corporativo
            </div>

            {/* Video Player */}
            <div className="video-player-wrapper">
                <YouTube
                    videoId="IhoKYYTwlJ0"
                    opts={opts}
                    onReady={onPlayerReady}
                    onEnd={onVideoEnd}
                    className="youtube-player"
                />
            </div>

            {/* Subtitle */}
            <div className="video-subtitle">
                <p>
                    Conoce quiénes somos, lo que nos mueve y cómo<br />
                    impactamos vidas desde IMN Nutrition.
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="video-footer">
                <button className="fab-btn" onClick={onBack}>
                    ⬅
                </button>



                <button
                    className={`video-next-btn ${videoCompleted ? 'enabled' : 'disabled'}`}
                    onClick={videoCompleted ? onNext : undefined}
                    disabled={!videoCompleted}
                >
                    Continuar ➡
                </button>
            </div>
        </div>
    );
};
