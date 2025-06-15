import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import {styles} from "@/screens/Onboarding/Styles";
import {OnboardingSlideProps} from "@/screens/Onboarding/types";


const { width } = Dimensions.get('window');

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ title, subtitle }) => (
    <View style={[styles.slide, { width }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);

export default OnboardingSlide;
