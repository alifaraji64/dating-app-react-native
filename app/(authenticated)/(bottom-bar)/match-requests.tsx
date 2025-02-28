import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Appbar, Button, IconButton } from 'react-native-paper'
import { router } from 'expo-router'

export default function MatchRequests() {
    return (
        <SafeAreaView className='flex-1 bg-blue-900'>
            <Appbar.Header className='bg-blue-900' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
                <Appbar.BackAction color='white' onPress={() => { router.back() }} />
                <Appbar.Content color='white' title="match requests" />
                <Appbar.Action icon={''} />
            </Appbar.Header>
            <ScrollView>
                <View id='WRAPPER' className='min-w-[360px] flex-1 justify-center gap-1 px-4 pb-8 py-2 bg-blue-900'>
                    {new Array(10).fill(0).map((m, index) => (
                        <View key={index} id='ITEM' className='flex-1 flex-row gap-2 border-b-2 rounded-2xl border-blue-950 min-w-full px-4 py-2 items-center justify-evenly bg-blue-950'>
                            <View className=' items-center'>
                                <Image source={{ uri: 'https://imgs.search.brave.com/jFhYNrlOIMIep1M67Eg6E1OmkKmMvzB6XfqOW3Qc4Mw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzJj/L2RiLzY5MmNkYjli/NWFhMmY5YjA5NDMw/NDhlN2QwNGZjMzAx/LmpwZw' }} height={60} width={60} resizeMode='contain' className='rounded-full'></Image>
                                <Text className='text-white text-sm'>Valeria kadirova </Text>
                            </View>
                            <IconButton
                                icon="cancel"
                                className='bg-red-600'
                                size={20}
                                iconColor='white'
                                onPress={() => console.log('Pressed')}
                            />
                            <IconButton
                                icon="check"
                                className='bg-blue-600'
                                size={20}
                                iconColor='white'
                                onPress={() => console.log('Pressed')}
                            />
                            <Text className='text-white text-xs'>2 hours ago</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}