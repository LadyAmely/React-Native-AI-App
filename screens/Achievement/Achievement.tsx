import React from 'react';
import {ScrollView, Text} from "react-native";
import {styles} from "@/screens/Achievement/Styles";
import Card from "@/components/ui/atoms/Card/Card";
import ProgressBar from "@/components/ui/atoms/Bar/ProgressBar/ProgressBar";
import {useAchievement} from "@/hooks/useAchievement";


const AchievementScreen = () => {
    const achievements = useAchievement();

    return (
        <ScrollView style={styles.container}>
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