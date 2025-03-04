import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Profile } from '@/lib/types'
import { Button, Modal, Portal } from 'react-native-paper'
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { birthYearSelectItems, countrySelectItems, genderSelectItems, goalSelectItems, interestedInSelectItems } from '@/constants/selector-data'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { useAuth } from '@/context/auth-context'
import { router } from 'expo-router'
import EditModal from './edit-modal'

export default function Details(props: { me: boolean, user?: Profile }) {
    const [visible, setVisible] = useState(false);
    const [fieldName, setFieldName] = useState<keyof Profile | undefined>(undefined)
    const [editText, setEditText] = useState<any>(undefined);
    const { user } = useAuth()
    const showModal = (field: keyof Profile) => {
        setFieldName(field)
        setEditText(props.user?.[field]!)
        setVisible(true)
    }
    const hideModal = () => {
        setFieldName(undefined)
        setEditText('')
        setVisible(false);
    }
    return (
        <View id='DETAILS' className='flex-1 flex-wrap flex-row gap-8 justify-evenly max-w-full  p-2'>
            <EditModal
                editText={editText}
                fieldName={fieldName!}
                hideModal={hideModal}
                setEditText={setEditText}
                setVisible={setVisible}
                uid={user?.id!}
                user={props.user!}
                visible={visible}
                />
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 100 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1 rounded-full'>
                        <Entypo name="location" size={30} color="white" className='mx-auto text-center' />
                        <Text className='text-white text-center'>Location</Text>
                        <Text className='text-pink-600 text-center font-bold'>{props.user?.country}</Text>
                    </View>
                </Shadow>
                {props.me ? <Button onPress={() => { showModal('country') }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Button> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 100 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1 rounded-full'>
                        <FontAwesome name="intersex" size={30} color="white" className=' text-center' />
                        <Text className='text-white text-center'>Gender</Text>
                        <Text className='text-pink-600 text-center font-bold'>{props.user?.gender}</Text>
                    </View>
                </Shadow>
                {props.me ? <Button onPress={() => { showModal('gender') }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Button> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 100 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1 rounded-full'>
                        <AntDesign name="like2" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Interested in</Text>
                        <Text className='text-pink-600 text-center font-bold'>{props.user?.interested_gender}</Text>
                    </View>
                </Shadow>
                {props.me ? <Button onPress={() => { showModal('interested_gender') }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Button> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 100 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1 rounded-full'>
                        <FontAwesome name="birthday-cake" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Birth Year</Text>
                        <Text className='text-pink-600 text-center font-bold'>{props.user?.birth_year}</Text>
                    </View>
                </Shadow>
                {props.me ? <Button onPress={() => { showModal('birth_year') }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Button> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 100 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1 rounded-full'>
                        <FontAwesome name="user-secret" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>Relationship Goal</Text>
                        <Text className='text-pink-600 text-center font-bold'>{props.user?.goal}</Text>
                    </View>
                </Shadow>
                {props.me ? <Button onPress={() => { showModal('goal') }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Button> : null}

            </View>
            <View>
                <Shadow distance={10} startColor="#db2777" style={{ borderRadius: 100 }}>
                    <View className='w-28  h-32 border-2 border-pink-600 text-center p-1 rounded-full'>
                        <MaterialCommunityIcons name="arrange-bring-to-front" size={30} color="white" className='text-center' />
                        <Text className='text-white text-center'>preferred age range</Text>
                        <Text className='text-pink-600 text-center font-bold'>{props.user?.age_range[0] + '-' + props.user?.age_range[1]}</Text>
                    </View>
                </Shadow>
                {props.me ? <Button onPress={() => { showModal('age_range') }} className='flex  flex-row justify-center items-center mt-2'>
                    <AntDesign name="edit" size={24} color="white" className=' w-8' />
                    <Text className='text-white'>Edit</Text>
                </Button> : null}

            </View>
        </View>
    )
}
