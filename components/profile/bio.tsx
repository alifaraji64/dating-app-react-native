import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import AntDesign from '@expo/vector-icons/AntDesign'
export default function Bio() {
    return (
        <View className='flex-1 justify-between flex -mt-20' id='BIO'>
            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 10 }}>
                <View className='px-6 py-3 flex-1 justify-center items-center flex-col'>
                    <Text className='text-pink-400 font-semibold text-lg text-center'>I am an enginner and i really care about my future, I wanna find a pretty girl let's get to know wach other and maybe meet one day</Text>
                </View>
            </Shadow>
            <Pressable onPress={() => { }} className='flex  flex-row justify-start items-center mt-2'>
                <AntDesign name="edit" size={24} color="white" className=' w-10' />
                <Text className='text-white'>Edit Bio</Text>

            </Pressable>
        </View>
    )
}