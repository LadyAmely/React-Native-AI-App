import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from "@/components/ui/atoms/Button/Save/Styles";
import {SaveButtonProps} from "@/components/ui/atoms/Button/Save/types";


const SaveButton: React.FC<SaveButtonProps> = ({ onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Save profile</Text>
    </TouchableOpacity>
);

export default SaveButton;
