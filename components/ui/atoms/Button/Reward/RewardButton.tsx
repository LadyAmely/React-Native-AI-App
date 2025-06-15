import { COLORS } from '@/constants/variables';


import GradientView from '@/components/ui/atoms/Gradient/GradientView';

import { styles } from './Styles';
import {TouchableOpacity} from "react-native";
import {RewardButtonProps} from "@/components/ui/atoms/Button/Reward/types";
import {Ionicons} from "@expo/vector-icons";
import React from "react";


const RewardButton: React.FC<RewardButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonWrapper}>
            <GradientView
                colors={[COLORS.primary, COLORS.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.ButtonInner}
            >
                <Ionicons name="medal-outline" size={24} color="white" />
            </GradientView>
        </TouchableOpacity>
    );
};

export default RewardButton;