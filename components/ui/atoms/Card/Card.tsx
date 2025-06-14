import React from 'react';
import { View} from 'react-native';
import {COLORS} from "@/constants/variables";
import {CardProps} from "@/components/ui/atoms/Card/types";
import {styles} from "@/components/ui/atoms/Card/Styles";


const Card: React.FC<CardProps> = ({ children }) => {
    return <View style={[styles.card, {backgroundColor: COLORS.cardBackground, shadowColor: COLORS.shadowColor }]}>{children}</View>;
};


export default Card;