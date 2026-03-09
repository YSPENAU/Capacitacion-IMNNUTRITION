import React, { useState } from 'react';
import './MarketingQuiz.css';
import { TopBar } from '../../components/TopBar';

interface MarketingQuizProps {
    onComplete: () => void;
    onBack: () => void;
}

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // Index of correct answer (0-3)
}

export const MarketingQuiz: React.FC<MarketingQuizProps> = ({ onComplete, onBack }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const questions: Question[] = [
        {
            id: 1,
            text: "¿Cuál es el propósito principal del área de Marketing y Comunicación?",
            options: [
                "Diseñar empaques atractivos para los productos.",
                "Impulsar el crecimiento sostenible mediante estrategias que fortalezcan la marca y conecten con los clientes.",
                "Apoyar a Contabilidad en la planeación financiera.",
                "Gestionar únicamente redes sociales y publicidad digital."
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            text: "¿Qué función refleja mejor el trabajo diario del equipo de Marketing?",
            options: [
                "Coordinar campañas, producir contenidos y analizar resultados para mejorar el desempeño.",
                "Revisar facturas y movimientos financieros.",
                "Controlar inventarios de productos terminados.",
                "Ejecutar procesos de contratación de personal."
            ],
            correctAnswer: 0
        },
        {
            id: 3,
            text: "¿Con qué área se apoya Marketing para cumplir los objetivos comerciales?",
            options: [
                "Contabilidad y Finanzas.",
                "Producción y Calidad.",
                "Comercial.", // Correct based on text provided
                "ARGIP."
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            text: "¿Cuál es el primer paso dentro del proceso general de Marketing?",
            options: [
                "Enviar reportes de ventas semanales.",
                "Revisar los pagos a proveedores.",
                "Controlar el inventario de producto terminado.",
                "Analizar el comportamiento del cliente y del mercado." // Correct based on "Planeación Estratégica" usually involving analysis, and mapped to provided answers
                // Wait, user provided: D) Analizar el comportamiento del cliente y del mercado. (Correcta)
            ],
            correctAnswer: 3
        },
        {
            id: 5,
            text: "¿Qué cargo del área es responsable de planificar y supervisar las estrategias de comunicación del equipo?",
            options: [
                "Diseñador gráfico.",
                "Community Manager.",
                "Coordinador de Marketing.",
                "Aprendiz SENA."
            ],
            correctAnswer: 2
        }
    ];

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResults(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    // Calculate progress percentage
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    if (showResults) {
        const passed = score >= 4; // Pass if 4 or 5 correct
        return (
            <div className="marketing-quiz-container">
                <TopBar moduleTitle="Marketing y Comunicación" onClose={onBack} />
                <div className="quiz-results-content">
                    <div className="results-card">
                        <div className="results-icon">
                            {passed ? '🏆' : '📝'}
                        </div>
                        <h2 className="results-title">
                            {passed ? '¡Felicitaciones!' : 'Inténtalo de nuevo'}
                        </h2>
                        <p className="results-message">
                            {passed
                                ? 'Has completado el módulo de Marketing exitosamente.'
                                : 'Debes obtener al menos 4 respuestas correctas para aprobar.'}
                        </p>
                        <div className="results-score">
                            Puntuación: {score} / {questions.length}
                        </div>
                        <button
                            className={`results-action-btn ${passed ? 'success' : 'retry'}`}
                            onClick={passed ? onComplete : handleRetry}
                        >
                            {passed ? 'Finalizar Módulo' : 'Reintentar Quiz'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="marketing-quiz-container">
            <TopBar moduleTitle="Marketing y Comunicación" onClose={onBack} />

            <div className="marketing-quiz-content">
                <div className="quiz-card">
                    {/* Progress Bar */}
                    <div className="quiz-header">
                        <span className="question-counter">
                            Pregunta {currentQuestion + 1} de {questions.length}
                        </span>
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Question */}
                    <h2 className="quiz-question">{questions[currentQuestion].text}</h2>

                    {/* Options */}
                    <div className="quiz-options">
                        {questions[currentQuestion].options.map((option, index) => {
                            let optionClass = "quiz-option";
                            if (isAnswered) {
                                if (index === questions[currentQuestion].correctAnswer) {
                                    optionClass += " correct";
                                } else if (index === selectedOption) {
                                    optionClass += " incorrect";
                                }
                            } else if (selectedOption === index) {
                                optionClass += " selected";
                            }

                            return (
                                <button
                                    key={index}
                                    className={optionClass}
                                    onClick={() => handleOptionClick(index)}
                                    disabled={isAnswered}
                                >
                                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                    <span className="option-text">{option}</span>
                                    {isAnswered && index === questions[currentQuestion].correctAnswer && (
                                        <span className="feedback-icon">✓</span>
                                    )}
                                    {isAnswered && index === selectedOption && index !== questions[currentQuestion].correctAnswer && (
                                        <span className="feedback-icon">✗</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Next Button */}
                    {isAnswered && (
                        <div className="quiz-footer">
                            <button className="quiz-next-btn" onClick={handleNextQuestion}>
                                {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Chat FAB */}
            <div className="chat-fab">💬</div>
        </div>
    );
};
