import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {Achievement} from "@/types/achievement";
import {db} from "@/firebase/config";


export const useAchievement =()=>{
    const [achievements, setAchievements] = useState<Achievement[] | null>(null);

    useEffect(() => {
        getDocs(collection(db, 'achievements'))
            .then((snapshot) => {
                setAchievements(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as Achievement[]
                );
            })
            .catch((err) => console.error('Achievement download error', err));
    }, []);

    return achievements;
}