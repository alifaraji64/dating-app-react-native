import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar } from 'react-native-paper';
import Details from '@/components/profile/details';
import Hero from '@/components/profile/hero';
import Name from '@/components/profile/name';
import Bio from '@/components/profile/bio';
import { router } from 'expo-router';
import { getProfileDetails } from '@/actions/profile-details';
import { useAuth } from '@/context/auth-context';
import { User } from '@/lib/types';
import { supabase } from '@/lib/supabase';

export default function Profile() {
    const [isVisible, setIsVisible] = useState(false);
    const [details, setDetails] = useState<User | undefined>(undefined)
    const { user } = useAuth()
    const [isMe, setisMe] = useState<boolean>(false)
    useEffect(() => {
        const subscription = supabase
            .channel('schema-db-changes') // Unique channel name
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE', // Listen for all events (INSERT, UPDATE, DELETE)
                    schema: 'public',
                    table: 'user', // Table name
                },
                (payload: any) => {
                    console.log('Realtime change received:', payload.new);
                    setDetails(payload.new)

                    // Handle the change
                }
            )
            .subscribe();

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
        return () => {
            subscription.unsubscribe();
        };

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
                    <Hero imageUrl={details?.pictures[0]!} me={isMe} />
                    <Name name={details?.full_name!} me={isMe} />
                    <Bio bio={details?.bio!} me={isMe} />
                    <Details me={isMe} user={details} />

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


