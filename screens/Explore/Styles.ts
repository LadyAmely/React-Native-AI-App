import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 16,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 20,
    },
    card: {
        marginBottom: 20,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: COLORS.shadowColor,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    cardContent: {
        padding: 16,
    },
    tag: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.primary,
        marginBottom: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: COLORS.textSecondary,
        lineHeight: 20,
    },
});
