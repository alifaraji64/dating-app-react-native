import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SignIn from './(auth)/sign-in'
import { Redirect } from 'expo-router'
import ProfileDetails from './(authenticated)/profile-details'
import { useAuth } from '@/context/auth-context'
import { ActivityIndicator } from 'react-native-paper'
import { checkDetailsExist } from '@/actions/profile-details'
const Index = () => {
    const { user, loading } = useAuth();
    const [detailsExist, setdetailsExist] = useState<boolean>(false)
    const [isCheckingDetails, setIsCheckingDetails] = useState<boolean>(true);
    useEffect(() => {

        if (!user) {
            setIsCheckingDetails(false); // No need to check if user is not defined
            return;
        }
        (async () => {
            try {
                const userDetails = await checkDetailsExist({ id: user.id });
                setdetailsExist(userDetails.length > 0); // Update state
            } catch (error) {
                console.error('Error fetching user details:', error);
            } finally {
                setIsCheckingDetails(false); // Mark check as complete
            }
        })();
    }, [user])
    useEffect(() => {
        console.log('Updated detailsExist:', detailsExist); // This will log the correct value after the state update
    }, [detailsExist]);

    if (loading || isCheckingDetails) return <ActivityIndicator />
    if (!user) return <Redirect href={'/(auth)/sign-in'} />
    if (!detailsExist) return <Redirect href={'/profile-details'} />
    return <Redirect href={'/(authenticated)/(bottom-bar)/profile'} />
}

export default Index