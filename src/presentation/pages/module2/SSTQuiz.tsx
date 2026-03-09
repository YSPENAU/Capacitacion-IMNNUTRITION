import React, { useState, useEffect } from 'react';
import './SSTQuiz.css';
import imnLogo from '../../../assets/logos/logo_imn.svg';
import trophyIcon from '../../../assets/icons/trophy.svg'; // Need to check if this exists or use text
import starIcon from '../../../assets/icons/star.svg'; // Need to check if this exists or use text
import { TopBar } from '../../components/TopBar';

interface SSTQuizProps {
    onFinish: () => void;
}

// Question Types
type QuestionType = 'single' | 'multi' | 'true-false' | 'matching';

interface Option {
    id: string;
    text: string;
    isCorrect?: boolean; // For single/multi
}

interface MatchingPair {
    id: string;
    concept: string;
    definition: string;
}

interface Question {
    id: number;
    type: QuestionType;
    question: string;
    options?: Option[];
    matchingPairs?: MatchingPair[];
    correctAnswerIds?: string[]; // For single/multi/true-false
}

const quizQuestions: Question[] = [
    {
        id: 1,
        type: 'single',
        question: "¿Cuál es el objetivo principal del SG-SST?",
        options: [
            { id: 'A', text: "Reducir costos de la empresa." },
            { id: 'B', text: "Proteger la salud y seguridad de los trabajadores.", isCorrect: true },
            { id: 'C', text: "Cumplir únicamente con los requisitos legales." },
            { id: 'D', text: "Evitar sanciones del gobierno." }
        ],
        correctAnswerIds: ['B']
    },
    {
        id: 2,
        type: 'multi',
        question: "¿Cuáles de los siguientes no son Elementos de Protección Personal (EPP)?",
        options: [
            { id: 'A', text: "Casco.", isCorrect: false },
            { id: 'B', text: "Gafas de seguridad.", isCorrect: false },
            { id: 'C', text: "Extintor.", isCorrect: true },
            { id: 'D', text: "Guantes.", isCorrect: true }
        ],
        correctAnswerIds: ['C']
    },
    {
        id: 3,
        type: 'true-false',
        question: "El COPASST se encarga de prevenir y atender casos de acoso laboral.",
        options: [
            { id: 'true', text: "Verdadero" }, // False statement
            { id: 'false', text: "Falso", isCorrect: true }
        ],
        correctAnswerIds: ['false']
    },
    {
        id: 4,
        type: 'matching',
        question: "Relaciona el concepto con su definición:",
        matchingPairs: [
            { id: 'P1', concept: "Incidente", definition: "Ocurre un evento sin consecuencias de lesión." }, // "Ocurre un evento sin consecuencias de lesión." -> Incidente
            { id: 'P2', concept: "Accidente", definition: "Genera lesiones o daños a la salud." },
            { id: 'P3', concept: "Acto inseguro", definition: "Comportamiento que pone en riesgo." },
            { id: 'P4', concept: "Condición insegura", definition: "Situación del entorno que aumenta el riesgo." }
        ]
    },
    {
        id: 5,
        type: 'single',
        question: "¿Qué debo hacer si ocurre un accidente laboral?",
        options: [
            { id: 'A', text: "Reportar el accidente en el formato oficial." },
            { id: 'B', text: "Informar al supervisor responsable.", isCorrect: true },
            { id: 'C', text: "Llamar directamente al servicio médico." },
            { id: 'D', text: "Proteger a la persona afectada y asegurar el área." }
        ],
        correctAnswerIds: ['B']
    },
    {
        id: 6,
        type: 'true-false',
        question: "El uso de EPP es opcional si el trabajador considera que no lo necesita.",
        options: [
            { id: 'true', text: "Verdadero" },
            { id: 'false', text: "Falso", isCorrect: true }
        ],
        correctAnswerIds: ['false']
    },
    {
        id: 7,
        type: 'single',
        question: "¿Cuál de los siguientes comités atiende quejas de acoso laboral?",
        options: [
            { id: 'A', text: "COCOLA (Comité de Convivencia Laboral).", isCorrect: true },
            { id: 'B', text: "Brigada de emergencias." },
            { id: 'C', text: "COPASST." },
            { id: 'D', text: "Comité de bienestar." }
        ],
        correctAnswerIds: ['A']
    }
];

