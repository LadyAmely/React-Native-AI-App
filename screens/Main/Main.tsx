
import React from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import {useMain} from "@/hooks/useMain";
import FlashcardList from "@/components/ui/organisms/List/Flashcard/FlashcardList";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "@/constants/variables";
import FlashcardForm from "@/components/ui/organisms/Form/Flashcard/FlashcardForm";
import FabButton from "@/components/ui/atoms/Button/Fab/FabButton";
import AIButton from "@/components/ui/atoms/Button/AI/AIButton";
import {styles} from "@/screens/Main/Styles";
import CalendarButton from "@/components/ui/atoms/Button/Calendar/CalendarButton";
import TipButton from "@/components/ui/atoms/Button/Daily/Tip/TipButton";



const MainScreen = () => {
    const {
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
    } = useMain();

    return (
        <View style={{ flex: 1, position: 'relative', padding: 20, top: 20 }}>


            <FlashcardList
                flashcards={flashcards}
                deleteFlashcard={(index) => deleteFlashcard(flashcards[index].id)}
            />

            <TouchableOpacity style={styles.button} onPress={goToLearning}>
                <LinearGradient
                    colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>Go to learning</Text>
                </LinearGradient>
            </TouchableOpacity>


            <Modal visible={isModalVisible} animationType="slide" transparent onRequestClose={closeModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                        <FlashcardForm
                            question={question}
                            answer={answer}
                            setQuestion={setQuestion}
                            setAnswer={setAnswer}
                            addFlashcard={addFlashcard}
                            closeModal={closeModal}
                        />
                    </View>
                </View>
            </Modal>

            <FabButton onPress={openModal} />
            <AIButton onPress={goToAIGenerator} />
            <CalendarButton onPress={goToCalendar}/>
            <TipButton onPress={goToDailyTip}/>
        </View>
    );
};

export default MainScreen;
