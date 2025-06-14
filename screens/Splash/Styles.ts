import { StyleSheet } from 'react-native';
import {COLORS} from "@/constants/variables";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    innerContainer: {
        width: '100%',
        maxWidth: 400,
        height: 300,
        backgroundColor: COLORS.transparentBackground,
        borderRadius: 0,
        elevation: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});



