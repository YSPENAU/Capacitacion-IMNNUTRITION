import React from 'react';
import { TrueFalseQuestion } from '../types';
import './TrueFalseView.css';


interface TrueFalseViewProps {
    question: TrueFalseQuestion;
    onAnswer: (answers: boolean[]) => void;
    selected: boolean[] | undefined;
    disabled: boolean;
}

export const TrueFalseView: React.FC<TrueFalseViewProps> = ({ question, onAnswer, selected = [], disabled }) => {

    const toggleStatement = (index: number, value: boolean) => {
        if (disabled) return;

        // Initialize if undefined
        const currentAnswers = selected.length === question.statements.length
            ? [...selected]
            : new Array(question.statements.length).fill(undefined);

        currentAnswers[index] = value;
        onAnswer(currentAnswers);
    };

    return (
        <div className="tf-container" style={{ width: '100%' }}>
            {question.instruction && <p className="hint-text">{question.instruction}</p>}

            <div className="tf-header-row" style={{ display: 'grid', gridTemplateColumns: '1fr 60px 60px', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                <span>Afirmación</span>
                <span style={{ textAlign: 'center' }}>V</span>
                <span style={{ textAlign: 'center' }}>F</span>
            </div>

            {question.statements.map((stmt, index) => {
                const userVal = selected[index];
                const isCorrect = userVal === stmt.isTrue;

                let rowClass = 'tf-row';
                if (disabled) {
                    rowClass += isCorrect ? ' row-correct' : ' row-incorrect';
                }

                return (
                    <div key={index} className={rowClass} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 60px 60px',
                        alignItems: 'center',
                        padding: '0.5rem 0',
                        borderBottom: '1px solid #eee'
                    }}>
                        <span>{stmt.text}</span>

                        <button
                            className={`tf-circle-btn ${userVal === true ? 'selected' : ''}`}
                            onClick={() => toggleStatement(index, true)}
                            disabled={disabled}
                        >V</button>

                        <button
                            className={`tf-circle-btn ${userVal === false ? 'selected' : ''}`}
                            onClick={() => toggleStatement(index, false)}
                            disabled={disabled}
                        >F</button>
                    </div>
                );
            })}
        </div>
    );
};
