import React, { useState } from 'react';
import './ContabilidadQuiz.css';
import { TopBar } from '../../components/TopBar';

interface ContabilidadQuizProps {
    onComplete: () => void;
    onBack: () => void;
}

interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export const ContabilidadQuiz: React.FC<ContabilidadQuizProps> = ({ onComplete, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const questions: QuizQuestion[] = [
        {
            id: 1,
            question: '¿Cuál es el propósito principal del área de Contabilidad y Finanzas?',
            options: [
                'A) Supervisar únicamente los gastos administrativos.',
                'B) Controlar y registrar los recursos de la compañía garantizando su transparencia y cumplimiento normativo.',
                'C) Ejecutar campañas de marketing financiero.',
                'D) Revisar exclusivamente los estados de resultados.'
            ],
            correctAnswer: 1 // Option B (Index 1)
        },
        {
            id: 2,
            question: '¿Cuál de las siguientes funciones pertenece al área de Contabilidad y Finanzas?',
            options: [
                'A) Desarrollar nuevos productos para venta.',
                'B) Organizar eventos empresariales.',
                'C) Registrar ingresos y gastos, manejar presupuestos y cumplir obligaciones tributarias.',
                'D) Coordinar capacitaciones internas.'
            ],
            correctAnswer: 2 // Option C (Index 2)
        },
        {
            id: 3,
            question: '¿Qué garantiza el área de Contabilidad y Finanzas en IMN Nutrition?',
            options: [
                'A) El control, la transparencia y la estabilidad financiera.',
                'B) La creación de nuevos productos.',
                'C) La planeación de campañas publicitarias.',
                'D) El mantenimiento de las instalaciones.'
            ],
            correctAnswer: 0 // Option A (Index 0)
        },
        {
            id: 4,
            question: '¿Con qué áreas se relaciona directamente Contabilidad y Finanzas?',
            options: [
                'A) Únicamente con Talento Humano.',
                'B) Con Producción, Logística, Talento Humano y Gerencia.',
                'C) Con todas las áreas de la empresa.',
                'D) Ninguna de las anteriores.'
            ],
            correctAnswer: 2 // Option C (Index 2)
        },
        {
            id: 5,
            question: '¿Qué cargo del área es responsable de verificar y controlar las actividades del equipo contable?',
            options: [
                'A) Coordinadora contable.',
                'B) Auxiliar contable.',
                'C) Analista de compras.',
                'D) Auxiliar de facturación.'
            ],
            correctAnswer: 0 // Option A (Index 0)
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
            <div className="contabilidad-quiz-container">
                <TopBar moduleTitle="Contabilidad y Finanzas" onClose={onBack} />

                <div className="quiz-results-content">
                    {passed ? (
                        // Success Screen
                        <div className="results-card success">
                            <div className="results-icon success-icon">🎉</div>
                            <h2 className="results-title success-title">¡Felicitaciones!</h2>
                            <p className="results-message">
                                Has completado con éxito el<br />
                                Módulo de Contabilidad y Finanzas.
                            </p>
                            <button className="results-btn" onClick={onComplete}>
                                Finalizar Módulo →
                            </button>
                            <div className="results-quote">
                                <p>
                                    "La transparencia financiera es la base de nuestra confianza y crecimiento.
                                    ¡Gracias por entender el valor de cada recurso en IMN!"
                                </p>
                                <p className="quote-author">— Líder del área Contable.</p>
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
        <div className="contabilidad-quiz-container">
            <TopBar moduleTitle="Quiz — Contabilidad y Finanzas" onClose={onBack} />

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
