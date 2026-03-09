import React, { useState } from 'react';
import './LogisticaQuiz.css';
import { TopBar } from '../../components/TopBar';

interface LogisticaQuizProps {
    onComplete: () => void;
    onBack: () => void;
}

interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export const LogisticaQuiz: React.FC<LogisticaQuizProps> = ({ onComplete, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const questions: QuizQuestion[] = [
        {
            id: 1,
            question: '¿Cuál es el propósito principal del área de Logística y Despacho?',
            options: [
                'A) Gestionar las ventas y marketing de IMN.',
                'B) Realizar únicamente la contabilidad de la empresa.',
                'C) Desarrollar nuevos productos nutricionales.',
                'D) Garantizar la recepción, almacenamiento y alistamiento eficiente de materiales y productos.'
            ],
            correctAnswer: 3
        },
        {
            id: 2,
            question: '¿Cuál de estas NO es una función del Auxiliar de Almacén MP?',
            options: [
                'A) Recolección de materiales sobrantes.',
                'B) Elaboración de guías de despacho.',
                'C) Entrega de insumos a producción.',
                'D) Recepción y almacenamiento de MP.'
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: '¿Con qué área se relaciona Logística para recibir órdenes de compra?',
            options: [
                'A) Marketing y Comercial.',
                'B) Producción y Calidad.',
                'C) Contabilidad y Finanzas.',
                'D) Talento Humano.'
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            question: '¿Qué actividad realiza el área al final del día con los materiales de producción?',
            options: [
                'A) Desecharlos',
                'B) Facturarlos',
                'C) Recolectar sobrantes',
                'D) Donarlos'
            ],
            correctAnswer: 2
        },
        {
            id: 5,
            question: '¿Qué proceso sigue inmediatamente después de la "Recepción y Control de Ingresos"?',
            options: [
                'A) Gestión de Inventarios',
                'B) Preparación y Alistamiento',
                'C) Despacho y Validación',
                'D) Abastecimiento a Producción'
            ],
            correctAnswer: 0
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
            <div className="logistica-quiz-container">
                <TopBar moduleTitle="Logística y Despacho" onClose={onBack} />

                <div className="quiz-results-content">
                    {passed ? (
                        // Success Screen
                        <div className="results-card success">
                            <div className="results-icon success-icon">🎉</div>
                            <h2 className="results-title success-title">¡Felicitaciones!</h2>
                            <p className="results-message">
                                Haz completado con éxito el<br />
                                Módulo de Logística y Despacho.
                            </p>
                            <button className="results-btn" onClick={onComplete}>
                                Finalizar Módulo →
                            </button>
                            <div className="results-quote">
                                <p>
                                    "La precisión y el compromiso en cada entrega fortalecen nuestra
                                    promesa de valor. ¡Gracias por asegurar que IMN llegue a cada cliente!"
                                </p>
                                <p className="quote-author">— Líder del área Logística.</p>
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
        <div className="logistica-quiz-container">
            <TopBar moduleTitle="Quiz — Logística y Despacho" onClose={onBack} />

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
