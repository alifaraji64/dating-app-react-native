import { View, Text, SafeAreaView, TextInput, ScrollView, Platform, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';
const ProfileDetailsSchema = z.object({
    bio: z.string().min(20, { message: 'your bio should be at least 20 characters' }).max(60, { message: 'your bio should not be less than 60 characters' })
})

const ProfileDetails = () => {
    const { control, handleSubmit, formState } = useForm({
        resolver: zodResolver(ProfileDetailsSchema),
        defaultValues: {
            bio: ''
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
    }, []);
    const [image, setImage] = useState<string | null>(null)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,// Specify 'Images' for images only
            allowsEditing: true, // Allow the user to crop/edit the image
            aspect: [4, 3], // Aspect ratio for cropping
            quality: 1, // Image quality (0 to 1)
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <SafeAreaView className='flex-1'>
            <Text className='text-4xl text-white text-center bg-pink-600 pt-12'>Profile details</Text>
            <ScrollView>
                <View className='w-[350px] mx-auto flex-1 justify-center gap-6 p-4'>
                    <Controller name='bio' render={({ fieldState: { error }, field: { value, onChange } }) =>
                        <>
                            <TextInput
                                onChange={onChange}
                                value={value}
                                className='border-4 rounded-lg border-pink-600 text-pink-600 h-24 p-2'
                                placeholder='short bio about yourself e.g hobbies, philosphies, etc.'
                                placeholderTextColor='#db2777'></TextInput>
                            {error && <Text className='text-orange-500'>{error.message}</Text>}
                        </>
                    } control={control} />
                    <Button title="Pick Profile Picture" onPress={pickImage} color={'#db2777'} />
                    {image && <View className='items-center gap-3 justify-center'>
                        <Image source={{ uri: image }} className='w-[150px] h-[150px] mx-auto rounded-full border-pink-600 border-2' />
                        <AntDesign name="delete" size={36} color='#db2777' onPress={()=>setImage(null)}/>
                    </View>}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileDetails