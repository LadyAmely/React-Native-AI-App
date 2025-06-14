
import React from 'react';
import {Text} from 'react-native';
import {styles} from "@/screens/Summary/Styles";

const Headline = ({ children }: { children: React.ReactNode }) => (
    <Text style={styles.title}>{children}</Text>
);


export default Headline;
