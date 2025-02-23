import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Appbar } from 'react-native-paper';
// import { Details, Hero, NameAndBio } from '@/components/profile';
import { Shadow } from 'react-native-shadow-2';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Profile() {
    const [isVisible, setIsVisible] = useState(false);
    return (

        <SafeAreaView className='flex-1 bg-blue-900'>
            <Appbar.Header className='bg-blue-900' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
                <Appbar.BackAction color='white' onPress={() => { }} />
                <Appbar.Content color='white' title="My App" />
            </Appbar.Header>
            <ScrollView>
                <View className='min-w-[360px] mx-auto flex-1 justify-center gap-28 px-4 pb-8 bg-blue-900'>
                    <Modal
                        visible={isVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setIsVisible(false)}
                    >
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.title}>Hello from Modal!</Text>
                                <Text style={styles.message}>This is a pop-up modal example.</Text>

                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setIsVisible(false)}
                                >
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <View className='relative flex-1 justify-center items-center '>
                        <View className='absolute top-10 left-2'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="heart" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                        <View className='absolute top-36 left-2'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="hearto" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                        <Pressable className='top-12 relative' onPress={() => setIsVisible(true)}>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <Image source={{ uri: 'https://imgs.search.brave.com/jFhYNrlOIMIep1M67Eg6E1OmkKmMvzB6XfqOW3Qc4Mw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzJj/L2RiLzY5MmNkYjli/NWFhMmY5YjA5NDMw/NDhlN2QwNGZjMzAx/LmpwZw' }} className='w-56 h-56 border-4 border-pink-700 rounded-full mx-auto'></Image>
                            </Shadow>
                        </Pressable>
                        <View className='absolute top-10 right-2'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="hearto" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                        <View className='absolute top-36 right-2'>
                            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
                                <AntDesign name="heart" size={48} color="#be185d" className='p-2' />
                            </Shadow>
                        </View>
                    </View>
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
                    {/* <Details /> */}
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


