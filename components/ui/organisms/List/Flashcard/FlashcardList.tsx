import React from 'react';
import { ScrollView, Text} from 'react-native';
import Flashcard from "@/components/ui/molecules/Flashcard/Flashcard";
import {FlashcardListProps} from "@/components/ui/organisms/List/Flashcard/types";
import {styles} from "@/components/ui/organisms/List/Flashcard/Styles";


const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards, deleteFlashcard }) => {
    return (
        <ScrollView contentContainerStyle={styles.flashcardsContainer}>
            {flashcards.length > 0 ? (
                flashcards.map((flashcard, index) => (
                    <Flashcard
                        key={flashcard.id}
                        id={flashcard.id}
                        index={index}
                        question={flashcard.question}
                        answer={flashcard.answer}
                        onDelete={deleteFlashcard}
                    />

                ))
            ) : (
                <Text>No flashcards to display</Text>
            )}
        </ScrollView>
    );
};



export default FlashcardList;
