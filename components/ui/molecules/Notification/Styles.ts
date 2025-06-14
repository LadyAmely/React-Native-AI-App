import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";

export const styles = StyleSheet.create({
    notificationItem: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    read: {
        backgroundColor: COLORS.hover,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 6,
    },
    message: {
        fontSize: 14,
        color: COLORS.textSecondary,
        lineHeight: 20,
    },
});
