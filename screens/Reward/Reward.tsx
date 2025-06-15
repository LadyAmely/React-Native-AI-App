import React from 'react';
import { View, Text, FlatList} from 'react-native';
import {useReward} from "@/hooks/useReward";
import {Reward} from "@/types/reward";
import {styles} from "@/screens/Reward/Styles";
import {RewardCard} from "@/components/ui/atoms/Card/Reward/RewardCard";

const RewardScreen = () => {
    const { rewards, handleClaim } = useReward({});

    const renderItem = ({ item }: { item: Reward }) => (
        <RewardCard item={item} handleClaim={handleClaim} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your rewards</Text>
            <FlatList
                data={rewards}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default RewardScreen;
