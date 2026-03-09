export type QuestionType = 'single' | 'multi' | 'true-false' | 'matching';

export interface BaseQuestion {
    id: string | number;
    type: QuestionType;
    question: string;
    explanation?: string; // Optional feedback text
}

// 1. Single Choice (Classic A, B, C)
export interface SingleChoiceQuestion extends BaseQuestion {
    type: 'single';
    options: string[]; // Simple array of strings. If IDs needed, use objects.
    correctAnswerIndex: number;
}

// 2. Multiple Choice (Select all that apply)
export interface MultiChoiceQuestion extends BaseQuestion {
    type: 'multi';
    options: string[];
    correctAnswerIndices: number[]; // Array of correct indices
}

// 3. True / False (Can be simple or multiple statements)
export interface TrueFalseQuestion extends BaseQuestion {
    type: 'true-false';
    instruction?: string; // e.g., "Mark the correct statements"
    statements: Array<{
        text: string;
        isTrue: boolean;
    }>;
}

// 4. Matching (Column A -> Column B)
export interface MatchingPair {
    id: string;
    concept: string; // Left side
    definition: string; // Right side
}

export interface MatchingQuestion extends BaseQuestion {
    type: 'matching';
    pairs: MatchingPair[];
}

// Union Type
export type QuizQuestion =
    | SingleChoiceQuestion
    | MultiChoiceQuestion
    | TrueFalseQuestion
    | MatchingQuestion;

// Result Callback Interface
export interface QuizResult {
    score: number;
    totalQuestions: number;
    passed: boolean;
}
