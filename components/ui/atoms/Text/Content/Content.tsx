import React from 'react';
import { Text } from 'react-native';

import { styles } from '@/components/ui/atoms/Text/Content/Styles';
import { COLORS } from '@/constants/variables';

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return <Text style={[styles.text, {color: COLORS.textSecondary}]}>{children}</Text>;
};

export default Content;