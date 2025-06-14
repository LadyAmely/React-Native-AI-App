import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {styles} from "@/components/ui/molecules/Option/Styles";

const Options = ({
                           onKnow,
                           onDontKnow,
                       }: {
    onKnow: () => void;
    onDontKnow: () => void;
}) => (
    <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onKnow}>
            <Text style={styles.buttonText}>I know</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDontKnow}>
            <Text style={styles.buttonText}>I don't know</Text>
        </TouchableOpacity>
    </View>
);

export default Options;
