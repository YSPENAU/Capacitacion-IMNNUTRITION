import React, { useState, useEffect } from 'react';
import { MatchingQuestion } from '../types';

interface MatchingViewProps {
    question: MatchingQuestion;
    onAnswer: (isCorrect: boolean) => void;
    selected: boolean | undefined; // We store purely if it's "done" or not for now in parent? 
    // Actually parent expects "answer" object. 
    // For matching, the state is internal until all matched? 
    // Let's store "matchedPairs" ID list in parent? 
    // Creating complex state in parent for this specific view is hard without generics.
    // Simplified approach: View handles logic, returns "true" when fully correct to parent.
    disabled: boolean;
}

export const MatchingView: React.FC<MatchingViewProps> = ({ question, onAnswer, selected, disabled }) => {
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [selectedRight, setSelectedRight] = useState<string | null>(null);
    const [shuffledRight, setShuffledRight] = useState<any[]>([]);

    useEffect(() => {
        // Shuffle right side on mount
        const rightSide = question.pairs.map(p => ({ id: p.id, text: p.definition }));
        setShuffledRight(rightSide.sort(() => Math.random() - 0.5));
    }, [question.id]);

    const handleMatch = (leftId: string | null, rightId: string | null) => {
        if (!leftId || !rightId) return;

        // Check if IDs match (Pair ID is same for both sides)
        if (leftId === rightId) {
            const newMatched = [...matchedPairs, leftId];
            setMatchedPairs(newMatched);
            setSelectedLeft(null);
            setSelectedRight(null);

            // Check completion
            if (newMatched.length === question.pairs.length) {
                onAnswer(true); // Signal parent that it's correct
            }
        } else {
            // Error visual feedback?
            alert("Incorrect Match"); // Simple fallback
            setSelectedLeft(null);
            setSelectedRight(null);
        }
    };

    const onLeftClick = (id: string) => {
        if (disabled || matchedPairs.includes(id)) return;
        setSelectedLeft(id);
        if (selectedRight) handleMatch(id, selectedRight);
    };

    const onRightClick = (id: string) => {
        if (disabled || matchedPairs.includes(id)) return;
        setSelectedRight(id);
        if (selectedLeft) handleMatch(selectedLeft, id);
    };

    return (
        <div className="matching-container" style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
            {/* Left Column (Concepts) */}
            <div className="column" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Conceptos</h3>
                {question.pairs.map(pair => (
                    <button
                        key={pair.id}
                        className={`match-card ${matchedPairs.includes(pair.id) ? 'matched' : ''} ${selectedLeft === pair.id ? 'selected' : ''}`}
                        onClick={() => onLeftClick(pair.id)}
                        disabled={disabled || matchedPairs.includes(pair.id)}
                    >
                        {pair.concept}
                    </button>
                ))}
            </div>

            {/* Right Column (Definitions) */}
            <div className="column" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3>Definiciones</h3>
                {shuffledRight.map(item => (
                    <button
                        key={item.id}
                        className={`match-card ${matchedPairs.includes(item.id) ? 'matched' : ''} ${selectedRight === item.id ? 'selected' : ''}`}
                        onClick={() => onRightClick(item.id)}
                        disabled={disabled || matchedPairs.includes(item.id)}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
    );
};
