import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';
import {useFlashcards} from "@/hooks/useFlashcards";
import {getMenuItems} from "@/utils/menu/menuItems";
import {useRouter} from "expo-router";


export const useMain = () => {
    const router = useRouter();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'MainScreen'>>();
    const menuItems = getMenuItems(navigation);
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
        router.push('./AIGenerator');
    };

    const goToCalendar = () =>{
      router.push('./Calendar');
    };

    const goToDailyTip =()=>{
      router.push('./tip');
    };

    const goToLearning =()=>{
      router.push('./learning');
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
        goToCalendar,
        goToDailyTip,
        goToLearning,
        menuItems,
    };
};
