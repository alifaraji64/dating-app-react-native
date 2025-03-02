import { View, Text, SafeAreaView, TextInput, ScrollView, Platform, Button, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { countries } from 'countries-list'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { birthYearSelectItems, countrySelectItems, genderSelectItems, goalSelectItems, interestedInSelectItems } from '@/constants/selector-data'
import { ProfileDetailsSchema } from '@/constants/zod-schemas'
import { ActivityIndicator, Appbar, Snackbar } from 'react-native-paper'
import { router } from 'expo-router'
import { getProfileDetails, submitProfileDetails } from '@/actions/profile-details'
import { useAuth } from '@/context/auth-context'
import { User } from '@/lib/types'






const ProfileDetails = () => {
    const [range, setRange] = useState([18, 70]); // Initial range values
    const [image, setImage] = useState<string | null>(null)
    const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useAuth()
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();

    }, [countries]);

    const handleRangeChange = (values: any, onChange: any) => {
        setRange(values);
        onChange(values)
    };
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(ProfileDetailsSchema),
        defaultValues: {
            bio: '',
            image: '',
            full_name: '',
            gender: '',
            interested_gender: '',
            birth_year: 2000,
            country: '',
            goal: '',
            age_range: []
        }
    })
    const pickImage = async (onChange: any) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,// Specify 'Images' for images only
            allowsEditing: true, // Allow the user to crop/edit the image
            aspect: [4, 3], // Aspect ratio for cropping
            quality: 1, // Image quality (0 to 1)
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            onChange(result.assets[0].uri)
        }
    };
    return (
        <SafeAreaView className='flex-1 bg-blue-900'>
            <Snackbar
                style={{ position: 'absolute', backgroundColor: 'black' }}
                visible={isSnackbarVisible}
                onDismiss={() => { setIsSnackbarVisible(false); }}
                duration={4000}
            >
                error occured during profile detais submission
            </Snackbar>
            <Appbar.Header className='bg-blue-900' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
                {router.canGoBack() && <Appbar.BackAction color='white' onPress={() => { router.back() }} />}
                <Appbar.Content color='white' title="profile details" />
                <Appbar.Action icon={''} />
            </Appbar.Header>
            <ScrollView>
                <View className='w-[350px] mx-auto flex-1 justify-center gap-6 p-4 bg-blue'>
                    <Controller name='bio' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Short Bio About Yourself</Text>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                className='border-4 rounded-xl border-pink-700 text-white h-24 p-2 bg-pink-700'
                                placeholder='short bio about yourself e.g hobbies, philosphies, etc.'
                                placeholderTextColor='#f472b6'></TextInput>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='image' control={control} render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Pressable onPress={() => pickImage(onChange)} className='p-2 border-2 rounded-full border-pink-700'>
                                <Text className='text-pink-700 text-center text-lg font-bold'>pick Profile Picture</Text>
                            </Pressable>
                            {image && <View className='items-center gap-3 justify-center'>
                                <Image source={{ uri: image }} className='w-[150px] h-[150px] mx-auto rounded-full border-pink-700 border-2' />
                                <AntDesign name="delete" size={36} color='#be185d' onPress={() => setImage(null)} />
                            </View>}
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } />
                    <Controller name='full_name' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Full Name</Text>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                className='border-4 rounded-xl border-pink-700 text-white p-2 bg-pink-700'
                                placeholder='john doe'
                                placeholderTextColor='#f472b6'></TextInput>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='gender' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Your Gender</Text>
                            <RNPickerSelect items={genderSelectItems}
                                onValueChange={onChange}
                                itemKey={'d'}
                                activeItemStyle={{ backgroundColor: '#be185d' }}
                                style={pickerSelectStyles}
                                dropdownItemStyle={{ backgroundColor: '#172554' }}
                                placeholder={{ color: 'white', key: 'test', label: 'gender', }}

                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='interested_gender' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Insterested In</Text>
                            <RNPickerSelect items={interestedInSelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#be185d' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='birth_year' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Birth Year</Text>
                            <RNPickerSelect items={birthYearSelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#be185d' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='country' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Country</Text>
                            <RNPickerSelect items={countrySelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#be185d' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='goal' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Relationship Goal</Text>
                            <RNPickerSelect items={goalSelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#be185d' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller control={control} name='age_range' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-700 -mb-4'>Preferred Age Range</Text>
                            <MultiSlider
                                values={range}
                                sliderLength={300} // Length of the slider
                                onValuesChange={val => handleRangeChange(val, onChange)}
                                min={18} // Minimum value
                                max={70} // Maximum value
                                step={1} // Step size
                                allowOverlap={false} // Prevent thumbs from overlapping
                                snapped={true} // Snap to
                                markerStyle={{ backgroundColor: '#be185d', width: 15, height: 15 }}
                                selectedStyle={{ backgroundColor: 'white' }}

                            />
                            <Text className='text-white'>
                                Selected Range: {range[0]} - {range[1]}
                            </Text>
                        </>
                    }>

                    </Controller>
                    {/* <Button title='Submit Your Data' color={'#1d4ed8'} onPress={handleSubmit(data => {
                        console.log(data);
                    }
                    )}></Button> */}
                    {isLoading ? <ActivityIndicator color='#be185d' size={40} className='p-2' /> : <TouchableOpacity className='border-2 border-pink-700 p-4 rounded-full' onPress={handleSubmit(async (data) => {
                        try {
                            setIsLoading(true)
                            await submitProfileDetails({ details: data, uid: user?.id! })
                            router.replace('/(authenticated)/(bottom-bar)/profile')
                        } catch (error) {
                            setIsSnackbarVisible(true)
                        }
                        finally {
                            setIsLoading(false)
                        }

                    })}>

                        <Text className='text-pink-700 text-xl font-bold text-center'>Submit Information</Text>
                    </TouchableOpacity>}

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ProfileDetails
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'white', // Change text color for iOS
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        backgroundColor: '#be185d',
        color: 'white',
        margin: 0,
    },
    viewContainer: {
        backgroundColor: 'blue',
        color: 'red'
    },
    placeholder: {
        color: '#f472b6'
    }


});