
import React from 'react';
import { Modal, View } from 'react-native';
import {FlashcardEditModalProps} from "@/components/ui/molecules/Flashcard/types";
import FlashcardForm from "@/components/ui/organisms/Form/Flashcard/FlashcardForm";


const FlashcardEditModal: React.FC<FlashcardEditModalProps> = ({
                                                 visible, onClose, question, answer, setQuestion, setAnswer, onSubmit
                                             }) => (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                <FlashcardForm
                    question={question}
                    answer={answer}
                    setQuestion={setQuestion}
                    setAnswer={setAnswer}
                    addFlashcard={onSubmit}
                    closeModal={onClose}
                />
            </View>
        </View>
    </Modal>
);

export default FlashcardEditModal;
