import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import {useQuizLogic} from "@/hooks/useQuizLogic";
import {styles} from "@/screens/Quiz/Styles";
import RevealButton from "@/components/ui/atoms/Button/Reveal/RevealButton";
import Options from "@/components/ui/molecules/Option/Options";

type QuizScreenRouteProp = RouteProp<RootStackParamList, 'QuizScreen'>;

const QuizScreen = () => {
    const route = useRoute<QuizScreenRouteProp>();
    const { flashcards } = route.params;

    const {
        currentIndex,
        currentCard,
        showAnswer,
        setShowAnswer,
        handleKnow,
        handleDontKnow,
    } = useQuizLogic(flashcards);

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>
                Flashcard {currentIndex + 1} z {flashcards.length}
            </Text>

            <Text style={styles.quizTitle}>Check your knowledge 📚</Text>

            <View style={styles.card}>
                <Text style={styles.question}>{currentCard.question}</Text>

                {showAnswer ? (
                    <>
                        <Text style={styles.answer}>{currentCard.answer}</Text>
                        <Text style={styles.subtleNote}>Did you know this answer?</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.hint}>
                            Try to answer it yourself and then discover the answer.
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => setShowAnswer(true)}>
                            <Text style={styles.buttonText}>Show answer</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            {!showAnswer ? (
                <RevealButton onReveal={() => setShowAnswer(true)} />
            ) : (
                <Options onKnow={handleKnow} onDontKnow={handleDontKnow} />
            )}
        </View>
    );
};

export default QuizScreen;
