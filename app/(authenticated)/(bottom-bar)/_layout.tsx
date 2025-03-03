import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomNavigation } from 'react-native-paper';
import React from 'react';
import { Text } from 'react-native';
import Profile from './profile';
import FindMatches from './find-matches';
import Messages from './chats';
import Chats from './chats';
import SingleChat from '../single-chat';
import MatchRequests from './match-requests';

const NotificationsRoute = () => <Text>Notifications</Text>;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function AuthenticatedLayout() {
  const [index, setIndex] = React.useState(0);
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [routes] = React.useState([
    { key: 'profile', title: 'Profile', focusedIcon: 'face-man-profile', unfocusedIcon: 'heart-outline' },
    { key: 'find-matches', title: 'Find Matches', focusedIcon: 'find-replace' },
    { key: 'chats', title: 'Messages', focusedIcon: 'chat-outline' },
    { key: 'requests', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    //{ key: 'single-chat', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    profile: Profile,
    'find-matches': FindMatches,
    chats: Chats,
    requests: MatchRequests
  });
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <BottomNavigation
        barStyle={{ backgroundColor: '#db2777', padding: 0, margin: 0 }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor='#1e3a8a' 
        inactiveColor='#1e3a8a'
        activeIndicatorStyle={{backgroundColor:'#f3f4f6'}}
      />
      <StatusBar style="auto" />
    </ThemeProvider>

  );
}
