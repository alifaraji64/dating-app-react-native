import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Button, Dialog, PaperProvider } from 'react-native-paper'
import { router } from 'expo-router'

export default function Chats() {
    const messages = [
        { url: 'https://picsum.photos/700', name: 'valeria faraji', lastMessage: 'I think it is really interesting', timestamp: '22:36' },
        { url: 'https://picsum.photos/700', name: 'Ali Masoomi', lastMessage: 'I think it is really interesting', timestamp: '02:36' },
        { url: 'https://picsum.photos/700', name: 'Amirreza Alishah', lastMessage: 'I think it is really interesting', timestamp: '22:36' },
        { url: 'https://picsum.photos/700', name: 'Omid Mosoxani', lastMessage: 'I think it is really interesting', timestamp: '20:36' },
        { url: 'https://picsum.photos/700', name: 'Ahad Choopani', lastMessage: 'I think it is really interesting', timestamp: '14:00' },
    ]
    const [isdeleteDialogVisible, setIsDeleteDialogVisible] = useState(false)
    const showDialog = () => setIsDeleteDialogVisible(true);

    const hideDialog = () => setIsDeleteDialogVisible(false);
    return (
        <SafeAreaView className='flex-1 bg-blue-900'>
            <Appbar.Header className='bg-blue-900' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
                <Appbar.BackAction color='white' onPress={() => { router.back() }} />
                <Appbar.Content color='white' title="messages" />
                <Appbar.Action icon={''} />
            </Appbar.Header>
            <ScrollView>
                <PaperProvider>
                    <View id='WRAPPER' className='min-w-[360px] mx-auto flex-1 justify-center gap-3 pb-8 bg-blue-900'>
                        {messages.map((m, index) => (
                            <TouchableOpacity key={index} className='h-24 !p-0 !m-0'
                                onLongPress={() => { setIsDeleteDialogVisible(true) }}
                                onPress={() => router.push('/single-chat?id=testid1234')}>
                                <View className='flex-1 flex-row gap-1 border-b-2 rounded-2xl border-blue-950 min-w-full px-4 py-3 items-center bg-blue-950' id='ITEM'>
                                    <Image source={{ uri: m.url }} height={60} width={60} resizeMode='contain' className='rounded-full'></Image>
                                    <View>
                                        <Text className='text-white text-lg font-semibold'>{m.name}</Text>
                                        <Text className='text-white text-sm'>{m.lastMessage}</Text>
                                    </View>
                                    <Text className='text-center text-gray-300 font-bold mx-auto'>{m.timestamp}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Dialog visible={isdeleteDialogVisible} onDismiss={hideDialog} style={{ backgroundColor: '#db2777' }}>
                        <Dialog.Content>
                            <Text className='text-blue-950 text-lg font-semibold'>Do You Want To Delete This Chat?</Text>
                        </Dialog.Content>
                        <Dialog.Actions >
                            <View className='flex-1 flex-row justify-evenly items-center'>
                                <Button onPress={hideDialog} mode='contained' className=' !p-1'>No</Button>
                                <Button onPress={hideDialog} mode='contained' className='!bg-blue-950 !p-1 !text-white' textColor='white'>Yes</Button>
                            </View>
                        </Dialog.Actions>
                    </Dialog>

                </PaperProvider>

            </ScrollView>
        </SafeAreaView >
    )
}