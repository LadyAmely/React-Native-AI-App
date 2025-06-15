import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


import { COLORS } from '@/constants/variables';


import GradientView from '@/components/ui/atoms/Gradient/GradientView';
import { AIButtonProps } from '@/components/ui/atoms/Button/AI/types';


import { styles } from './Styles';


const AIButton: React.FC<AIButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.aiButtonWrapper}>
            <GradientView
                colors={[COLORS.primary, COLORS.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.aiButtonInner}
            >
                <Text style={styles.aiButtonText}>AI</Text>
            </GradientView>
        </TouchableOpacity>
    );
};

export default AIButton;
