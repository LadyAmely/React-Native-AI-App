import React from 'react';
import { View } from 'react-native';
import { useProfile } from '@/hooks/useProfile';
import AvatarSelector from "@/components/ui/atoms/Selector/Avatar/AvatarSelector";
import SaveButton from "@/components/ui/atoms/Button/Save/SaveButton";
import {getMenuItems} from "@/utils/menu/menuItems";
import ProfileSummary from "@/screens/Profile/ProfileSummary";
import InputName from "@/components/ui/atoms/Input/Name/InputName/InputName";
import {useNavigation} from "expo-router";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "@/types/navigation";
import BottomMenu from "@/components/ui/molecules/Menu/Bottom/BottomMenu";
import {styles} from "@/screens/Profile/Styles";

const ProfileScreen = () => {
    const { name, setName, imageUri, pickImage, saveProfile } = useProfile();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const menuItems = getMenuItems(navigation);
    return (
        <View style={styles.container}>
            <AvatarSelector imageUri={imageUri} onPickImage={pickImage} />
            <InputName name={name} setName={setName} />
            <ProfileSummary />
            <SaveButton onPress={saveProfile} />
            <BottomMenu items={menuItems} />
        </View>
    );
};

export default ProfileScreen;
