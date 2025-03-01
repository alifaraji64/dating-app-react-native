
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import * as zod from 'zod'
const AuthSchema = zod.object({
  email: zod.string().email({ message: 'email is required' }),
  password: zod.string().min(6, { message: 'password should be at least 6 characters' })
})
export default function SignIn() {
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  return (
    <SafeAreaView className='flex-1 bg-blue-900'>
      <View className='w-4/5 mx-auto flex-1 justify-center gap-6 '>
        <FontAwesome6 name="hand-holding-heart" size={140} color="#db2777" className='mb-20 text-center' />
        <Controller name='email' control={control} render={({ fieldState: { error }, field: { value, onChange } }) =>
          <>
            <TextInput
              className='border-4 rounded-lg border-pink-600 text-pink-600 font-semibold'
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
              className='border-4 rounded-lg border-pink-600 text-pink-600 font-semibold'
              value={value}
              onChangeText={onChange}
              editable={!formState.isSubmitting}
              placeholder='password' placeholderTextColor={'#db2777'}></TextInput>
            {error && <Text>{error.message}</Text>}
          </>
        } />
        <TouchableOpacity className='p-2 rounded-lg border-pink-600 border-4 bg-pink-600'>
          <Text className='bg-pink-600 text-center font-bold'>Sign In</Text>
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
