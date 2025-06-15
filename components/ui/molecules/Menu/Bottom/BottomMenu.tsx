import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {styles} from "@/components/ui/molecules/Menu/Bottom/Styles";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "@/constants/variables";
import {Ionicons} from "@expo/vector-icons";
import {BottomMenuProps} from "@/components/ui/molecules/Menu/Bottom/types";

const BottomMenu: React.FC<BottomMenuProps> = ({ items }) => {

    return (
        <LinearGradient
            colors={[COLORS.gradientStart, COLORS.gradientEnd]}
            style={[styles.container, { shadowColor: COLORS.shadowColor }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            {items.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={item.onPress}
                    style={styles.menuItem}
                >
                    <Ionicons name="person-outline" size={24} color="black" />
                    <Text style={[styles.label, { color: COLORS.textInverse }]}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </LinearGradient>
    );
};

export default BottomMenu;
