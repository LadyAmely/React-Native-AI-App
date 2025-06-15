import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";

export const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: COLORS.cardBackground,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: COLORS.textPrimary,
        marginVertical: 12,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
});
