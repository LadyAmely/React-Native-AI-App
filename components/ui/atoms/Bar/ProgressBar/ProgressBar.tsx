import React from 'react';
import {View} from 'react-native';
import {styles} from "@/components/ui/atoms/Bar/ProgressBar/Styles";

const ProgressBar = ({ progress }: { progress: number }) => (
    <View style={styles.container}>
        <View style={[styles.bar, { width: `${Math.min(progress * 100, 100)}%` }]} />
    </View>
);

export default ProgressBar;