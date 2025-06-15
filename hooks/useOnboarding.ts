import { useRef, useState } from 'react';
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import {SLIDES} from "@/screens/Onboarding/slides";

const { width } = Dimensions.get('window');

type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

export const useOnboarding = () => {
    const navigation = useNavigation<NavigationProp>();
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scale = useSharedValue(1);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(slideIndex);
        scale.value = 0.9;
        scale.value = withSpring(1, { damping: 10 });
    };

    const handleButtonPress = () => {
        if (currentIndex < SLIDES.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate('MainScreen');
        }
    };

    return {
        flatListRef,
        currentIndex,
        setCurrentIndex,
        scale,
        onScroll,
        handleButtonPress,
        width,
    };
};
