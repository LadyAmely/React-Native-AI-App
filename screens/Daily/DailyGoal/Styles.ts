import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: COLORS.gradientStart,
        marginBottom: 12,
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1.5,
        borderColor: COLORS.gradientStart,
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: COLORS.cardBackground,
        color: COLORS.textPrimary,
        fontWeight: '600',
        shadowColor: COLORS.shadowColor,
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    success: {
        color: COLORS.success,
        marginTop: 12,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 0.3,
    },
});
