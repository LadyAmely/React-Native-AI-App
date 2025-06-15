import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 24,
        textAlign: 'center',
        color: COLORS.textPrimary,
    },
});