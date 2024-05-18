import { View, Text, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DoctorProfile() {
    return (
        <View style={{ flex: 1, flexDirection: "column", padding: 15 }}>
            <View style={{ width: "100%", backgroundColor: "#f3f6f5", padding: 10, borderRadius: 5, gap: 10 }}>
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                    <Image source={{ uri: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" }} width={60} height={60} borderRadius={100} />
                    <View style={{ flex: 1, margin: 5 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: "green" }}>Doctor</Text>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: "700" }}>Mohammad Ansari</Text>
                        <Text>Park Hospitals</Text>
                        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                            <Text style={{ backgroundColor: "#ebf5f4", color: "#8ecbaf", padding: 1, borderRadius: 5 }}>#Comfortable waiting area</Text>
                            <Text style={{ backgroundColor: "#ebf5f4", color: "#8ecbaf", padding: 1, borderRadius: 5 }}>#Clean</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 7 }}>
                    <Entypo name="location-pin" size={24} color="green" /><Text>Park Hospital, Murthal</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 7 }}>
                    <View style={{ flex: 1, flexDirection: "row", borderRightColor: "black", borderRightWidth: 1, justifyContent: "center", alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="money" size={30} color="green" />
                        <View style={{ display: "flex", flexDirection: "column" }}>
                            <Text style={{ fontSize: 12, color: "grey", fontWeight: "400" }}>Fees</Text>
                            <Text>200$</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: 'center', gap: 10 }}>
                        <Ionicons name="timer-outline" size={30} color="green" />
                        <View style={{ display: "flex", flexDirection: "column" }}>
                            <Text style={{ fontSize: 12, color: "grey", fontWeight: "400" }}>Duration</Text>
                            <Text>15 Minutes</Text>
                        </View>
                    </View>
                </View>
                <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontWeight:"600",fontSize:20}}>Select your Appointment</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>About</Text>
                    <Text style={{ fontSize: 15 }}>Dr. Mohammad Ansari is a well known doctor in the field of Gynecology and Pharma. He has been working in the field for more than 10 years. He has a good reputation among his patients.</Text>
                </View>

            </View>
        </View>
    )
}