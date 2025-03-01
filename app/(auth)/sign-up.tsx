import { Image, StyleSheet, Platform, Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { supabase } from '@/lib/supabase';
import { Redirect, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Snackbar } from 'react-native-paper';
const AuthSchema = zod.object({
  email: zod.string().email({ message: 'email is required' }),
  password: zod.string().min(6, { message: 'password should be at least 6 characters' })
})

export default function signUp() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleSignUp = async (creds: { email: string, password: string }) => {
    if (isLoading) return
    setIsLoading(true)
    console.log(creds);
    const { data, error } = await supabase.auth.signUp({ email: creds.email, password: creds.password })
    if (error) {
      setIsSnackbarVisible(true)
      console.log(error);
    }
    else {
      router.replace('/(authenticated)/profile-details')
    }
    setIsLoading(false)
  }
  return (
    <SafeAreaView className='flex-1 bg-blue-900'>
      <Snackbar
        style={{ position: 'absolute', backgroundColor: 'black' }}
        visible={isSnackbarVisible}
        onDismiss={() => { setIsSnackbarVisible(false); }}
        duration={4000}
      >
        error occured during sign up
      </Snackbar>
      <View className='w-4/5 mx-auto flex-1 justify-center gap-6'>
        <FontAwesome6 name="hand-holding-heart" size={140} color="#db2777" className='mb-20 text-center' />
        <Controller name='email' control={control} render={({ fieldState: { error }, field: { value, onChange } }) =>
          <>
            <TextInput
              className='border-4 rounded-lg border-pink-600 text-pink-600 font-semibold'
              value={value}
              onChangeText={onChange}
              editable={!formState.isSubmitting}
              placeholder='email' placeholderTextColor={'#db2777'}></TextInput>
            {error && <Text className='text-orange-500'>{error.message}</Text>}
          </>
        } />
        <Controller name='password' control={control} render={({ fieldState: { error }, field: { value, onChange } }) =>
          <>
            <TextInput
              className='border-4 rounded-lg border-pink-600 text-pink-600 font-semibold'
              value={value}
              onChangeText={onChange}
              editable={!formState.isSubmitting}
              secureTextEntry
              placeholder='password' placeholderTextColor={'#db2777'}></TextInput>
            {error && <Text className='text-orange-500'>{error.message}</Text>}
          </>
        } />
        <TouchableOpacity className='p-2 rounded-lg border-pink-600 border-4 bg-pink-600' onPress={handleSubmit(handleSignUp)}>
          {isLoading ? <ActivityIndicator color='#1e3a8a' size={30} /> : <Text className='text-center font-bold' >Sign Up</Text>}


        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
