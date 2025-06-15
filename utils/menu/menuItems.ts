import { BottomMenuItem } from '@/components/atoms/BottomMenu/types'; // jeśli masz typ
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';

export const getMenuItems = (
    navigation: NavigationProp<RootStackParamList>
): BottomMenuItem[] => [
    { label: 'Home', icon: 'home-outline', onPress: () => navigation.navigate('HomeScreen') },
    { label: 'Profile', icon: 'person-outline', onPress: () => navigation.navigate('ProfileScreen') },
    { label: 'History', icon: 'time-outline', onPress: () => navigation.navigate('HistoryScreen') },
    { label: 'Settings', icon: 'settings-outline', onPress: () => navigation.navigate('SettingsScreen') },
];
