import { View, Text } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'

export default function Name({ name, me }: { name: string, me: boolean }) {
    return (
        <View id='NAME' className='flex-1 justify-between flex-row'>
            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                <View className='p-3 h-16 flex-1 justify-center items-center'>
                    <Text className='text-white font-bold text-2xl text-center'>{name}</Text>
                </View>
            </Shadow>
            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                <View className='px-6 py-3 flex-1 justify-center items-center flex-col'>
                    <Text className='text-pink-600 font-bold text-2xl text-center'>8</Text>
                    <Text className='text-white text-center text-xs font-thin'>reports</Text>
                </View>
            </Shadow>
            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                <View className='px-6 py-3 flex-1 justify-center items-center flex-col'>
                    <Text className='text-pink-600 font-bold text-2xl text-center'>24</Text>
                    <Text className='text-white text-center text-xs font-thin'>matches</Text>
                </View>
            </Shadow>
        </View>
    )
}