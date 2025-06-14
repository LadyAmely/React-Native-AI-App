
import React from 'react';


import { LinearGradient } from 'expo-linear-gradient';


import { COLORS } from '@/constants/variables';
import { GradientViewProps } from '@/components/ui/atoms/Gradient/types';


const GradientView: React.FC<GradientViewProps> = ({
                                                       children,
                                                       style,
                                                       start = { x: 0, y: 0 },
                                                       end = { x: 1, y: 1 },
                                                       colors = [COLORS.gradientStart, COLORS.gradientEnd],
                                                   }) => (
    <LinearGradient colors={colors} start={start} end={end} style={style}>
        {children}
    </LinearGradient>
);

export default GradientView;
