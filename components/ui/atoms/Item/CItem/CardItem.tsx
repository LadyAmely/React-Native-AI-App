
import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {Challenge} from "@/types/challenge";
import {styles} from "@/screens/Challenge/Styles";

export const CardItem = ({ item }: { item: Challenge }) => (
    <TouchableOpacity
        style={[styles.challengeItem, item.completed && styles.completed]}
        onPress={() => {
            console.log(`Challenge selected: ${item.title}`);
        }}
    >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
);