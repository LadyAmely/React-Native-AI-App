

export type RootStackParamList = {
    SplashScreen: undefined;
    HomeScreen: undefined;
    CategoryScreen: undefined;
    LearningScreen: { flashcards: { question: string; answer: string }[] };
    SummaryScreen: { category: string; correctAnswers: number; totalQuestions: number };
    QuizScreen: { flashcards: { question: string; answer: string }[] };
    StatsScreen: { correct: number; total: number };
    ProfileScreen: undefined;
    OnboardingScreen: undefined;
    HistoryScreen: undefined;
    SettingsScreen: undefined;
    DailyGoalScreen: undefined;
    DailyTipScreen: undefined;
    AchievementScreen: undefined;
    CalendarScreen: undefined;
    AIGeneratorScreen: undefined;
    ChallengeScreen: undefined;
    ExploreScreen: undefined;
    RewardScreen: undefined;
    NotificationScreen: undefined;
};