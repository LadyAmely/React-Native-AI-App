
import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {ExploreItem} from "@/types/explore";
import {styles} from "@/screens/Explore/Styles";

export const renderItem = ({ item }: { item: ExploreItem }) => (
    <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardContent}>
            <Text style={styles.tag}>{item.tag.toUpperCase()}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </TouchableOpacity>
);