import React from 'react';
import { View, Button } from 'react-native';
import { styles } from './Styles';
import { useSummaryParams } from '@/hooks/useSummaryParams';
import Headline from "@/components/ui/atoms/Text/Headline/Headline";
import SummaryStats from "@/screens/Summary/SummaryStats";


const SummaryScreen = () => {
    const { category, correctAnswers, totalQuestions } = useSummaryParams();

    return (
        <View style={styles.container}>
            <Headline>Learning Summary: {category}</Headline>

            <SummaryStats
                correctAnswers={correctAnswers}
                totalQuestions={totalQuestions}
                studyTime="15 minutes"
            />

            <Button
                title="Start the quiz"
                onPress={() => {
                    // TODO: Add navigation logic here
                }}
            />
        </View>
    );
};

export default SummaryScreen;
