
import React from 'react';
import { Text, View } from 'react-native';
import {Props} from "@/screens/Summary/types";
import {styles} from "@/screens/Summary/Styles";



const SummaryStats: React.FC<Props> = ({ correctAnswers, totalQuestions, studyTime }) => (
    <View>
        <Text style={styles.text}>
            Memorized flashcards: {correctAnswers}/{totalQuestions}
        </Text>
        <Text style={styles.text}>Study time: {studyTime}</Text>
    </View>
);

export default SummaryStats;
