import React from 'react';


import { Text, TouchableOpacity } from 'react-native';


import { COLORS } from '@/constants/variables';
import { ActionButtonProps } from '@/components/ui/atoms/Button/Action/types';


import { styles } from './Styles';


const ActionButton: React.FC<ActionButtonProps> = ({ onPress, label }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: COLORS.primary,
                    shadowColor: COLORS.shadowColor,
                },
            ]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: COLORS.buttonText }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default ActionButton;
