import React from 'react';
import { Tabs, router } from 'expo-router';
import BottomMenu from '@/components/ui/molecules/Menu/Bottom/BottomMenu';

export default function TabLayout() {
    return (
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
    );
}
