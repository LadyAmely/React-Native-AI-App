import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { FabButtonProps } from '@/components/ui/atoms/Button/Fab/types';
import GradientView from '@/components/ui/atoms/Gradient/GradientView';

import { styles } from './Styles';

const FabButton: React.FC<FabButtonProps> = ({ onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.fabWrapper}>
            <GradientView style={styles.fabInner}>
                <Text style={styles.fabText}>+</Text>
            </GradientView>
        </TouchableOpacity>
    );
};


export default FabButton;