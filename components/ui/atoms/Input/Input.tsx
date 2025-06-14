import React from 'react';
import { TextInput } from 'react-native';


import { COLORS } from '@/constants/variables';


import { InputProps } from '@/components/ui/atoms/Input/types';


import { styles } from './Styles';


const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder }) => {

    return (
        <TextInput
            style={[
                styles.input,
                {
                    backgroundColor: COLORS.cardBackground,
                    borderColor: COLORS.borderColor,
                    color: COLORS.textPrimary,
                    shadowColor: COLORS.shadowColor,
                },
            ]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={COLORS.textSecondary}
        />

    );
};

export default Input;