import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/variables';


export const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: COLORS.primary,
        fontFamily: 'System',
    },
});