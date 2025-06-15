import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 6,
    },
    moodRow: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    moodButton: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginRight: 8,
        borderRadius: 6,
        width: 40,
        alignItems: 'center',
    },
    moodSelected: {
        backgroundColor: '#c0eaff',
    },
    moodText: {
        fontWeight: '600',
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: 12,
    },
    saveButton: {
        backgroundColor: '#4da6ff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: '700',
    },
    subheader: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
    },
    entryItem: {
        backgroundColor: '#f7f7f7',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    entryDate: {
        fontSize: 12,
        color: '#777',
        marginBottom: 4,
    },
    entryText: {
        fontSize: 14,
        color: '#333',
    },
});
