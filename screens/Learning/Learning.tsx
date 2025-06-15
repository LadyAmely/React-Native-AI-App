// src/screens/Learning/LearningScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useLearning} from "@/hooks/useLearning";
import {styles} from "@/screens/Learning/Styles";


const LearningScreen = () => {
    const { flashcards, startQuiz } = useLearning();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flashcard Practice</Text>

            <Text style={styles.subtitle}>
                Get ready for the quiz! You have {flashcards.length} flashcards to review.
            </Text>

            <View style={styles.cardInfoBox}>
                <Text style={styles.cardInfoNumber}>{flashcards.length}</Text>
                <Text style={styles.cardInfoLabel}>Flashcards</Text>
            </View>

            <Text style={styles.quote}>Ready to learn? 🚀</Text>

            <TouchableOpacity style={styles.button} onPress={startQuiz}>
                <Text style={styles.buttonText}>Start Learning</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LearningScreen;
