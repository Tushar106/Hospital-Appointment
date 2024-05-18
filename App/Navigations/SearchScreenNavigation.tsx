import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../Screens/SearchScreen';
import DoctorProfile from '../Screens/DoctorProfile';

export default function SearchScreenNavigation() {
    const Stack=createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerTintColor:"white"}}>
        <Stack.Screen name='Search' component={SearchScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Doctor Profile' component={DoctorProfile} options={{headerTitleStyle:{color:"white"},headerStyle:{backgroundColor:"#292929"}}}/>
    </Stack.Navigator>
    
  )
}