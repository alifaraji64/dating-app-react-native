import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Appbar, FAB, Snackbar } from 'react-native-paper'
import { router } from 'expo-router'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { images } from '@/components/profile/hero'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Details from '@/components/profile/details'

export default function FindMatches() {
  const [isSnackbarVisible, SetIsSnackbarVisible] = useState(false)
  return (
    <SafeAreaView className='flex-1 bg-blue-900 relative'>
      <Snackbar
      style={{position:'absolute',backgroundColor:'black'}}
        visible={isSnackbarVisible}
        onDismiss={() => { SetIsSnackbarVisible(false); }}
        duration={4000}
        >
        you're request has been sent, you can start chatting after the user confirms your request
      </Snackbar>
      <Appbar.Header className='bg-blue-900' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
        <Appbar.BackAction color='white' onPress={() => { router.back() }} />
        <Appbar.Content color='white' title="find new matches" />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>
      <ScrollView>
        <View id='WRAPPER' className='min-w-[360px] mx-auto flex-1 justify-center gap-28 pb-8 bg-blue-900 relative'>
          <SwiperFlatList
            autoplayLoop
            showPagination
            paginationStyle={{ position: 'absolute', top: 410 }}
            paginationActiveColor='#be185d'
            data={images}
            renderItem={({ item }) => (
              <View style={[styles.child,]} className='text-center'>
                <Image source={{ uri: item.url }} height={400} resizeMode='contain' />
              </View>
            )}
          />
          <Details me={false}></Details>
        </View>
      </ScrollView>
      <FAB
        icon="connection"
        style={styles.fab} className='bg-pink-600'
        size='medium'
        onPress={() => SetIsSnackbarVisible(true)}
      />
    </SafeAreaView >
  )
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  child: { width: width, justifyContent: 'center' },
  text: { textAlign: 'center' },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});