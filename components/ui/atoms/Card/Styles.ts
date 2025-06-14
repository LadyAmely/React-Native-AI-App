import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        padding: 20,
        margin: 15,
        elevation: 5,
        width: "auto",
        minHeight: 250,
        maxHeight: 400,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        overflow: 'hidden',
    },
});
