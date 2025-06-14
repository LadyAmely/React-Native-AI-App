

export interface FlashcardProps {
    id: string;
    index: number;
    question: string;
    answer: string;
    onDelete: (index: number) => void;
}

export interface FlashcardActionsProps {
    visible: boolean;
    onEdit: () => void;
    onDelete: () => void;
    onClose: () => void;
}

export interface FlashcardEditModalProps {
    visible: boolean;
    onClose: () => void;
    question: string;
    answer: string;
    setQuestion: (val: string) => void;
    setAnswer: (val: string) => void;
    onSubmit: () => void;
}
