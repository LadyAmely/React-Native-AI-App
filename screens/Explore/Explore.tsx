import React from 'react';
import { View, Text, FlatList} from 'react-native';
import {styles} from "@/screens/Explore/Styles";
import {useExploreItems} from "@/hooks/useExploreItems";
import {renderItem} from "@/components/ui/atoms/Item/RItem/RenderItem";

export const ExploreScreen = () => {

    const exploreItems = useExploreItems();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Discover new possibilities</Text>
            <FlatList
                data={exploreItems}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ExploreScreen;
