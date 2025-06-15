import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const Styles = StyleSheet.create({
    scrollContent: {
        padding: 20,
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 16,
        color: COLORS.textPrimary,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: COLORS.cardBackground,
        color: COLORS.textInverse,
    },
    loadingContainer: {
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.textSecondary,
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 4,
        color: COLORS.textPrimary,
    },
    cardGradient: {
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },

});
