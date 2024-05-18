import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning,👋';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon,👋';
    } else {
        greeting = 'Good Evening,👋';
    }
    return (
        <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center",justifyContent:"space-between" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center",gap:10 }}>
                <FontAwesome name="user-circle" size={32} color="green" />
                <Text style={{ fontSize: 18, fontWeight: "bold" ,color:"white"}}>{greeting}</Text>
            </View>
            <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
    )
}