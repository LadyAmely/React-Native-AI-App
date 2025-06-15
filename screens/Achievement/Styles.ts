import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.gradientStart,
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginBottom: 16,
        lineHeight: 22,
    },
    progressText: {
        marginTop: 6,
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.gradientEnd,
    },
});
