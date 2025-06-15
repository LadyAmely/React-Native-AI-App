import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export const useProfile = () => {
    const [name, setName] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const savedName = await AsyncStorage.getItem('profileName');
            const savedImage = await AsyncStorage.getItem('profileImage');
            if (savedName) setName(savedName);
            if (savedImage) setImageUri(savedImage);
        } catch (e) {
            console.error('Error loading profile:', e);
        }
    };

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            Alert.alert('Gallery access is required.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            setImageUri(uri);
        }
    };

    const saveProfile = async () => {
        try {
            await AsyncStorage.setItem('profileName', name);
            if (imageUri) {
                await AsyncStorage.setItem('profileImage', imageUri);
            }
        } catch (e) {
        }
    };

    return {
        name,
        setName,
        imageUri,
        pickImage,
        saveProfile,
    };
};
