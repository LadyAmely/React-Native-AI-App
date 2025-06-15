import React from 'react';
import {ScrollView, Text} from "react-native";
import {styles} from "@/screens/Achievement/Styles";
import Card from "@/components/ui/atoms/Card/Card";
import ProgressBar from "@/components/ui/atoms/Bar/ProgressBar/ProgressBar";
import {useAchievement} from "@/hooks/useAchievement";
import RewardButton from "@/components/ui/atoms/Button/Reward/RewardButton";
import {router} from "expo-router";


const AchievementScreen = () => {
    const achievements = useAchievement();

    const goToReward =()=>{
        router.push('./reward');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 16 }}>
        <RewardButton onPress={goToReward}/>
            {achievements?.map((ach) => {
                const progress = ach.current / ach.target;
                return (
                    <Card key={ach.id}>
                        <Text style={styles.title}>{ach.title}</Text>
                        <Text style={styles.description}>{ach.description}</Text>
                        <ProgressBar progress={progress} />
                        <Text style={styles.progressText}>
                            {ach.unlocked ? 'Unlocked' : `${Math.round(progress * 100)}%`}
                        </Text>
                    </Card>
                );
            })}
        </ScrollView>
    );
};

export default AchievementScreen;