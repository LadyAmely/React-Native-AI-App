
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

export const useStartApp = () => {
    const navigation = useNavigation<NavigationProp>();
    return () => navigation.navigate('MainScreen');
};

