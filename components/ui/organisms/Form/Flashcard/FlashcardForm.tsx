import React from 'react';
import PrimaryButton from "@/components/ui/atoms/Button/Primary/PrimaryButton";
import {FlashcardFormProps} from "@/components/ui/organisms/Form/Flashcard/types";
import Input from "@/components/ui/atoms/Input/Input";


const FlashcardForm: React.FC<FlashcardFormProps> = ({ question, answer, setQuestion, setAnswer, addFlashcard, closeModal }) => {
    return (
        <>
            <Input
                value={question}
                onChangeText={setQuestion}
                placeholder="Wpisz pytanie"
            />
            <Input
                value={answer}
                onChangeText={setAnswer}
                placeholder="Wpisz odpowiedź"
            />
            <PrimaryButton
                title="Dodaj Fiszkę"
                onPress={addFlashcard}
            />
            <PrimaryButton
                title="Zamknij"
                onPress={closeModal}
            />
        </>
    );
};

export default FlashcardForm;
