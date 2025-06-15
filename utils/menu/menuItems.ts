
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import {MenuItem} from "@/components/ui/molecules/Menu/Bottom/types";

export const getMenuItems = (
    navigation: NavigationProp<RootStackParamList>
): MenuItem[] => [
    { label: 'Home', icon: 'home-outline', onPress: () => navigation.navigate('MainScreen') },
    { label: 'Profile', icon: 'person-outline', onPress: () => navigation.navigate('ProfileScreen') },
    { label: 'History', icon: 'time-outline', onPress: () => navigation.navigate('HistoryScreen') },
    { label: 'Settings', icon: 'settings-outline', onPress: () => navigation.navigate('SettingsScreen') },
];
