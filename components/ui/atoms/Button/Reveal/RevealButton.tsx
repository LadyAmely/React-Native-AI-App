import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from "@/components/ui/atoms/Button/Reveal/Styles";


const RevealButton = ({ onReveal }: { onReveal: () => void }) => (
    <TouchableOpacity style={styles.button} onPress={onReveal}>
        <Text style={styles.buttonText}>Display Answer</Text>
    </TouchableOpacity>
);

export default RevealButton;
