import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


import { COLORS } from '@/constants/variables';
import GradientView from '@/components/ui/atoms/Gradient/GradientView';
import { styles } from './Styles';
import {CalendarButtonProps} from "@/components/ui/atoms/Button/Calendar/types";
import {Ionicons} from "@expo/vector-icons";


const CalendarButton: React.FC<CalendarButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonWrapper}>
            <GradientView
                colors={[COLORS.primary, COLORS.progressBackground]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.ButtonInner}
            >
                <Ionicons name="calendar-outline" size={24} color="white" />
            </GradientView>
        </TouchableOpacity>
    );
};

export default CalendarButton;