import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function Details(props: { me: boolean }) {
    return (
        <View id='DETAILS' className='flex-1 flex-wrap flex-row gap-8 justify-evenly max-w-full  p-2'>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <Entypo name="location" size={30} color="white" className='mx-auto text-center' />
                        <Text className='text-white text-center'>Location</Text>
                        <Text className='text-pink-600 text-center font-bold'>Los angles, california</Text>
                    </View>
                </Shadow>
                {props.me ? <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <FontAwesome name="intersex" size={30} color="white" className=' text-center' />
                        <Text className='text-white text-center'>Gender</Text>
                        <Text className='text-pink-600 text-center font-bold'>Female</Text>
                    </View>
                </Shadow>
                {props.me ? <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <AntDesign name="like2" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Interested in</Text>
                        <Text className='text-pink-600 text-center font-bold'>Female</Text>
                    </View>
                </Shadow>
                {props.me ? <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <FontAwesome name="birthday-cake" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Birth Year</Text>
                        <Text className='text-pink-600 text-center font-bold'>2001</Text>
                    </View>
                </Shadow>
                {props.me ? <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <FontAwesome name="user-secret" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Relationship Goal</Text>
                        <Text className='text-pink-600 text-center font-bold'>long-term</Text>
                    </View>
                </Shadow>
                {props.me ? <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <MaterialCommunityIcons name="arrange-bring-to-front" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>preferred age range</Text>
                        <Text className='text-pink-600 text-center font-bold'>18-78</Text>
                    </View>
                </Shadow>
                {props.me ? <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable> : null}

            </View>
        </View>
    )
}