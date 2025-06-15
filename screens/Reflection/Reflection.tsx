import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { Reflection } from '@/types/reflection';
import {styles} from "@/screens/Reflection/Styles";
import {useReflection} from "@/hooks/useReflection";

export const ReflectionScreen = () => {
    const {
        text,
        setText,
        mood,
        setMood,
        entries,
        saveReflection,
    } = useReflection();

    const renderItem = ({ item }: { item: Reflection }) => (
        <View style={styles.entryItem}>
            <Text style={styles.entryDate}>{item.date} • Mood: {item.mood}/5</Text>
            <Text style={styles.entryText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Daily Reflection</Text>

            <Text style={styles.label}>How do you feel today? (1–5)</Text>
            <View style={styles.moodRow}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <TouchableOpacity
                        key={num}
                        style={[styles.moodButton, mood === num && styles.moodSelected]}
                        onPress={() => setMood(num)}
                    >
                        <Text style={styles.moodText}>{num}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>What’s worth remembering from today?</Text>
            <TextInput
                style={styles.textInput}
                multiline
                placeholder="Write your reflection..."
                value={text}
                onChangeText={setText}
            />

            <TouchableOpacity style={styles.saveButton} onPress={saveReflection}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>

            <Text style={styles.subheader}>Your entries</Text>
            <FlatList
                data={entries}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 40 }}
            />
        </View>
    );
};

export default ReflectionScreen;
