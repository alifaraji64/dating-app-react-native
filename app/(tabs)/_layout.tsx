import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="sign-in"
        options={{
          title: 'sign in',
          tabBarIcon: ({ color, focused }) => <Feather name="user-check" size={24} color={focused ? 'black' : '#db2777'} />,
          tabBarActiveBackgroundColor: '#db2777',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#db2777'
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'sign up',
          tabBarIcon: ({ color, focused }) => <Feather name="user-check" size={24} color={focused ? 'black' : '#db2777'} />,
          tabBarActiveTintColor: 'black',
          tabBarActiveBackgroundColor: '#db2777',
          tabBarInactiveTintColor: '#db2777'
        }}
      />
    </Tabs>
  );
}
