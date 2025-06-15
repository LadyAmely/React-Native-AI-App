
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';

type LearningScreenRouteProp = RouteProp<RootStackParamList, 'LearningScreen'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'LearningScreen'>;

export const useLearning = () => {
    const route = useRoute<LearningScreenRouteProp>();
    const navigation = useNavigation<NavigationProp>();

    const flashcards = route.params.flashcards;

    const startQuiz = () => {
        navigation.navigate('QuizScreen', { flashcards });
    };

    return { flashcards, startQuiz };
};
