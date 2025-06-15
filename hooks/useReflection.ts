
import { useState } from 'react';
import { Alert } from 'react-native';
import { Reflection } from '@/types/reflection';

export const useReflection = () => {
    const [text, setText] = useState('');
    const [mood, setMood] = useState<number | null>(null);
    const [entries, setEntries] = useState<Reflection[]>([]);

    const saveReflection = () => {
        if (!text || mood === null) {
            Alert.alert('Fill everything in', 'Entry and mood are required.');
            return;
        }

        const newEntry: Reflection = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString(),
            text,
            mood,
        };

        setEntries([newEntry, ...entries]);
        setText('');
        setMood(null);
        Alert.alert('Saved!', 'Your reflection has been added.');
    };

    return {
        text,
        setText,
        mood,
        setMood,
        entries,
        saveReflection,
    };
};
