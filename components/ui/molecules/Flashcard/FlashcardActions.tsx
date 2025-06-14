
import React from 'react';
import { Modal, TouchableOpacity, Text, View } from 'react-native';
import {FlashcardActionsProps} from "@/components/ui/molecules/Flashcard/types";
import {styles} from "@/components/ui/molecules/Flashcard/Styles";


const FlashcardActions: React.FC<FlashcardActionsProps> = ({ visible, onEdit, onDelete, onClose }) => (
    <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>
            <View style={styles.modal}>
                <TouchableOpacity onPress={onEdit}>
                    <Text style={styles.modalOption}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Text style={[styles.modalOption, { color: 'red' }]}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </Modal>
);

export default FlashcardActions;
