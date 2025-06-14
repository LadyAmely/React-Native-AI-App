import React from 'react';
import { Text} from 'react-native';
import {COLORS} from "@/constants/variables";
import {AnswerProps} from "@/components/ui/atoms/Item/AItem/types";
import {styles} from "@/components/ui/atoms/Item/AItem/Styles";


const Answer: React.FC<AnswerProps> = ({ answer }) => {
    return <Text style={[styles.answer, {color: COLORS.textPrimary}]}>{answer}</Text>;
};


export default Answer;
