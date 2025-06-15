import React from 'react';
import {View, Text} from 'react-native';
import {styles} from "@/screens/Daily/DailyTip/Styles";
import PrimaryButton from "@/components/ui/atoms/Button/Primary/PrimaryButton";
import Content from "@/components/ui/atoms/Text/Content/Content";
import {useDailyTip} from "@/hooks/useDailyTip";

export const DailyTipScreen = () => {
    const {todayTip, handleRefresh} = useDailyTip();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Today's tip</Text>
            <Content>
                {todayTip}
            </Content>
            <PrimaryButton onPress={handleRefresh} title="New random tip"/>
        </View>
    );
};

export default DailyTipScreen;
