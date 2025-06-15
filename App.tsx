import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "@/screens/Splash/Splash";
import QuizScreen from "@/screens/Quiz/Quiz";
import MainScreen from "@/screens/Main/Main";
import LearningScreen from "@/screens/Learning/Learning";
import StatsScreen from "@/screens/Stats/Stats";
import ProfileScreen from "@/screens/Profile/Profile";
import OnboardingScreen from "@/screens/Onboarding/Onboarding";


const Stack = createStackNavigator();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="QuizScreen" component={QuizScreen} />
                <Stack.Screen name="LearningScreen" component={LearningScreen} />
                <Stack.Screen name="StatsScreen" component={StatsScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
                <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;