export const SSTQuiz: React.FC<SSTQuizProps> = ({ onFinish }) => {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showError, setShowError] = useState(false);

    // Matching state
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // Array of pair IDs
    const [selectedDefinition, setSelectedDefinition] = useState<string | null>(null);
    const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

    const currentQuestion = quizQuestions[currentQIndex];

    const handleOptionSelect = (optionId: string) => {
        if (isAnswered) return; // Locked after answering

        if (currentQuestion.type === 'single' || currentQuestion.type === 'true-false') {
            setSelectedOptions([optionId]);
        } else if (currentQuestion.type === 'multi') {
            if (selectedOptions.includes(optionId)) {
                setSelectedOptions(selectedOptions.filter(id => id !== optionId));
            } else {
                setSelectedOptions([...selectedOptions, optionId]);
            }
        }
        setShowError(false);
    };

    const checkAnswer = () => {
        if (currentQuestion.type === 'matching') {
            // Auto check for matching logic happens in interactions
            if (matchedPairs.length === currentQuestion.matchingPairs!.length) {
                setIsCorrect(true);
                setIsAnswered(true);
            }
            return;
        }

        if (selectedOptions.length === 0) return;

        const correctIds = currentQuestion.correctAnswerIds || [];

        let correct = false;
        if (currentQuestion.type === 'single' || currentQuestion.type === 'true-false') {
            correct = correctIds.includes(selectedOptions[0]);
        } else if (currentQuestion.type === 'multi') {
            // Check if all correct answers are selected AND no incorrect answers are selected
            const allCorrectSelected = correctIds.every(id => selectedOptions.includes(id));
            const noIncorrectSelected = selectedOptions.every(id => correctIds.includes(id));
            correct = allCorrectSelected && noIncorrectSelected;
        }

        setIsCorrect(correct);
        setIsAnswered(true);
        if (!correct) {
            setShowError(true);
            // Optionally auto-reset after delay? No, user requested: "no la deja seguir hasta que salga bien"
            // So we show error, and maybe let them retry? 
            // "sale en rojo y no la deja seguir hasta que salga bien" -> means they must retry.
            // So logic: If wrong, show Feedback Red. Then reset 'isAnswered' to allow retry?
            // Or keep 'isAnswered' state but allow changing selection?

            // Let's implement: Wrong answer -> Show Error Message -> After 1.5s Reset selection to try again?
            // Or just keep Selection marked Red and allow changing.
            setTimeout(() => {
                setIsAnswered(false);
                setSelectedOptions([]); // Clear selection to force pick again
                setShowError(false); // Hide error message logic handles visual state
            }, 1500);
        }
    };

    const handleNext = () => {
        if (isCorrect) {
            if (currentQIndex < quizQuestions.length - 1) {
                setCurrentQIndex(prev => prev + 1);
                setSelectedOptions([]);
                setIsAnswered(false);
                setIsCorrect(false);
                setMatchedPairs([]); // Reset matching
            } else {
                onFinish();
            }
        }
    };

    // Matching Logic
    const handleConceptClick = (concept: string) => {
        if (isAnswered) return;
        if (matchedPairs.some(p => p.startsWith(concept))) return; // Already matched

        setSelectedConcept(concept);
        if (selectedDefinition) {
            attemptMatch(concept, selectedDefinition);
        }
    };

    const handleDefinitionClick = (definition: string) => {
        if (isAnswered) return;
        // Check if definition is already matched (need complex check or simple ID check if uniquely mapped)
        // Here definitions are texts, concepts are texts. Let's use IDs to be safe?
        // Let's assume passed values are IDs or text content if unique. 
        // Plan passes pair ID. Let's use ID for logic, Text for display.

        setSelectedDefinition(definition);
        if (selectedConcept) {
            attemptMatch(selectedConcept, definition);
        }
    };

    const attemptMatch = (cId: string, dId: string) => {
        // Find pair
        const pair = currentQuestion.matchingPairs?.find(p => p.concept === cId && p.definition === dId); // This logic relies on ID passing
        // Actually, let's pass IDs to handlers.

        // Wait, UI renders text.
        // Let's look at how we render.
    };

    // Effective Matching Handler
    const handleMatchClick = (side: 'concept' | 'definition', id: string) => {
        if (matchedPairs.includes(id)) return; // Already matched this pair logic needs refinement

        if (side === 'concept') {
            setSelectedConcept(id);
            if (selectedDefinition) {
                checkMatch(id, selectedDefinition);
            }
        } else {
            setSelectedDefinition(id);
            if (selectedConcept) {
                checkMatch(selectedConcept, id);
            }
        }
    };

    const checkMatch = (cId: string, dId: string) => {
        const validPair = currentQuestion.matchingPairs?.find(p => p.id === cId && p.definition === dId);
        // Wait, p.id is the Pair ID. 
        // We need to know which pair the definition belongs to.
        // Let's simplify: 
        // cId is the PairID associated with the concept.
        // dId is the PairID associated with the definition.

        if (cId === dId) {
            // Match!
            setMatchedPairs([...matchedPairs, cId]);
            setSelectedConcept(null);
            setSelectedDefinition(null);
        } else {
            // Error
            setShowError(true);
            setTimeout(() => {
                setSelectedConcept(null);
                setSelectedDefinition(null);
                setShowError(false);
            }, 1000);
        }
    };

    // Auto-advance matching when all pairs matched
    useEffect(() => {
        if (currentQuestion.type === 'matching' && currentQuestion.matchingPairs) {
            if (matchedPairs.length === currentQuestion.matchingPairs.length) {
                setIsCorrect(true);
                setIsAnswered(true);
            }
        }
    }, [matchedPairs, currentQuestion]);


    return (
        <div className="sst-quiz-container">
            <TopBar moduleTitle="Seguridad y Salud en el Trabajo" />
            <div className="quiz-progress-bar-container" style={{ position: 'absolute', top: '90px', width: '60%', height: '10px', background: '#e0e0e0', borderRadius: '5px', zIndex: 90 }}>
                <div
                    className="quiz-progress-fill"
                    style={{ width: `${((currentQIndex + 1) / quizQuestions.length) * 100}%`, height: '100%', background: '#2FBCEB', borderRadius: '5px', transition: 'width 0.3s ease' }}
                ></div>
            </div>

            <div className="quiz-content">
                {/* Left Thermometer */}
                <div className="quiz-thermometer">
                    <div className="trophy-icon">🏆</div>
                    <div className="thermo-track">
                        <div
                            className="thermo-fill"
                            style={{ height: `${((currentQIndex) / quizQuestions.length) * 100}%` }}
                        ></div>
                        <div className="star-icon" style={{ bottom: `${((currentQIndex) / quizQuestions.length) * 100}%` }}>⭐</div>
                    </div>
                </div>

                {/* Question Area */}
                <div className="quiz-main-area">
                    <div className="question-box">
                        <h2>{currentQuestion.question}</h2>
                        {currentQuestion.type === 'multi' && <p>(Selección múltiple - varias respuestas correctas)</p>}
                        {currentQuestion.type === 'single' && <p>(Seleccione una respuesta)</p>}
                        {currentQuestion.type === 'matching' && <p>(Relaciona el concepto con su definición)</p>}
                    </div>

                    {/* Options Area */}
                    <div className="options-container">
                        {currentQuestion.type === 'matching' ? (
                            <div className="matching-game">
                                <div className="concepts-column">
                                    {currentQuestion.matchingPairs?.map(pair => (
                                        <button
                                            key={`c-${pair.id}`}
                                            className={`match-btn concept ${matchedPairs.includes(pair.id) ? 'matched' : ''} ${selectedConcept === pair.id ? 'selected' : ''}`}
                                            onClick={() => handleMatchClick('concept', pair.id)}
                                            disabled={matchedPairs.includes(pair.id)}
                                        >
                                            {pair.concept}
                                        </button>
                                    ))}
                                </div>
                                <div className="definitions-column">
                                    {/* Shuffle definitions for challenge? User screenshot shows straight lines, meaning shuffled order visually 
                                        Let's shuffle them randomly or just render in different order logic?
                                        For simplicity and "User screenshot style" (straight lines connecting them), they might be static but crossed?
                                        The user screenshot 4/7 shows lines crossing. So definitions are NOT aligned with concepts.
                                        I will shuffle them.
                                     */}
                                    {[...currentQuestion.matchingPairs!].sort((a, b) => a.definition.localeCompare(b.definition)).map(pair => (
                                        <button
                                            key={`d-${pair.id}`}
                                            className={`match-btn definition ${matchedPairs.includes(pair.id) ? 'matched' : ''} ${selectedDefinition === pair.id ? 'selected' : ''}`}
                                            onClick={() => handleMatchClick('definition', pair.id)}
                                            disabled={matchedPairs.includes(pair.id)}
                                        >
                                            {pair.definition}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Standard Options
                            currentQuestion.options?.map(option => {
                                const isSelected = selectedOptions.includes(option.id);
                                let btnClass = 'quiz-option-btn';
                                if (isSelected) {
                                    if (isCorrect) btnClass += ' correct';
                                    else if (showError) btnClass += ' incorrect';
                                    else btnClass += ' selected';
                                }

                                return (
                                    <button
                                        key={option.id}
                                        className={btnClass}
                                        onClick={() => handleOptionSelect(option.id)}
                                    >
                                        <span className="option-id">{option.id === 'true' || option.id === 'false' ? '' : option.id + ') '}</span>
                                        {option.text}
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Action */}
            <div className="quiz-footer">
                <div className="chat-fab">💬</div>
                {/* Only Show "Siguiente" or "Validar" */}
                {/* If matching, auto validates. Button is Next */}
                {/* If others, Check First, then Next? Or Button does both? */}
                {/* User usually clicks "Siguiente". If not answered -> nothing. If answered wrong -> Red. If right -> Green then Next? */}
                {/* Let's make "Siguiente" do the check. If correct, it changes to "Continuar" or just navigates? */}
                {/* User said: "no la deja seguir hasta que salga bien". So clicking Siguiente checks. */}

                <button
                    className="sst-next-btn"
                    onClick={() => {
                        if (!isAnswered && currentQuestion.type !== 'matching') {
                            checkAnswer();
                        } else if (isCorrect) {
                            handleNext();
                        } else if (showError) {
                            // Retry logic handled by timeout usually, 
                            // but if button clicked again while error? do nothing
                        }
                    }}
                >
                    {isCorrect ? 'Siguiente ➡' : 'Validar / Siguiente'}
                </button>
            </div>

            {showError && <div className="feedback-toast error">¡Inténtalo de nuevo!</div>}
            {isCorrect && <div className="feedback-toast success">¡Correcto!</div>}
        </div>
    );
};
