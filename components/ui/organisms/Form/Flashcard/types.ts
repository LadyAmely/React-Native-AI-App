

export interface FlashcardFormProps {
    question: string;
    answer: string;
    setQuestion: (text: string) => void;
    setAnswer: (text: string) => void;
    addFlashcard: () => void;
    closeModal: () => void;
}