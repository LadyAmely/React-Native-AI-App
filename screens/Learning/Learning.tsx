// src/screens/Learning/LearningScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLearning } from '@/hooks/useLearning';
import { styles } from '@/screens/Learning/Styles';

const LearningScreen = () => {
    const { flashcards = [], startQuiz } = useLearning();

    const flashcardCount = flashcards.length;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flashcard Practice</Text>

            <Text style={styles.subtitle}>
                Get ready for the quiz! You have {flashcardCount} flashcards to review.
            </Text>

            <View style={styles.cardInfoBox}>
                <Text style={styles.cardInfoNumber}>{flashcardCount}</Text>
                <Text style={styles.cardInfoLabel}>Flashcards</Text>
            </View>

            <Text style={styles.quote}>Ready to learn? 🚀</Text>

            <TouchableOpacity style={styles.button} onPress={startQuiz} disabled={flashcardCount === 0}>
                <Text style={styles.buttonText}>
                    {flashcardCount === 0 ? 'No Flashcards' : 'Start Learning'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LearningScreen;
