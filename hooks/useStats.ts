import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DailyStat, StatsModel } from '@/models/statsModel';
import { FlashcardModel } from '@/models/flashcardModel';
import { RootStackParamList } from '@/types/navigation';
import { db } from '@/firebase/config';

type NavigationProp = StackNavigationProp<RootStackParamList, 'StatsScreen'>;

export const useStats = () => {
    const [stats, setStats] = useState<DailyStat[]>([]);
    const [knownFlashcards, setKnownFlashcards] = useState<string[]>([]);
    const [totalFlashcardsCount, setTotalFlashcardsCount] = useState<number>(0);

    const navigation = useNavigation<NavigationProp>();
    const statsModel = new StatsModel();
    const flashcardModel = new FlashcardModel();

    const totalAnswers = stats.reduce((acc, s) => acc + s.total, 0);
    const correctAnswers = stats.reduce((acc, s) => acc + s.correct, 0);
    const wrongAnswers = totalAnswers - correctAnswers;

    const knownCount = correctAnswers;
    const remaining = Math.max(0, wrongAnswers);

    const labels = stats.map(s => s.date.slice(5));
    const data = stats.map(s => s.correct);

    useEffect(() => {
        const loadData = async () => {
            try {
                const firebaseStats = await statsModel.fetchStats();
                setStats(firebaseStats);

                const knownJson = await AsyncStorage.getItem('knownFlashcards');
                if (knownJson) setKnownFlashcards(JSON.parse(knownJson));

                const allFlashcards = await flashcardModel.fetchFlashcards();
                setTotalFlashcardsCount(allFlashcards.length);

                const correct = firebaseStats.reduce((acc, s) => acc + s.correct, 0);
                const today = new Date().toISOString().slice(0, 10);

                if (correct > 0) {
                    const userId = 'demoUser';
                    const ref = doc(db, 'learningHistory', `${userId}_${today}`);

                    await setDoc(ref, {
                        date: today,
                        learned: correct,
                        userId,
                        timestamp: new Date(),
                    });

                    console.log('Stats successfully saved to Firestore');
                }
            } catch (error) {
                console.error('Error while loading/saving stats:', error);
            }
        };

        loadData();
    }, []);

    const handleResetAndBack = async () => {
        try {
            await statsModel.clearStats();
            await AsyncStorage.removeItem('knownFlashcards');
            navigation.navigate('MainScreen');
        } catch (error) {
            Alert.alert('Error', 'Failed to reset statistics');
        }
    };

    return {
        stats,
        labels,
        data,
        correctAnswers,
        wrongAnswers,
        knownCount,
        remaining,
        handleResetAndBack,
    };
};
