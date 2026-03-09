import React from 'react';
import './QuizEtapa1.css';
import { GenericQuiz } from '../../components/quiz/GenericQuiz';
import { QUESTIONS_ETAPA_1 } from './data/quiz_questions';

interface QuizEtapa1Props {
    onBack: () => void;
    onComplete: () => void;
}

export const QuizEtapa1: React.FC<QuizEtapa1Props> = ({ onBack, onComplete }) => {
    return (
        <GenericQuiz
            moduleId="module1_etapa1" // Unique ID for persistence
            quizTitle="Quiz Etapa 1: Conociendo IMN"
            questions={QUESTIONS_ETAPA_1}
            onComplete={(score) => {
                // We can use the score here if needed, or just complete
                onComplete();
            }}
            onExit={onBack}
        />
    );
};
