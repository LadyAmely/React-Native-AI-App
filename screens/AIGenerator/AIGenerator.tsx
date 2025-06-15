import React from 'react';
import { View, Text, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import Card from "@/components/ui/atoms/Card/Card";
import PrimaryButton from "@/components/ui/atoms/Button/Primary/PrimaryButton";
import {Styles} from "@/screens/AIGenerator/Styles";
import {useAIPrompt} from "@/hooks/useAIPrompt";

const AIGeneratorScreen = () => {
    const {topic, setTopic, handleGenerate, loading, flashcards} = useAIPrompt();

    return (
        <ScrollView contentContainerStyle={Styles.scrollContent}>
            <LinearGradient
                colors={['#A26CF1', '#FF6B81']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={Styles.cardGradient}
            >
                <Text style={Styles.title}>AI Flashcard Generator</Text>
                <TextInput
                    value={topic}
                    onChangeText={setTopic}
                    placeholder="Enter a subject"
                    placeholderTextColor="#f0d9ff"
                    style={[Styles.input, { color: 'rgba(29,37,51,0.94)', borderColor: '#fff' }]}
                />
                <PrimaryButton onPress={handleGenerate} title="Generate flashcards" />
            </LinearGradient>
            {loading && (
                <View style={Styles.loadingContainer}>
                    <ActivityIndicator size="large" />
                    <Text style={Styles.loadingText}>Generating flashcards...</Text>
                </View>
            )}

            {flashcards.map((card, index) => (
                <Card key={index}>
                    <Text style={Styles.cardLabel}>Question:</Text>
                    <Text>{card.question}</Text>
                    <Text style={Styles.cardLabel}>Answer:</Text>
                    <Text>{card.answer}</Text>
                </Card>
            ))}
        </ScrollView>
    );
};

export default AIGeneratorScreen;