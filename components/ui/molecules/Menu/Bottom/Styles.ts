import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 12,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
    },
});
