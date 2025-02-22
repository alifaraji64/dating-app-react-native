import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Profile() {
    return (
        <SafeAreaView className='flex-1 bg-blue-950'>
            <ScrollView>
                <View className='w-[350px] mx-auto flex-1 justify-center gap-6 p-4 bg-blue pt-12'>
                    <View className='relative' style={styles.elevated}>
                        <AntDesign name="heart" size={48} color="#be185d" className='shadow-2xl shadow-pink-700 absolute top-10 left-8' style={styles.elevated} />
                        <AntDesign name="hearto" size={48} color="#be185d" className='shadow-2xl shadow-pink-700 absolute top-36 left-8' />
                        <Image source={require('@/assets/images/woman-1.png')} className='w-40 h-40 border-4 border-pink-700 rounded-full mx-auto'></Image>
                        <AntDesign name="hearto" size={48} color="#be185d" className='shadow-2xl shadow-pink-700 absolute top-10 right-8' />
                        <AntDesign name="heart" size={48} color="#be185d" className='shadow-2xl shadow-pink-700 absolute top-36 right-8' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    elevated: {
        backgroundColor: 'white',
        elevation: 10, // Adds shadow on Android
    }
});