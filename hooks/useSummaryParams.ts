
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';

export const useSummaryParams = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'SummaryScreen'>>();
    return route.params;
};
