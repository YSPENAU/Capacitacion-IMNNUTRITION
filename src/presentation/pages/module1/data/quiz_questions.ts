import { QuizQuestion } from "../../../components/quiz/types";

export const QUESTIONS_ETAPA_1: QuizQuestion[] = [
    {
        id: 1,
        type: 'single',
        question: '¿En qué año nació IMN Nutrition?',
        options: ['2018', '2019', '2020', '2021'],
        correctAnswerIndex: 2
    },
    {
        id: 2,
        type: 'single',
        question: '¿Cuál fue la primera marca creada por IMN?',
        options: ['IMN Las', 'Xtrong Lab', 'NutriLab', 'BYF'],
        correctAnswerIndex: 1
    },
    {
        id: 3,
        type: 'single',
        question: 'Según la filosofía de IMN, nuestro propósito principal es…',
        options: [
            'Vender suplementos de forma masiva',
            'Aumentar la productividad',
            'Exportar productos a otros países',
            'Promover un estilo de vida saludable'
        ],
        correctAnswerIndex: 3
    },
    {
        id: 4,
        type: 'single',
        question: '¿Cuáles de los siguientes corresponden a los valores de IMN?',
        options: [
            'Integridad, Innovación, Calidad',
            'Poder, Fama, Riqueza',
            'Dominio, Velocidad, Poder',
            'Riqueza, Fama, Innovación'
        ],
        correctAnswerIndex: 0
    },
    {
        id: 5,
        type: 'single',
        question: '¿Cuál de los siguientes es uno de los valores corporativos de IMN Nutrition?',
        options: [
            'Competencia interna',
            'Orientación al cliente',
            'Rentabilidad extrema',
            'Velocidad operativa'
        ],
        correctAnswerIndex: 1
    },
    {
        id: 6,
        type: 'single',
        question: '¿Qué significa IMN?',
        options: [
            'Inversiones Mutant Nutrition',
            'International Market Nutrition',
            'Innovación Mutua Natural',
            'Integridad Mundial Nutricional'
        ],
        correctAnswerIndex: 0
    },
    {
        id: 7,
        type: 'single',
        question: 'Para el 2030, IMN busca…',
        options: [
            'Dejar de producir suplementos',
            'Convertirse en una empresa 100% digital',
            'Liderar en Latinoamérica el mercado de suplementos y alimentos saludables de alto desempeño',
            'Cambiar toda su línea de productos'
        ],
        correctAnswerIndex: 2
    }
];

export const QUESTIONS_MODULO_1: QuizQuestion[] = [
    {
        id: 101,
        type: 'single',
        question: '¿Cuál de estas afirmaciones describe correctamente una de las marcas de IMN?',
        options: [
            'Xtrong Lab complementa la nutrición familiar.',
            'IMN Lab tus cosméticos de confianza.',
            'BYF una marca nutricional.',
            'Todas las marcas ofrecen el mismo producto.'
        ],
        correctAnswerIndex: 0
    },
    {
        id: 102,
        type: 'single',
        question: '¿Cuál NO es un objetivo de IMN?',
        options: [
            'Aumentar rentabilidad 15% anual',
            'Reducir presencia en canales',
            'Ampliar líneas de producto',
            'Posicionar marcas en el mercado'
        ],
        correctAnswerIndex: 1
    },
    {
        id: 103,
        type: 'single',
        question: '¿Qué dirías sobre la proyección internacional de IMN?',
        options: [
            'Que no existen planes de expansión.',
            'Que solo operamos en Colombia.',
            'Que únicamente realizamos exportaciones.',
            'Que buscamos consolidarnos como líderes en Latinoamérica.'
        ],
        correctAnswerIndex: 3
    },
    {
        id: 104,
        type: 'single',
        question: '¿Qué acción refleja el impacto social de IMN?',
        options: [
            'Cambiar misión constantemente.',
            'Bajar calidad para reducir costos.',
            'Crear productos nutritivos accesibles.',
            'Pensar solo en ventas.'
        ],
        correctAnswerIndex: 2
    },
    {
        id: 105,
        type: 'true-false',
        question: 'Verdadero o Falso (selección múltiple)',
        instruction: 'Marca las afirmaciones VERDADERAS:',
        statements: [
            { text: 'IMN fomenta respeto, inclusión y trabajo en equipo.', isTrue: true },
            { text: 'Uno de los fundadores es de Ecuador.', isTrue: true },
            { text: 'Los primeros productos de IMN fueron creatinas.', isTrue: false },
            { text: 'IMN está ubicada en Ecuador, Venezuela y Panamá.', isTrue: false }
        ]
    }
];
