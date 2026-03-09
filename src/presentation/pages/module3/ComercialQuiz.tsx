import React, { useState } from 'react';
import './ComercialQuiz.css';
import { TopBar } from '../../components/TopBar';

interface ComercialQuizProps {
    onComplete: () => void;
    onBack: () => void;
}

interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export const ComercialQuiz: React.FC<ComercialQuizProps> = ({ onComplete, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const questions: QuizQuestion[] = [
        {
            id: 1,
            question: '¿Qué actividad representa una función clave del área Comercial?',
            options: [
                'A) Fabricar suplementos y revisar estándares de calidad.',
                'B) Asesorar, cotizar y cerrar negocios con clientes actuales y nuevos.',
                'C) Coordinar la distribución de productos.',
                'D) Revisar informes contables y financieros.'
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            question: '¿Cuál es el propósito principal del área Comercial?',
            options: [
                'A) Gestionar la producción de los productos.',
                'B) Supervisar los pagos a proveedores.',
                'C) Asegurar el crecimiento de IMN mediante la gestión de ventas y relaciones con los clientes.',
                'D) Diseñar campañas publicitarias.'
            ],
            correctAnswer: 2
        },
        {
            id: 3,
            question: '¿Qué papel cumple el área Comercial dentro del proceso general de IMN Nutrition?',
            options: [
                'A) Conectar la empresa con el cliente y generar resultados.',
                'B) Controlar inventarios.',
                'C) Supervisar la comunicación interna.',
                'D) Registrar movimientos financieros.'
            ],
            correctAnswer: 0
        },
        {
            id: 4,
            question: '¿Cuál de las siguientes habilidades es clave para el éxito en el área Comercial?',
            options: [
                'A) Capacidad para desarrollar relaciones, negociar y entender al cliente.',
                'B) Conocimiento en programación y desarrollo web.',
                'C) Habilidad para operar maquinaria industrial.',
                'D) Experiencia en control de calidad y empaques.',
            ],
            correctAnswer: 0
        },
        {
            id: 5,
            question: '¿Con qué áreas se coordina el equipo Comercial para cumplir sus metas?',
            options: [
                'A) Talento Humano y ARGIP.',
                'B) Solo Gerencia Administrativa.',
                'C) Ninguna, trabaja de forma independiente.',
                'D) Producción, Logística, Marketing y Finanzas.'
            ],
            correctAnswer: 3
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
            <div className="comercial-quiz-container">
                <TopBar moduleTitle="Comercial" onClose={onBack} />

                <div className="quiz-results-content">
                    {passed ? (
                        // Success Screen
                        <div className="results-card success">
                            <div className="results-icon success-icon">🎉</div>
                            <h2 className="results-title success-title">¡Felicitaciones!</h2>
                            <p className="results-message">
                                Haz completado con éxito el<br />
                                Módulo de Comercial.
                            </p>
                            <button className="results-btn" onClick={onComplete}>
                                Siguiente Módulo →
                            </button>
                            <div className="results-quote">
                                <p>
                                    "En IMN, cada cliente es una oportunidad para generar valor. Tu
                                    compromiso y pasión harán que la experiencia comercial sea más
                                    humana, cercana y memorable."
                                </p>
                                <p className="quote-author">— Líder del área Comercial.</p>
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
                                Revisa el contenido y vuelve a intentarlo para avanzar al siguiente módulo.
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
        <div className="comercial-quiz-container">
            <TopBar moduleTitle="Quiz — Comercial" onClose={onBack} />

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
