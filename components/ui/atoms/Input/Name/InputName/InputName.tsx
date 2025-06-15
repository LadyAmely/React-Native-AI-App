import React from 'react';
import { TextInput } from 'react-native';
import {NameInputProps} from "@/components/ui/atoms/Input/Name/InputName/types";
import {styles} from "@/components/ui/atoms/Input/Styles";

const InputName: React.FC<NameInputProps> = ({ name, setName }) => (
    <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#aaa"
    />
);

export default InputName;
