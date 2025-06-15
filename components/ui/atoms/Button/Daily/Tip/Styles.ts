import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/variables';

export const styles = StyleSheet.create({
    ButtonWrapper: {
        position: 'absolute',
        top: 260,
        right: 20,
        elevation: 5,
        shadowColor: COLORS.shadowStrong,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        borderRadius: 32,
    },
    ButtonInner: {
        height: 60,
        width: 60,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.buttonText,
        letterSpacing: 1,
    },
});
