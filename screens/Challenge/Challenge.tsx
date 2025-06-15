import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {styles} from "@/screens/Challenge/Styles";
import {useChallenges} from "@/hooks/useChallenges";
import {CardItem} from "@/components/ui/atoms/Item/CItem/CardItem";
import {router} from "expo-router";
import GoalButton from "@/components/ui/atoms/Button/Daily/Goal/GoalButton";

export const ChallengeScreen = () => {
    const challenges = useChallenges();

    const goToDailyGoal =()=>{
      router.push('./goal');
    };

    return (
        <View style={styles.container}>
            <GoalButton onPress={goToDailyGoal}/>
            {!challenges ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={styles.header}>Your Challenges</Text>
                    <FlatList
                        data={challenges}
                        keyExtractor={(item) => item.id}
                        renderItem={CardItem}
                        contentContainerStyle={styles.list}
                    />
                </>
            )}
        </View>
    );
};

export default ChallengeScreen;
