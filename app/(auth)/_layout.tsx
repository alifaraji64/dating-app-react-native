import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomNavigation } from 'react-native-paper';
import SignIn from './sign-in';
import signUp from './sign-up';
import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';
import { StatusBar } from 'expo-status-bar';


export default function AuthLayout() {
  const colorScheme = useColorScheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<BaseRoute[]>([
    {
      key: 'sign-in',
      title: 'sign in',
      focusedIcon: ({ color, size }) => (
        <Feather name="user-check" size={size} color={color} />
      ),
    },
    {
      key: 'sign-up',
      title: 'sign up',
      focusedIcon: ({ color, size }) => (
        <Feather name="user-plus" size={size} color={color} />
      ),
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    'sign-in': SignIn,
    'sign-up': signUp
  });
  return (
    <>
      <BottomNavigation
        barStyle={{ backgroundColor: '#db2777', height: 70 }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor='#1e3a8a'
      />
      <StatusBar style='dark' />
    </>

  );
}
