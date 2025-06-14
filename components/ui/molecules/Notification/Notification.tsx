import {Notification} from "@/types/notification";
import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "@/components/ui/molecules/Notification/Styles";

export const NotificationCard= ({ item }: { item: Notification }) => (
    <TouchableOpacity
        style={[styles.notificationItem, item.read && styles.read]}
        onPress={() => {

            console.log(`Clicked on ${item.title}`);
        }}
    >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
    </TouchableOpacity>
);