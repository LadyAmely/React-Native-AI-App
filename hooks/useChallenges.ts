import { useEffect, useState } from 'react';
import { Challenge } from '../types/challenge';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "@/firebase/config";


export const useChallenges = () => {
    const [challenges, setChallenges] = useState<Challenge[] | null>(null);

    useEffect(() => {
        getDocs(collection(db, 'challenges'))
            .then((snapshot) => {
                setChallenges(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as Challenge[]
                );
            })
            .catch((err) => console.error('Challenge download error', err));
    }, []);

    return challenges;
};
