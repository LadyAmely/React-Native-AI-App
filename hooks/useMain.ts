import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';


export const useMain = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'HomeScreen'>>();

    const {
        flashcards,
        question,
        answer,
        isModalVisible,
        setQuestion,
        setAnswer,
        setIsModalVisible,
        addFlashcard,
        deleteFlashcard,
    } = useFlashcards();

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const goToCategoryScreen = () => {
        navigation.navigate('LearningScreen', { flashcards });
    };

    const goToAIGenerator = () => {
        navigation.navigate('AIGeneratorScreen');
    };

    return {
        flashcards,
        question,
        answer,
        isModalVisible,
        setQuestion,
        setAnswer,
        addFlashcard,
        deleteFlashcard,
        openModal,
        closeModal,
        goToCategoryScreen,
        goToAIGenerator,
        menuItems,
        topMenuItems,
    };
};
