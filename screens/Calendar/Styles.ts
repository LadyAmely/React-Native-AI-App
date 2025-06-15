import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const calendarStyles = StyleSheet.create({
    container: {
        padding: 16,
        top: 100,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: COLORS.textPrimary,
    },
});