import { View, Text, Image, Pressable, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Entypo from '@expo/vector-icons/Entypo'
import React from 'react'
// import Carousel from 'react-native-snap-carousel';



export const NameAndBio: React.FC = () => {
    return (
        <>
            <View id='NAME' className='flex-1 justify-between flex-row'>
                <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                    <View className='p-3 h-16 flex-1 justify-center items-center'>
                        <Text className='text-white font-bold text-2xl text-center'>valeria kadirov</Text>
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
            <View className='flex-1 justify-between flex -mt-20' id='BIO'>
                <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 10 }}>
                    <View className='px-6 py-3 flex-1 justify-center items-center flex-col'>
                        <Text className='text-pink-500 font-semibold text-lg text-center'>I am an enginner and i really care about my future, I wanna find a pretty girl let's get to know wach other and maybe meet one day</Text>
                    </View>
                </Shadow>
                <Pressable onPress={() => { }} className='flex  flex-row justify-start items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-10' />
                    <Text className='text-white'>Edit Bio</Text>

                </Pressable>
            </View>
        </>
    )
}

export const Details: React.FC = () => {
    return (
        <View id='DETAILS' className='flex-1 flex-wrap flex-row gap-8 justify-evenly'>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <Entypo name="location" size={30} color="white" className='mx-auto text-center' />
                        <Text className='text-white text-center'>Location</Text>
                        <Text className='text-pink-600 text-center font-bold'>Los angles, california</Text>
                    </View>
                </Shadow>
                <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable>
            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <FontAwesome name="intersex" size={30} color="white" className=' text-center' />
                        <Text className='text-white text-center'>Gender</Text>
                        <Text className='text-pink-600 text-center font-bold'>Female</Text>
                    </View>
                </Shadow>
                <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable>
            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <AntDesign name="like2" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Interested in</Text>
                        <Text className='text-pink-600 text-center font-bold'>Female</Text>
                    </View>
                </Shadow>
                <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable>
            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <FontAwesome name="birthday-cake" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Birth Year</Text>
                        <Text className='text-pink-600 text-center font-bold'>2001</Text>
                    </View>
                </Shadow>
                <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable>
            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <FontAwesome name="user-secret" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Relationship Goal</Text>
                        <Text className='text-pink-600 text-center font-bold'>long-term</Text>
                    </View>
                </Shadow>
                <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable>
            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 10 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1'>
                        <MaterialCommunityIcons name="arrange-bring-to-front" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>preferred age range</Text>
                        <Text className='text-pink-600 text-center font-bold'>18-78</Text>
                    </View>
                </Shadow>
                <Pressable onPress={() => { }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Pressable>
            </View>
        </View>
    )
}

