import React, {useState} from 'react';
import { View, Text} from 'react-native';
import Card from "@/components/ui/atoms/Card/Card";
import {calendarStyles} from "@/screens/Calendar/Styles";
import {useStudyCalendar} from "@/hooks/useStudyCalendar";
import {calendarTheme} from "@/assets/theme/Calendar/calendarTheme";
import {Calendar} from "react-native-calendars";
import PlanModal from "@/components/ui/molecules/Modal/Planned/PlanModal";


const CalendarScreen = () => {
    const {markedDates, onDayPress} = useStudyCalendar();
    const [selectedDate, setSelectedDate] = React.useState<string | null>(null);


    const [studyPlans, setStudyPlans] = useState<Record<string, { topic: string }>>({});
    const savePlan = (date: string, topic: string) => {
        setStudyPlans((prev) => ({
            ...prev,
            [date]: { topic },
        }));
    };
    return (
        <View style={calendarStyles.container}>
            <Card>
                <Text style={calendarStyles.headerText}>Learning Calendar</Text>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={onDayPress}
                    theme={calendarTheme}
                />
                <PlanModal
                    visible={!!selectedDate}
                    date={selectedDate ?? ''}
                    onClose={() => setSelectedDate(null)}
                    onSave={(topic) => savePlan(selectedDate!, topic)}
                />

            </Card>
        </View>
    );
};

export default CalendarScreen;