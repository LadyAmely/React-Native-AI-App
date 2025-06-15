import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import {styles} from "@/screens/Onboarding/Styles";
import {OnboardingSlideProps} from "@/screens/Onboarding/types";


const { width } = Dimensions.get('window');

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ title, subtitle, image }) => (
    <View style={[styles.slide, { width }]}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);

export default OnboardingSlide;
