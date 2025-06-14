import React from "react";
import {StyleProp, ViewStyle} from "react-native";

export interface GradientViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    colors?: [string, string];
}
