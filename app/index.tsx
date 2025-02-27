import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SignIn from './(auth)/sign-in'
import { Redirect } from 'expo-router'
const Index = () => {
    return (
        <Redirect href={'/(bottom-bar)/chats'}/>
    )
}

export default Index