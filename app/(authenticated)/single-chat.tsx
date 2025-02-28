import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Appbar, IconButton, } from 'react-native-paper'
import { useLocalSearchParams, router } from 'expo-router'

export default function SingleChat() {
    const [text, setText] = useState("");
    const params: { id: string } = useLocalSearchParams();
    console.log(params);
    const SubmitMessage = () => {
        console.log('submit msg');
    }
    const messages = [
        { from: '1', to: '2', message: 'hi, how is it going?', timestamp: '12:36' },
        { from: '2', to: '1', message: 'thanks it is not bad', timestamp: '12:36' },
        { from: '2', to: '1', message: 'how about you?', timestamp: '12:36' },
        { from: '1', to: '2', message: 'thanks it is all good, do you remeber the things i mentioned to you?', timestamp: '12:36' },
        { from: '1', to: '2', message: 'about my school?', timestamp: '12:36' },
        { from: '2', to: '1', message: 'ofcourse i do', timestamp: '12:36' },
    ]

    return (
        <SafeAreaView className='flex-1 bg-blue-900'>
            <Appbar.Header className='bg-blue-900 !h-[68px]' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
                <Appbar.BackAction color='white' onPress={() => { router.back() }} />
                <Appbar.Content color='white' title="valeria" />
                <Appbar.Action icon={''} />
            </Appbar.Header>
            <View className='flex-1'>
                {/* ScrollView for messages */}
                <ScrollView className=' px-4 pt-4'>
                    <View className='flex-1 gap-3 pb-16'>
                        {messages.map((msg, index) => (
                            <View key={index} className={`pt-2 pb-5 relative px-3 rounded-lg min-w-[70px] ${msg.from == '2' ? 'self-end bg-blue-300' : 'self-start bg-blue-500'}`}>
                                <Text className={`text-left ${msg.from == '2' ? '' : 'text-white'}`}>{msg.message}</Text>
                                <Text className={`absolute bottom-0 right-1 font-semibold text-xs ${msg.from == '2' ? '' : 'text-white'}`}>{msg.timestamp}</Text>
                            </View>
                        ))}
                    </View>

                </ScrollView>

                {/* Fixed bottom View for input and button */}
                <View className='flex-row p-2  border-white'>
                    <TextInput
                        value={text}
                        onChangeText={text => setText(text)}
                        className='flex-1 border-2 border-white bg-blue-500 p-2 text-gray-300'
                        placeholder='type...'
                        placeholderTextColor={'#d1d5db'}
                    />
                    <IconButton
                        icon="send"
                        size={30}
                        background={'white'}
                        className='text-white bg-white'
                        onPress={() => SubmitMessage()}
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}