import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { HistoryEntry } from '@/types/historyEntry';
import {db} from "@/firebase/config";

export const useHistoryScreen = (userId: string = 'demoUser') => {
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'learningHistory'));

                const allEntries: HistoryEntry[] = snapshot.docs
                    .map(doc => doc.data() as HistoryEntry)
                    .filter(entry => entry.userId === userId)
                    .sort((a, b) => b.date.localeCompare(a.date));

                setHistory(allEntries);
            } catch (e) {
                console.error('Error loading history from Firestore:', e);
            } finally {
                setIsLoading(false);
            }
        };

        loadHistory();
    }, [userId]);

    return { history, isLoading };
};
