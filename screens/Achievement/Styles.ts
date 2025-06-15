import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginBottom: 12,
        lineHeight: 20,
    },
    progressText: {
        marginTop: 4,
        fontSize: 14,
        color: COLORS.success,
        fontWeight: '600',
    },
});
