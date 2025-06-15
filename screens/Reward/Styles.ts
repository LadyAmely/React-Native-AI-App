import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        paddingTop: 24,
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
    rewardItem: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    claimed: {
        backgroundColor: COLORS.success + '20',
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
    claimedText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.success,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
