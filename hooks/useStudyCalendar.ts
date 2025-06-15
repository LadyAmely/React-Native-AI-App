import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { StudyDates } from "@/types/studyDates";
import {db} from "@/firebase/config";

export const useStudyCalendar = () => {
    const userId = "demoUser";

    const [studyDates, setStudyDates] = useState<StudyDates>({});
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    useEffect(() => {
        const fetchDates = async () => {
            const snapshot = await getDocs(collection(db, "studyPlans"));
            const result: StudyDates = {};
            snapshot.forEach(docSnap => {
                const data = docSnap.data();
                if (data.userId === userId) {
                    result[data.date] = { studied: !!data.studied, plannedTopic: data.plannedTopic };
                }
            });
            setStudyDates(result);
        };
        fetchDates();
    }, []);

    const markedDates = useMemo(() => {
        return Object.keys(studyDates).reduce((acc, date) => {
            const studied = studyDates[date]?.studied;
            acc[date] = {
                marked: true,
                selected: true,
                dotColor: studied ? "#4caf50" : "#fbc02d",
                selectedColor: studied ? "#a5d6a7" : "#fff59d",
            };
            return acc;
        }, {} as any);
    }, [studyDates]);

    const openPlanModal = (dateString: string) => {
        setSelectedDate(dateString);
    };

    const savePlan = async (date: string, topic: string) => {
        await setDoc(doc(db, "studyPlans", `${userId}_${date}`), {
            userId,
            date,
            plannedTopic: topic,
            studied: false,
        });

        setStudyDates(prev => ({
            ...prev,
            [date]: { studied: false, plannedTopic: topic },
        }));

        setSelectedDate(null);
    };

    return {
        markedDates,
        selectedDate,
        setSelectedDate,
        onDayPress: (day: { dateString: string }) => openPlanModal(day.dateString),
        savePlan,
    };
};
