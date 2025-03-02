import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Appbar, BottomNavigation } from 'react-native-paper';
import { Shadow } from 'react-native-shadow-2';
import AntDesign from '@expo/vector-icons/AntDesign';
import Details from '@/components/profile/details';
import Hero from '@/components/profile/hero';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Name from '@/components/profile/name';
import Bio from '@/components/profile/bio';
import { router } from 'expo-router';
import { getProfileDetails } from '@/actions/profile-details';
import { useAuth } from '@/context/auth-context';
import { User } from '@/lib/types';

export default function Profile() {
    const [isVisible, setIsVisible] = useState(false);
    const [details, setDetails] = useState<User | null>(null)
    const { user } = useAuth()
    const [isMe, setisMe] = useState<boolean>(false)
    useEffect(() => {

        (async () => {
            //if (!user) return;
            try {
                let data = await getProfileDetails({ id: user?.id! })
                setDetails(data)
                setisMe(user?.id == data.user_id)
                console.log('tttr');
                
                console.log(user?.id == data.user_id);
                
            } catch (error) {
                console.log(error);
            }
        })();

    }, [user]);

    return (


        <SafeAreaView className='flex-1 bg-blue-900'>
            <Appbar.Header className='bg-blue-900' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
                <Appbar.BackAction color='white' onPress={() => { router.back() }} />
                <Appbar.Content color='white' title="datiee" />
                <Appbar.Action icon={''} />
            </Appbar.Header>
            <ScrollView>
                <View id='WRAPPER' className='min-w-[360px] mx-auto flex-1 justify-center gap-28 px-4 pb-8 bg-blue-900'>
                    <Hero imageUrl={details?.pictures[0]!} me={isMe}/>
                    <Name name={details?.full_name!} me={isMe}/>
                    <Bio bio={details?.bio!} me={isMe}/>
                    <Details me={isMe} />

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


