import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import {styles} from "@/components/ui/atoms/Selector/Avatar/Styles";
import {AvatarSelectorProps} from "@/components/ui/atoms/Selector/Avatar/types";

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ imageUri, onPickImage }) => (
    <TouchableOpacity onPress={onPickImage}>
        <Image
            source={
                imageUri ? { uri: imageUri } : { uri: 'https://i.pravatar.cc/150?img=12' }
            }
            style={styles.avatar}
        />
        <Text style={styles.tapToChangeText}>
            Tap to change photo
        </Text>
    </TouchableOpacity>
);

export default AvatarSelector;
