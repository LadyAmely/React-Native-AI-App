import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/variables';

export const styles = StyleSheet.create({
    container: {
        height: 8,
        backgroundColor: COLORS.progressBackground,
        borderRadius: 4,
        overflow: 'hidden',
    },
    bar: {
        height: 8,
        backgroundColor: COLORS.progressBar,
    },
});


