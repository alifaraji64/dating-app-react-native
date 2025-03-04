
import { supabase } from '@/lib/supabase';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { ActivityIndicator, Snackbar } from 'react-native-paper';
import * as zod from 'zod'
const AuthSchema = zod.object({
  email: zod.string().email({ message: 'email is required' }),
  password: zod.string().min(6, { message: 'password should be at least 6 characters' })
})
export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleSignIn = async (creds: { email: string, password: string }) => {
    if (isLoading) return
    setIsLoading(true)
    console.log(creds);
    const { data, error } = await supabase.auth.signInWithPassword({ email: creds.email, password: creds.password })
    if (error) {
      setIsSnackbarVisible(true)
      console.log(error);
    }
    else {
      router.replace('/(authenticated)/(bottom-bar)/profile')
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
        <Text className='text-gray-200'> error occured during sign in</Text>

      </Snackbar>
      <View className='w-4/5 mx-auto flex-1 justify-center gap-6 max-w-[360px]'>
        <FontAwesome6 name="hand-holding-heart" size={140} color="#db2777" className='mb-20 text-center' />
        <Controller name='email' control={control} render={({ fieldState: { error }, field: { value, onChange } }) =>
          <>
            <TextInput
              className='border-4 rounded-lg border-pink-600 text-pink-600 font-semibold p-1'
              value={value}
              onChangeText={onChange}
              editable={!formState.isSubmitting}
              placeholder='email' placeholderTextColor={'#db2777'}></TextInput>
            {error && <Text>{error.message}</Text>}
          </>
        } />
        <Controller name='password' control={control} render={({ fieldState: { error }, field: { value, onChange } }) =>
          <>
            <TextInput
              className='border-4 rounded-lg border-pink-600 text-pink-600 font-semibold p-1'
              value={value}
              onChangeText={onChange}
              editable={!formState.isSubmitting}
              placeholder='password' placeholderTextColor={'#db2777'}></TextInput>
            {error && <Text>{error.message}</Text>}
          </>
        } />
        <TouchableOpacity className='p-2 rounded-lg border-pink-600 border-4 bg-pink-600' onPress={handleSubmit(handleSignIn)}>
          {isLoading ? <ActivityIndicator color='#1e3a8a' size={30} /> : <Text className='text-center font-bold' >Sign In</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white'
  }
});
