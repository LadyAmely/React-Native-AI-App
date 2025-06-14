import React from 'react';
import Card from '../../atoms/Card/Card';
import {FlashcardProps} from "@/components/ui/molecules/Flashcard/types";
import {useFlashcardActions} from "@/hooks/useFlashcardActions";
import FlashcardEditModal from "@/components/ui/molecules/Flashcard/FlashcardEditModal";
import FlashcardActions from "@/components/ui/molecules/Flashcard/FlashcardActions";
import FlashcardButton from "@/components/ui/molecules/Flashcard/FlashcardButton";
import PrimaryButton from "@/components/ui/atoms/Button/Primary/PrimaryButton";
import QuestionItem from "@/components/ui/atoms/Item/QItem/QuestionItem";
import AnswerItem from "@/components/ui/atoms/Item/AItem/AnswerItem";


const Flashcard: React.FC<FlashcardProps> = ({ id, question, answer, index, onDelete }) => {
    const {
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
    } = useFlashcardActions(id, index, question, answer, onDelete);

    return (
        <Card>
            <FlashcardButton onPress={() => setIsOptionsVisible(true)} />
            <QuestionItem question={question} />
            {showAnswer && <AnswerItem answer={answer} />}
            <PrimaryButton
                onPress={() => setShowAnswer(!showAnswer)}
                title={showAnswer ? 'Hide reply' : 'View Answer'}
            />
            <FlashcardActions
                visible={isOptionsVisible}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onClose={() => setIsOptionsVisible(false)}
            />
            <FlashcardEditModal
                visible={isEditModalVisible}
                onClose={closeEditModal}
                question={editedQuestion}
                answer={editedAnswer}
                setQuestion={setEditedQuestion}
                setAnswer={setEditedAnswer}
                onSubmit={handleUpdate}
            />
        </Card>
    );
};

export default Flashcard;
