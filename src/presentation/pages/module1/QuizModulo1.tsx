import React from 'react';
import './QuizModulo1.css';
import { GenericQuiz } from '../../components/quiz/GenericQuiz';
import { QUESTIONS_MODULO_1 } from './data/quiz_questions';

interface QuizModulo1Props {
    onBack: () => void;
    onComplete: () => void;
}

export const QuizModulo1: React.FC<QuizModulo1Props> = ({ onBack, onComplete }) => {
    return (
        <GenericQuiz
            moduleId="module1_etapa2"
            quizTitle="Quiz Etapa 2: Alcance IMN"
            questions={QUESTIONS_MODULO_1}
            onComplete={onComplete}
            onExit={onBack}
        />
    );
};
