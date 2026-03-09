import React from 'react';
import { MultiChoiceQuestion } from '../types';

interface MultiChoiceViewProps {
    question: MultiChoiceQuestion;
    onAnswer: (indices: number[]) => void;
    selected: number[] | undefined;
    disabled: boolean;
}

export const MultiChoiceView: React.FC<MultiChoiceViewProps> = ({ question, onAnswer, selected = [], disabled }) => {

    const toggleOption = (index: number) => {
        if (disabled) return;

        let newSelection = [...selected];
        if (newSelection.includes(index)) {
            newSelection = newSelection.filter(i => i !== index);
        } else {
            newSelection.push(index);
        }
        onAnswer(newSelection);
    };

    return (
        <div className="options-grid" style={{ display: 'grid', gap: '1rem', width: '100%' }}>
            <p className="hint-text">(Selecciona todas las correctas)</p>
            {question.options.map((option, index) => {
                const isSelected = selected.includes(index);
                const isCorrect = question.correctAnswerIndices.includes(index);

                let className = 'quiz-option-btn';
                if (isSelected) {
                    className += ' selected';
                    if (disabled) {
                        className += isCorrect ? ' correct' : ' incorrect';
                    }
                } else if (disabled && isCorrect) {
                    className += ' correct-hint';
                }

                return (
                    <button
                        key={index}
                        className={className}
                        onClick={() => toggleOption(index)}
                        disabled={disabled}
                    >
                        <span className="checkbox-icon">{isSelected ? '☑' : '☐'}</span>
                        {option}
                    </button>
                );
            })}
        </div>
    );
};
