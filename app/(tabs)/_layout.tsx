import React from 'react';
import { Tabs, router } from 'expo-router';
import BottomMenu from '@/components/ui/molecules/Menu/Bottom/BottomMenu';
import TopMenu from "@/components/ui/molecules/Menu/Top/TopMenu";
import { View } from 'react-native';
import { StyleSheet } from 'react-native';


export default function TabLayout() {
    return (
        <View style={styles.container}>
            <TopMenu
                items={[
                    { label: 'AI', icon: 'sparkles-outline', onPress: () => router.push('/AIGenerator') },
                    { label: 'Tips', icon: 'bulb-outline', onPress: () => router.push('/profile') },
                ]}
            />

            <View style={styles.tabsWrapper}>
                <Tabs
                    screenOptions={{
                        headerShown: false,
                    }}
                    tabBar={() => (
                        <BottomMenu
                            items={[
                                {
                                    label: 'Home',
                                    icon: 'home-outline',
                                    onPress: () => router.push('/main'),
                                },
                                {
                                    label: 'Profile',
                                    icon: 'person-outline',
                                    onPress: () => router.push('/profile'),
                                },
                            ]}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabsWrapper: {
        flex: 1,
        marginTop: 60,
    },
});