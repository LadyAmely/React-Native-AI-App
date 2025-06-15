import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: COLORS.gradientStart,
        marginBottom: 24,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    entry: {
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 16,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    gradient: {
        paddingVertical: 18,
        paddingHorizontal: 22,
        borderRadius: 20,
    },
    date: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    detail: {
        fontSize: 14,
        color: '#FFFFFFCC',
        marginTop: 6,
        lineHeight: 20,
    },
    emptyMessage: {
        textAlign: 'center',
        color: COLORS.textSecondary,
        fontSize: 16,
        marginTop: 30,
    },
});
