import React, { useState } from 'react';
import './ProduccionQuiz.css';
import { TopBar } from '../../components/TopBar';

interface ProduccionQuizProps {
    onComplete: () => void;
    onBack: () => void;
}

interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export const ProduccionQuiz: React.FC<ProduccionQuizProps> = ({ onComplete, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const questions: QuizQuestion[] = [
        {
            id: 1,
            question: '¿Cuál es el propósito principal del área de Producción y Calidad?',
            options: [
                'A) Realizar pagos a proveedores.',
                'B) Diseñar campañas internas.',
                'C) Asegurar que los productos se fabriquen bajo procesos controlados, seguros y estandarizados.',
                'D) Gestionar ventas y nuevos clientes.'
            ],
            correctAnswer: 2
        },
        {
            id: 2,
            question: '¿Qué actividad forma parte del control de calidad dentro de la producción?',
            options: [
                'A) Verificar materias primas, realizar pruebas y asegurar cumplimiento normativo.',
                'B) Crear artes para redes sociales.',
                'C) Registrar movimientos contables.',
                'D) Coordinar entregas comerciales.'
            ],
            correctAnswer: 0
        },
        {
            id: 3,
            question: '¿Qué área apoya a Producción asegurando los insumos necesarios?',
            options: [
                'A) Talento Humano.',
                'B) Marketing.',
                'C) Servicio al Cliente.',
                'D) Gerencia Administrativa.'
            ],
            correctAnswer: 3
        },
        {
            id: 4,
            question: 'Según el proceso operativo del área, ¿cuál es una etapa fundamental?',
            options: [
                'A) Auditoría interna de ventas.',
                'B) Planeación de la demanda y programación de producción.',
                'C) Diseño de campañas promocionales.',
                'D) Liquidación de nómina.'
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: '¿Quién lidera y supervisa el cumplimiento de estándares en producción y calidad?',
            options: [
                'A) El equipo de ventas.',
                'B) El Director de Producción y Calidad.',
                'C) El área de logística.',
                'D) Los operarios sin supervisión.'
            ],
            correctAnswer: 1
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
            <div className="produccion-quiz-container">
                <TopBar moduleTitle="Producción y Calidad" onClose={onBack} />

                <div className="quiz-results-content">
                    {passed ? (
                        // Success Screen
                        <div className="results-card success">
                            <div className="results-icon success-icon">🎉</div>
                            <h2 className="results-title success-title">¡Felicitaciones!</h2>
                            <p className="results-message">
                                Haz completado con éxito el<br />
                                Módulo de Producción y Calidad.
                            </p>
                            <button className="results-btn" onClick={onComplete}>
                                Siguiente Módulo →
                            </button>
                            <div className="results-quote">
                                <p>
                                    "En Producción y Calidad, cada paso que damos garantiza la seguridad y
                                    excelencia de nuestros productos. La disciplina, la precisión y el
                                    compromiso son la base para construir la confianza de nuestros clientes."
                                </p>
                                <p className="quote-author">— Líder del área Producción y Calidad.</p>
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
        <div className="produccion-quiz-container">
            <TopBar moduleTitle="Quiz — Producción y Calidad" onClose={onBack} />

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
                    <div className="progress-circle">◯</div>
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
