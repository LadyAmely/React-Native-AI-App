import React from 'react';
import { Text} from 'react-native';
import {COLORS} from "@/constants/variables";
import {styles} from "@/components/ui/atoms/Text/Title/Styles";


const Title: React.FC = () => {
    return <Text style={[styles.title, {color: COLORS.textPrimary}]}>FlashLearn</Text>;
};


export default Title;