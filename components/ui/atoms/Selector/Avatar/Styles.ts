import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: COLORS.primary,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    tapToChangeText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 6,
        color: COLORS.textSecondary,
    },
});
