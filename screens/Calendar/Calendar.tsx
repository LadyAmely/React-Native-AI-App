import React from 'react';
import { View, Text} from 'react-native';
import Card from "@/components/ui/atoms/Card/Card";
import {calendarStyles} from "@/screens/Calendar/Styles";
import {useStudyCalendar} from "@/hooks/useStudyCalendar";
import {calendarTheme} from "@/assets/theme/Calendar/calendarTheme";
import {Calendar} from "react-native-calendars";


const CalendarScreen = () => {
    const {markedDates, onDayPress} = useStudyCalendar();
    return (
        <View style={calendarStyles.container}>
            <Card>
                <Text style={calendarStyles.headerText}>Learning Calendar</Text>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={onDayPress}
                    theme={calendarTheme}
                />
            </Card>
        </View>
    );
};

export default CalendarScreen;