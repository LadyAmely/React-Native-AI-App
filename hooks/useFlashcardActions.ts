import { useState } from 'react';
import {FlashcardModel} from "@/models/flashcardModel";


export const useFlashcardActions = (
    id: string,
    index: number,
    question: string,
    answer: string,
    onDelete: (index: number) => void
) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [editedQuestion, setEditedQuestion] = useState(question);
    const [editedAnswer, setEditedAnswer] = useState(answer);

    const flashcardModel = new FlashcardModel();

    const handleDelete = () => {
        setIsOptionsVisible(false);
        onDelete(index);
    };

    const handleEdit = () => {
        setIsOptionsVisible(false);
        setIsEditModalVisible(true);
    };

    const closeEditModal = () => {
        setIsEditModalVisible(false);
    };

    const handleUpdate = async () => {
        try {
            await flashcardModel.updateFlashcard(id, {
                question: editedQuestion,
                answer: editedAnswer,
            });
            closeEditModal();
        } catch (err) {
            console.error('Error while updating flashcard:', err);
        }
    };

    return {
        showAnswer,
        setShowAnswer,
        isOptionsVisible,
        setIsOptionsVisible,
        isEditModalVisible,
        editedQuestion,
        setEditedQuestion,
        editedAnswer,
        setEditedAnswer,
        handleDelete,
        handleEdit,
        closeEditModal,
        handleUpdate,
    };
};
