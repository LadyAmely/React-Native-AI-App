import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {styles} from "@/screens/Challenge/Styles";
import {useChallenges} from "@/hooks/useChallenges";
import {CardItem} from "@/components/ui/atoms/Item/CItem/CardItem";

export const ChallengeScreen = () => {
    const challenges = useChallenges();

    return (
        <View style={styles.container}>
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
