import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Shadow } from 'react-native-shadow-2';

export default function Profile() {
    return (
        <SafeAreaView className='flex-1 bg-blue-950'>
            <ScrollView>
                <View className='w-[350px] mx-auto flex-1 justify-center gap-6 p-4 bg-blue pt-12'>
                    <View className='relative'>
                        <View className='absolute top-10 left-6'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="heart" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                        <View className='absolute top-36 left-6'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="hearto" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                        <Image source={require('@/assets/images/woman-1.png')} className='w-40 h-40 border-4 border-pink-700 rounded-full mx-auto'></Image>
                        <View className='absolute top-10 right-6'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="hearto" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                        <View className='absolute top-36 right-6'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="heart" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    shadow: {
        position: 'absolute',
        top: 44,
        left: 24
    }
});