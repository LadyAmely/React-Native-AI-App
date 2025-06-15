import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    header: {
        fontSize: 24,
        fontWeight: '800',
        color: COLORS.gradientStart,
        marginBottom: 28,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    list: {
        paddingBottom: 40,
    },
    challengeItem: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 20,
        padding: 24,
        marginBottom: 20,
        shadowColor: COLORS.shadowStrong,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 4,
    },
    completed: {
        backgroundColor: COLORS.gradientStart + '15',
        borderWidth: 1,
        borderColor: COLORS.gradientEnd,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.gradientStart,
        marginBottom: 10,
        letterSpacing: 0.3,
    },
    description: {
        fontSize: 15,
        color: COLORS.textSecondary,
        lineHeight: 22,
    },
});
