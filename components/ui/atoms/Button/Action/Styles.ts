import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});