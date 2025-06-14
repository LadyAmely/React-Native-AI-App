

export interface FlashcardListProps {
    flashcards: { id: string; question: string; answer: string }[];
    deleteFlashcard: (index: number) => void;
}