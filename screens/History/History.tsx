import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {styles} from "@/screens/History/Styles";
import {useHistoryScreen} from "@/hooks/useHistory";
import {LinearGradient} from "expo-linear-gradient";

const HistoryScreen = () => {
    const { history, isLoading } = useHistoryScreen('demoUser');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Study Journal</Text>

            {isLoading ? (
                <Text style={styles.detail}>Loading...</Text>
            ) : history.length === 0 ? (
                <Text style={styles.detail}>No history found</Text>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {history.map((entry, index) => (
                        <View key={index} style={styles.entry}>
                            <LinearGradient
                                colors={['#6C63FF', '#42A5F5']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.gradient}
                            >
                                <Text style={styles.date}>{entry.date}</Text>
                                <Text style={styles.detail}>Learned flashcards: {entry.learned}</Text>
                            </LinearGradient>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default HistoryScreen;
