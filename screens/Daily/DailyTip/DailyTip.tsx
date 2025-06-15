import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from "@/screens/Daily/DailyTip/Styles";
import PrimaryButton from "@/components/ui/atoms/Button/Primary/PrimaryButton";
import Content from "@/components/ui/atoms/Text/Content/Content";
import {useDailyTip} from "@/hooks/useDailyTip";
import {COLORS} from "@/constants/variables";

export const DailyTipScreen = () => {
    const {todayTip, handleRefresh, loading} = useDailyTip();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Today's tip</Text>
            {loading ? (
                <ActivityIndicator size="large" color={COLORS.primary} style={{ marginVertical: 24 }} />
            ) : (
                <Content>{todayTip}</Content>
            )}
            <PrimaryButton onPress={handleRefresh} title="New random tip"/>
        </View>
    );
};

export default DailyTipScreen;
