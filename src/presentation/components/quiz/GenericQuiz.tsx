import React, { useState, useEffect } from 'react';
import './GenericQuiz.css';
import { QuizQuestion } from './types';
import { TopBar } from '../../components/TopBar';
import { SingleChoiceView } from './views/SingleChoiceView';
import { MultiChoiceView } from './views/MultiChoiceView';
import { TrueFalseView } from './views/TrueFalseView';
import { MatchingView } from './views/MatchingView';

interface GenericQuizProps {
    moduleId: string;
    quizTitle: string;
    questions: QuizQuestion[];
    onComplete: (score: number) => void;
    onExit: () => void;
}

export const GenericQuiz: React.FC<GenericQuizProps> = ({
    moduleId,
    quizTitle,
    questions,
    onComplete,
    onExit
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<any>({});
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [passed, setPassed] = useState(false);

    const currentQuestion = questions[currentIndex];
    const progressPercent = ((currentIndex + 1) / questions.length) * 100;

    // Load progress
    useEffect(() => {
        const savedProgress = localStorage.getItem(`quiz_progress_${moduleId}`);
        if (savedProgress) {
            const parsed = JSON.parse(savedProgress);
            // Only restore if not finished
            if (parsed.index < questions.length && !parsed.finished) {
                setCurrentIndex(parsed.index);
                setUserAnswers(parsed.answers || {});
            }
        }
    }, [moduleId, questions.length]);

    // Save progress
    useEffect(() => {
        if (!quizFinished) {
            localStorage.setItem(`quiz_progress_${moduleId}`, JSON.stringify({
                index: currentIndex,
                answers: userAnswers,
                finished: false
            }));
        }
    }, [currentIndex, userAnswers, moduleId, quizFinished]);

    const handleAnswer = (answer: any) => {
        if (quizFinished) return;
        setUserAnswers({ ...userAnswers, [currentIndex]: answer });
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            calculateFinalScore();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const calculateFinalScore = () => {
        let correctCount = 0;

        questions.forEach((q, index) => {
            const answer = userAnswers[index];
            if (answer === undefined) return;

            let isCorrect = false;
            switch (q.type) {
                case 'single':
                    isCorrect = answer === q.correctAnswerIndex;
                    break;
                case 'multi':
                    const correctIndices = q.correctAnswerIndices.sort().join(',');
                    const userIndices = (answer as number[]).sort().join(',');
                    isCorrect = correctIndices === userIndices;
                    break;
                case 'true-false':
                    isCorrect = q.statements.every((stmt, idx) =>
                        (answer as boolean[])[idx] === stmt.isTrue
                    );
                    break;
                case 'matching':
                    isCorrect = answer === true;
                    break;
            }
            if (isCorrect) correctCount++;
        });

        const finalScore = (correctCount / questions.length) * 100;
        setScore(finalScore);
        setPassed(finalScore === 100); // Strict 100% passing as implied by "hasta que salga bien"
        setQuizFinished(true);

        // Clear simplified progress but maybe keep result?
        localStorage.removeItem(`quiz_progress_${moduleId}`);
    };

    const handleRetry = () => {
        setCurrentIndex(0);
        setUserAnswers({});
        setQuizFinished(false);
        setScore(0);
        setPassed(false);
    };

    const renderQuestionView = () => {
        const commonProps = {
            question: currentQuestion,
            onAnswer: handleAnswer,
            selected: userAnswers[currentIndex],
            disabled: quizFinished
        };

        switch (currentQuestion.type) {
            case 'single': return <SingleChoiceView {...commonProps as any} />;
            case 'multi': return <MultiChoiceView {...commonProps as any} />;
            case 'true-false': return <TrueFalseView {...commonProps as any} />;
            case 'matching': return <MatchingView {...commonProps as any} />;
            default: return <div>Unknown Question Type</div>;
        }
    };

    if (quizFinished) {
        return (
            <div className="generic-quiz-container">
                <TopBar moduleTitle="Evaluación" onClose={onExit} />
                <div className="quiz-result-card">
                    <div className="result-icon">{passed ? '🎉' : '⚠️'}</div>
                    <h2>{passed ? '¡Felicitaciones!' : 'Has fallado'}</h2>
                    <p className="result-score">Puntaje: {Math.round(score)}%</p>
                    <p className="result-message">
                        {passed
                            ? 'Has respondido correctamente todas las preguntas.'
                            : 'Debes obtener el 100% para continuar. Revisa el material e inténtalo de nuevo.'}
                    </p>
                    <div className="result-actions">
                        {passed ? (
                            <button className="quiz-btn next" onClick={() => onComplete(score)}>Continuar</button>
                        ) : (
                            <button className="quiz-btn next" onClick={handleRetry}>Intentar de Nuevo</button>
                        )}
                        <button className="quiz-btn back" onClick={onExit}>Salir</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="generic-quiz-container">
            <TopBar moduleTitle="Evaluación" onClose={onExit} />

            <div className="quiz-header-area">
                <div className="quiz-title-pill">{quizTitle}</div>
                <div className="quiz-progress-text">
                    Pregunta {currentIndex + 1} de {questions.length}
                </div>
                <div style={{ width: '100%', height: '8px', background: '#eee', borderRadius: '4px' }}>
                    <div style={{
                        width: `${progressPercent}%`,
                        height: '100%',
                        background: '#3CA9D6',
                        borderRadius: '4px',
                        transition: 'width 0.3s ease'
                    }}></div>
                </div>
            </div>

            <div className="quiz-content-area">
                <div className="question-card">
                    <h2 className="question-text">{currentQuestion.question}</h2>
                    {currentQuestion.explanation && <p className="question-instruction">{currentQuestion.explanation}</p>}

                    {renderQuestionView()}
                </div>
            </div>

            <div className="quiz-footer-area">
                {currentIndex > 0 ? (
                    <button className="quiz-btn back" onClick={handlePrevious}>Anterior</button>
                ) : (
                    <button className="quiz-btn back" onClick={onExit}>Salir</button>
                )}

                <button
                    className="quiz-btn next"
                    onClick={handleNext}
                    disabled={userAnswers[currentIndex] === undefined}
                >
                    {currentIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
                </button>
            </div>
        </div>
    );
};
