import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDailyGoal } from '@/hooks/useDailyGoal';
import PrimaryButton from "@/components/ui/atoms/Button/Primary/PrimaryButton";
import Card from "@/components/ui/atoms/Card/Card";
import {styles} from "@/screens/Daily/DailyGoal/Styles";
import ProgressBar from "@/components/ui/atoms/Bar/ProgressBar/ProgressBar";

const DailyGoalScreen = () => {
    const { goal, completed, input, progress, setInput, handleSave } = useDailyGoal();

    return (
        <View>
            <Card>
                <Text style={styles.title}>Daily Goal</Text>
                <Text>Today's Progress: {completed} / {goal} cards</Text>
                <ProgressBar progress={progress} />
                {progress >= 1 && (
                    <Text style={styles.success}>Goal Reached!</Text>
                )}
            </Card>

            <Card>
                <Text style={styles.subtitle}>Edit Daily Goal</Text>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <PrimaryButton title="Save Goal" onPress={handleSave} />
            </Card>
        </View>
    );
};

export default DailyGoalScreen;
