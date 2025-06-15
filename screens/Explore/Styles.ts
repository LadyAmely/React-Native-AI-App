import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: '800',
        color: COLORS.gradientStart,
        marginBottom: 20,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    list: {
        paddingBottom: 30,
    },
    card: {
        marginBottom: 20,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: COLORS.shadowStrong,
        shadowOpacity: 0.12,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    cardContent: {
        padding: 18,
    },
    tag: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.gradientEnd,
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    title: {
        fontSize: 19,
        fontWeight: '800',
        color: COLORS.textPrimary,
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: COLORS.textSecondary,
        lineHeight: 22,
    },
});
