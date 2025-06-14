import React from 'react';
import { Text} from 'react-native';
import {QuestionProps} from "@/components/ui/atoms/Item/QItem/types";




const Question: React.FC<QuestionProps> = ({ question }) => {
    return <Text>{question}</Text>;
};


export default Question;