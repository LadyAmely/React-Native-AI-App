import { COLORS } from '@/constants/variables';
import GradientView from '@/components/ui/atoms/Gradient/GradientView';
import { styles } from './Styles';
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import {TipButtonProps} from "@/components/ui/atoms/Button/Daily/Tip/types";


const TipButton: React.FC<TipButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.ButtonWrapper}>
            <GradientView
                colors={[COLORS.primary, COLORS.progressBackground]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.ButtonInner}
            >
                <Ionicons name="sparkles-outline" size={24} color="white" />
            </GradientView>
        </TouchableOpacity>
    );
};

export default TipButton;