import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PlanModal = ({ visible, date, onClose, onSave }: {
    visible: boolean;
    date: string;
    onClose: () => void;
    onSave: (topic: string) => void;
}) => {
    const [topic, setTopic] = useState('');

    const handleSave = () => {
        if (topic.trim()) {
            onSave(topic.trim());
            setTopic('');
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Plan for {date}</Text>
                    <TextInput
                        placeholder="What will you study?"
                        style={styles.input}
                        value={topic}
                        onChangeText={setTopic}
                    />
                    <Button title="Save" onPress={handleSave} />
                    <Button title="Cancel" color="red" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        elevation: 5,
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
});

export default PlanModal;
