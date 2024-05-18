import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Components/Context/AuthContext'

export default function Profile() {
  const {logout}=useContext(AuthContext)
  const handleLogout=async()=>{
    await logout();
  }
  return (
    <View>
      <Button title='Logout' onPress={handleLogout}/>
    </View>
  )
}