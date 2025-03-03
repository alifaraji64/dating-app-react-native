import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import React from 'react';
import { Stack } from 'expo-router';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import '../global.css'
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '@/context/auth-context';
import { PaperProvider } from 'react-native-paper';
export default function RootLayout() {

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
            <PaperProvider>
                <AuthProvider>
                    <Stack
                        screenOptions={{
                            headerShown: false, // Show header for all screens by default
                            statusBarHidden: true
                        }}
                    />
                    <StatusBar style='auto' />
                </AuthProvider>
            </PaperProvider>

        </ThemeProvider>

    );
}
