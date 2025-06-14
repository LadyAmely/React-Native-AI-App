
import React from 'react';
import { ButtonProps, Text, TouchableOpacity } from 'react-native';

import { styles } from './Styles';


const PrimaryButton: React.FC<ButtonProps> = ({ onPress, title }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};


export default PrimaryButton;