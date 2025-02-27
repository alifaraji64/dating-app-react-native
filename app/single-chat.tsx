import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Appbar, } from 'react-native-paper'
import { useLocalSearchParams, router } from 'expo-router'

export default function SingleChat() {
    const params: { id: string } = useLocalSearchParams();
    console.log(params);
    const messages = [
        { from: '1', to: '2', message: 'hi, how is it going?' },
        { from: '2', to: '1', message: 'thanks it is not bad' },
        { from: '2', to: '1', message: 'how about you?' },
        { from: '1', to: '2', message: 'thanks it is all good, do you remeber the things i mentioned to you?' },
        { from: '1', to: '2', message: 'about my school?' },
        { from: '2', to: '1', message: 'ofcourse i do' },
    ]

    return (
        <SafeAreaView className='flex-1 bg-blue-900'>
            <Appbar.Header className='bg-blue-900' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
                <Appbar.BackAction color='white' onPress={() => { router.back() }} />
                <Appbar.Content color='white' title="valeria" />
                <Appbar.Action icon={''} />
            </Appbar.Header>
            <ScrollView>
                <View id='WRAPPER' className='min-w-[360px] mx-auto flex-1 justify-center gap-1 px-4 py-4 bg-blue-900'>
                    {/* <View id='MY_MESSAGE' className='bg-blue-300 self-end py-1 px-3 rounded-lg min-w-[70px]'>
                        <Text className='text-center'>hi</Text>
                    </View>
                    <View id='MY_MESSAGE' className='bg-blue-500 self-start py-1 px-3 rounded-lg min-w-[70px]'>
                        <Text className='text-center text-white'>hi</Text>
                    </View> */}
                    {messages.map((m,index) => (
                        <View key={index} className='bg-blue-500 self-start py-1 px-3 rounded-lg min-w-[70px]' >
                            <Text className='text-center text-white'>hi</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}