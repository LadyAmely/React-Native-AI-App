import React from 'react';
import { View, FlatList } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useOnboarding } from '@/hooks/useOnboarding';
import ActionButton from '@/components/ui/atoms/Button/Action/ActionButton';
import { SLIDES } from '@/screens/Onboarding/slides';
import { styles } from '@/screens/Onboarding/Styles';
import OnboardingSlide from "@/screens/Onboarding/OnboardingSlide";


const OnboardingScreen = () => {
    const {
        flatListRef,
        currentIndex,
        onScroll,
        handleButtonPress,
        scale,
        width,
    } = useOnboarding();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={SLIDES}
                renderItem={({ item }) => (
                    <OnboardingSlide title={item.title} subtitle={item.subtitle} />
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                onScroll={onScroll}
                scrollEventThrottle={16}
            />
            <Animated.View style={animatedStyle}>
                <ActionButton
                    label={currentIndex === SLIDES.length - 1 ? 'Let’s Start!' : 'Next'}
                    onPress={handleButtonPress}
                />
            </Animated.View>
        </View>
    );
};

export default OnboardingScreen;
