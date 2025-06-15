import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 20,
        textAlign: 'center',
    },
    emptyMessage: {
        textAlign: 'center',
        color: COLORS.textSecondary,
        fontSize: 16,
        marginTop: 30,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 24,
        padding: 24,
        width: '90%',
        shadowColor: COLORS.shadowStrong,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    button: {
        borderRadius: 32,
        marginTop: 20,
        marginBottom: 80,
        overflow: 'hidden',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    gradient: {
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.8,
    },
});
