import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 24,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 32,
    },
    challengeItem: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    completed: {
        backgroundColor: COLORS.success + '22',
        borderWidth: 1,
        borderColor: COLORS.success,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        color: COLORS.textSecondary,
        lineHeight: 20,
    },
});
