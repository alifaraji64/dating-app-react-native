import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import SignIn from './(auth)/sign-in'
import { Redirect } from 'expo-router'
import ProfileDetails from './(authenticated)/profile-details'
import { useAuth } from '@/context/auth-context'
import { ActivityIndicator } from 'react-native-paper'
import { checkDetailsExist } from '@/actions/profile-details'
const Index = () => {
    const { user, loading } = useAuth();
    useEffect(() => {
        checkDetailsExist().then(data=>{
            if(!data)console.log('no data');
            else{
                console.log(data);
                
            }
            
        })
    }, [])
    
    let userDetailsCompleted = false;
    if (loading) return <ActivityIndicator />
    if (!user) return <Redirect href={'/(auth)/sign-in'} />
    if (user && !userDetailsCompleted) return <Redirect href={'/profile-details'} />
    return <Redirect href={'/(authenticated)/(bottom-bar)/profile'} />
}

export default Index