import React from 'react';
import { SingleChoiceQuestion } from '../types';

interface SingleChoiceViewProps {
    question: SingleChoiceQuestion;
    onAnswer: (answerIndex: number) => void;
    selected: number | undefined;
    disabled: boolean;
}

export const SingleChoiceView: React.FC<SingleChoiceViewProps> = ({ question, onAnswer, selected, disabled }) => {
    return (
        <div className="options-grid" style={{ display: 'grid', gap: '1rem', width: '100%' }}>
            {question.options.map((option, index) => {
                let className = 'quiz-option-btn';
                if (selected === index) {
                    className += ' selected';
                    if (disabled) {
                        // Show correct/incorrect if answered
                        className += index === question.correctAnswerIndex ? ' correct' : ' incorrect';
                    }
                } else if (disabled && index === question.correctAnswerIndex) {
                    // Highlight correct answer if user missed it
                    className += ' correct-hint';
                }

                return (
                    <button
                        key={index}
                        className={className}
                        onClick={() => onAnswer(index)}
                        disabled={disabled}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
};
