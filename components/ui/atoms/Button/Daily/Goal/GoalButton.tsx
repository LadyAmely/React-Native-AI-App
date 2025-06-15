import { COLORS } from '@/constants/variables';
import GradientView from '@/components/ui/atoms/Gradient/GradientView';
import { styles } from './Styles';
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import {GoalButtonProps} from "@/components/ui/atoms/Button/Daily/Goal/types";


const GoalButton: React.FC<GoalButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonWrapper}>
            <GradientView
                colors={[COLORS.primary, COLORS.warning]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.ButtonInner}
            >
                <Ionicons name="trophy-outline" size={24} color="white" />
            </GradientView>
        </TouchableOpacity>
    );
};

export default GoalButton;