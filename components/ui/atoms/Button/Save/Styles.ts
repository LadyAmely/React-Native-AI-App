import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
