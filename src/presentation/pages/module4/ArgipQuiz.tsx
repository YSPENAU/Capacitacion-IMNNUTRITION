import React, { useState } from 'react';
import './ArgipQuiz.css';
import { TopBar } from '../../components/TopBar';

interface ArgipQuizProps {
    onComplete: () => void;
    onBack: () => void;
}

interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export const ArgipQuiz: React.FC<ArgipQuizProps> = ({ onComplete, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const questions: QuizQuestion[] = [
        {
            id: 1,
            question: '¿Cuál es el propósito principal del área ARGIP?',
            options: [
                'A) Gestionar las ventas y el marketing de IMN',
                'B) Identificar, organizar y optimizar procesos para el cumplimiento de objetivos corporativos',
                'C) Encargarse exclusivamente de la contabilidad y finanzas',
                'D) Realizar únicamente auditorías internas'
            ],
            correctAnswer: 1 // Option B (Index 1)
        },
        {
            id: 2,
            question: '¿Quién garantiza el cumplimiento del Sistema de Gestión Integral?',
            options: [
                'A) El Analista de Gestión Integral de Procesos',
                'B) La Gerencia General',
                'C) Todas las áreas por igual',
                'D) El área de Marketing'
            ],
            correctAnswer: 0 // Option A (Index 0)
        },
        {
            id: 3,
            question: '¿Cuál de estos procesos NO corresponde a las funciones clave de ARGIP?',
            options: [
                'A) Desarrollo de productos nutricionales',
                'B) Seguimiento y Medición de Procesos',
                'C) Auditorías Internas',
                'D) Gestión Documental del SGC'
            ],
            correctAnswer: 0 // Option A (Index 0)
        },
        {
            id: 4,
            question: '¿Qué riesgo principal busca mitigar ARGIP según la información del líder?',
            options: [
                'A) Falta de personal en otras áreas',
                'B) Baja rotación de inventario',
                'C) Documentación desactualizada del Sistema de Gestión',
                'D) Problemas de conectividad internet'
            ],
            correctAnswer: 2 // Option C (Index 2)
        },
        {
            id: 5,
            question: '¿Con qué área valida ARGIP los contenidos publicitarios?',
            options: [
                'A) Producción y Calidad',
                'B) Marketing y Comercial',
                'C) Contabilidad y Finanzas',
                'D) Logística y Despacho'
            ],
            correctAnswer: 1 // Option B (Index 1)
        }
    ];

    const handleAnswerSelect = (answerIndex: number) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answerIndex;
        setSelectedAnswers(newAnswers);

        // Auto-advance after selection
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResults(true);
            }
        }, 500);
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.correctAnswer) {
                correct++;
            }
        });
        return correct;
    };

    const handleRetry = () => {
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setShowResults(false);
    };

    const score = calculateScore();
    const passed = score >= 4;

    if (showResults) {
        return (
            <div className="argip-quiz-container">
                <TopBar moduleTitle="ARGIP" onClose={onBack} />

                <div className="quiz-results-content">
                    {passed ? (
                        // Success Screen
                        <div className="results-card success">
                            <div className="results-icon success-icon">🎉</div>
                            <h2 className="results-title success-title">¡Felicitaciones!</h2>
                            <p className="results-message">
                                Has completado con éxito el<br />
                                Módulo de ARGIP.
                            </p>
                            <button className="results-btn" onClick={onComplete}>
                                Finalizar Módulo →
                            </button>
                            <div className="results-quote">
                                <p>
                                    "La gestión integral de procesos es el corazón que mantiene viva la calidad y el cumplimiento en IMN.
                                    ¡Gracias por valorar la importancia de cada proceso!"
                                </p>
                                <p className="quote-author">— Líder del área ARGIP.</p>
                            </div>
                        </div>
                    ) : (
                        // Failure Screen
                        <div className="results-card failure">
                            <div className="results-icon failure-icon">😊</div>
                            <h2 className="results-title failure-title">¡Vuelve a intentarlo!</h2>
                            <p className="results-message">
                                No te preocupes, cada intento te acerca a dominar mejor este módulo.
                            </p>
                            <p className="results-submessage">
                                Revisa el contenido y vuelve a intentarlo para completar el módulo.
                            </p>
                            <button className="results-btn retry-btn" onClick={handleRetry}>
                                Reintentar Quiz 🔄
                            </button>
                        </div>
                    )}
                </div>

                {/* Chat FAB */}
                <div className="chat-fab">💬</div>
            </div>
        );
    }

    return (
        <div className="argip-quiz-container">
            <TopBar moduleTitle="Quiz — ARGIP" onClose={onBack} />

            <div className="quiz-content">
                {/* Progress Indicator */}
                <div className="quiz-progress-sidebar">
                    <div className="progress-trophy">🏆</div>
                    <div className="progress-bar-vertical">
                        <div
                            className="progress-fill"
                            style={{ height: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question Card */}
                <div className="quiz-main-content">
                    <div className="quiz-counter">({currentQuestion + 1}/{questions.length})</div>

                    <div className="question-card">
                        <h2 className="question-text">{questions[currentQuestion].question}</h2>
                        <p className="question-instruction">( Seleccione una respuesta )</p>

                        <div className="options-list">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`option-btn ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                                    onClick={() => handleAnswerSelect(index)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
