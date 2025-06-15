import { useMemo, useState } from "react";

import { Alert } from "react-native";
import {StudyDates} from "@/types/studyDates";

export const useStudyCalendar = () => {
    const [studyDates] = useState<StudyDates>({
        '2025-06-01': { studied: true },
        '2025-06-02': { studied: true },
        '2025-06-05': { studied: true },
        '2025-06-07': { studied: true },
    });

    const markedDates = useMemo(() => {
        return Object.keys(studyDates).reduce((acc, date) => {
            acc[date] = {
                marked: true,
                dotColor: '#4caf50',
                selected: true,
                selectedColor: '#a5d6a7',
            };
            return acc;
        }, {} as any);
    }, [studyDates]);

    const handleDayPress = (dateString: string) => {
        const studied = !!studyDates[dateString];
        Alert.alert(
            dateString,
            studied ? 'You studied on this day' : 'No study activity on this day'
        );
    };

    return {
        markedDates,
        onDayPress: (day: { dateString: string }) => handleDayPress(day.dateString),
    };
};
