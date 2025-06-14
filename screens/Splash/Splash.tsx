import React from 'react';
import { View } from 'react-native';

import GradientView from '@/components/ui/atoms/Gradient/GradientView';
import Content from '@/components/ui/atoms/Text/Content/Content';
import ActionButton from '@/components/ui/atoms/Button/Action/ActionButton';
import { styles } from './Styles';

import {useStartApp} from "@/hooks/useStartApp";


const SplashScreen: React.FC = () => {

    const handleStartClick = useStartApp();

    return (
        <GradientView style={styles.container}>
            <View style={styles.innerContainer}>
                <Content>
                    Welcome to FlashLearn! Start learning and learn new things every day!
                </Content>
                <ActionButton onPress={handleStartClick} label="Start learning"/>
            </View>
        </GradientView>
    );
};

export default SplashScreen;
