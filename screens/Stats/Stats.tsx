import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import {useStats} from "@/hooks/useStats";
import {styles} from "@/screens/Stats/Styles";
import {COLORS} from "@/constants/variables";
import { BarChart } from 'react-native-chart-kit';


const StatsScreen = () => {
    const {
        labels,
        data,
        correctAnswers,
        wrongAnswers,
        knownCount,
        remaining,
        handleResetAndBack,
    } = useStats();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Statistics</Text>

            <Text style={styles.text}>Known: {correctAnswers}</Text>
            <Text style={styles.text}>Unknown: {wrongAnswers}</Text>
            <Text style={styles.text}>Mastered Flashcards: {knownCount}</Text>
            <Text style={styles.text}>To Learn: {remaining}</Text>

            <BarChart
                data={{
                    labels: ['Known', 'Unknown', 'Mastered', 'To Learn'],
                    datasets: [
                        {
                            data: [correctAnswers, wrongAnswers, knownCount, remaining],
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 40}
                height={250}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                    backgroundColor: '#f5f9ff',
                    backgroundGradientFrom: '#f5f9ff',
                    backgroundGradientTo: '#dceeff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(54, 94, 222, ${opacity})`,
                    labelColor: () => COLORS.textPrimary,
                    barPercentage: 0.6,
                }}
                style={{
                    marginTop: 40,
                    borderRadius: 16,
                }}
                verticalLabelRotation={0}
            />

            <TouchableOpacity style={styles.resetButton} onPress={handleResetAndBack}>
                <Text style={styles.resetButtonText}>Reset Stats</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StatsScreen;
