import { View, Text, SafeAreaView, TextInput, ScrollView, Platform, Button, Image, StyleSheet } from 'react-native'
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



const ProfileDetailsSchema = z.object({
    bio: z.string().min(20, { message: 'your bio should be at least 20 characters' }).max(60, { message: 'your bio should not be less than 60 characters' }),
    image: z.string().min(1, { message: 'profile image is required' }),
    fullName: z.string().min(3, { message: 'your full name should be at least 3 characters' }),
    gender: z.string().min(1,{ message: 'gender is required' }),
    interestedIn: z.string().min(1, { message: 'you should select which gender you are interested in' }),
    birthYear: z.number({ message: 'birth year is required' }),
    country: z.string().min(1, { message: 'country is required' }),
    goal: z.string().min(1, { message: 'relationship goal is required' }),
})


const ProfileDetails = () => {
    const [range, setRange] = useState([18, 70]); // Initial range values

    const handleRangeChange = (values: any) => {
        setRange(values);
    };
    const { control, handleSubmit, formState:{errors} } = useForm({
        resolver: zodResolver(ProfileDetailsSchema),
        defaultValues: {
            bio: '',
            image: '',
            fullName: '',
            gender: '',
            interestedIn: '',
            birthYear: 2000,
            country: '',
            goal: '',
        }
    })
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
    const [image, setImage] = useState<string | null>(null)
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
        <SafeAreaView className='flex-1'>
            <Text className='text-4xl text-white text-center bg-pink-600 pt-12'>Profile Details</Text>
            <ScrollView>
                <View className='w-[350px] mx-auto flex-1 justify-center gap-6 p-4 bg-blue'>
                    <Controller name='bio' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-600 -mb-4'>Short Bio About Yourself</Text>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                className='border-4 rounded-lg border-pink-600 text-pink-600 h-24 p-2'
                                placeholder='short bio about yourself e.g hobbies, philosphies, etc.'
                                placeholderTextColor='#db2777'></TextInput>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='image' control={control} render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Button title="Pick Profile Picture" onPress={() => pickImage(onChange)} color={'#db2777'} />
                            {image && <View className='items-center gap-3 justify-center'>
                                <Image source={{ uri: image }} className='w-[150px] h-[150px] mx-auto rounded-full border-pink-600 border-2' />
                                <AntDesign name="delete" size={36} color='#db2777' onPress={() => setImage(null)} />
                            </View>}
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } />
                    <Controller name='fullName' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-600 -mb-4'>Full Name</Text>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                className='border-4 rounded-lg border-pink-600 text-pink-600 p-2'
                                placeholder='john doe'
                                placeholderTextColor='#db2777'></TextInput>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='gender' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-600 -mb-4'>Your Gender</Text>
                            <RNPickerSelect items={genderSelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#db2777' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='interestedIn' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-600 -mb-4'>Insterested In</Text>
                            <RNPickerSelect items={interestedInSelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#db2777' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='birthYear' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-600 -mb-4'>Birth Year</Text>
                            <RNPickerSelect items={birthYearSelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#db2777' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='country' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-600 -mb-4'>Country</Text>
                            <RNPickerSelect items={countrySelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#db2777' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Controller name='goal' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <Text className='text-pink-600 -mb-4'>Relationship Goal</Text>
                            <RNPickerSelect items={goalSelectItems}
                                onValueChange={onChange}
                                activeItemStyle={{ backgroundColor: '#db2777' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <>
                        <Text className='text-pink-600 -mb-4'>Preferred Age Range</Text>
                        <MultiSlider
                            values={range}
                            sliderLength={300} // Length of the slider
                            onValuesChange={handleRangeChange}
                            min={18} // Minimum value
                            max={70} // Maximum value
                            step={1} // Step size
                            allowOverlap={false} // Prevent thumbs from overlapping
                            snapped={true} // Snap to
                            markerStyle={{ backgroundColor: '#db2777', width: 15, height: 15 }}
                            selectedStyle={{ backgroundColor: 'white' }}

                        />
                        <Text className='text-white'>
                            Selected Range: {range[0]} - {range[1]}
                        </Text>
                    </>
                    <Button title='Submit Your Data' color={'#1d4ed8'} onPress={handleSubmit(data=>{
                        console.log(data);
                        console.log(errors);
                        
                    }
                    )}></Button>
                </View>
            </ScrollView>
        </SafeAreaView>
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
        color: 'red', // Change text color for iOS
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        backgroundColor: '#db2777'
    },
    viewContainer: {
        backgroundColor: 'blue',
        color: 'red'
    },
    placeholderColor: {
        color: 'orange'
    }
});