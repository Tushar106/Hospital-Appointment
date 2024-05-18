import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen'
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SearchScreen from '../Screens/SearchScreen'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import SearchScreenNavigation from './SearchScreenNavigation'

export default function Home() {
  const Tab = createBottomTabNavigator()
  return (
    <GestureHandlerRootView style={style.container}>
      <BottomSheetModalProvider>
        <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: "#01C77D", tabBarStyle: { backgroundColor: "black",borderTopWidth:0 }, tabBarLabelPosition: "beside-icon", tabBarLabelStyle: { fontSize: 15 }, tabBarHideOnKeyboard: true }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ size, color }) => <FontAwesome name="home" size={size} color={color} /> }} />
          <Tab.Screen name="SearchScreen" component={SearchScreenNavigation} options={{
            tabBarIcon: ({ size, color }) => <FontAwesome name="search" size={size} color={color} />
          }
          } />
          <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ size, color }) => <FontAwesome name="user-circle" size={size} color={color} /> }} />
        </Tab.Navigator>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})