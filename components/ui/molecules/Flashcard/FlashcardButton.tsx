
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './Styles';

import {COLORS} from "@/constants/variables";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const FlashcardButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {

    return (
        <TouchableOpacity
            style={[
                styles.iconButton,
                {
                    backgroundColor: COLORS.background,
                    shadowColor: COLORS.shadowColor,
                },
            ]}
            onPress={onPress}
        >
            <MaskedView
                maskElement={
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="edit" size={24} color="black" />
                    </View>
                }
            >
                <LinearGradient
                    colors={['#6C8EF1', '#A26CF1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ width: 24, height: 24 }}
                />
            </MaskedView>
        </TouchableOpacity>
    );
};

export default FlashcardButton;
