
import {Button, Text, View} from "react-native";
import React from "react";
import {RewardCardProps} from "@/components/ui/atoms/Card/Reward/types";
import {styles} from "@/screens/Reward/Styles";

export const RewardCard: React.FC<RewardCardProps> = ({ item, handleClaim }) => (
    <View style={[styles.rewardItem, item.claimed && styles.claimed]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {item.claimed ? (
            <Text style={styles.claimedText}>Received</Text>
        ) : (
            <Button title="Receive" onPress={() => handleClaim(item.id)} />
        )}
    </View>
);