import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar, FAB, Snackbar, Button } from 'react-native-paper'
import { router } from 'expo-router'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { images } from '@/components/profile/hero'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Details from '@/components/profile/details'
import { useAuth } from '@/context/auth-context'
import Bio from '@/components/profile/bio'
import Name from '@/components/profile/name'
import { supabase } from '@/lib/supabase'
import { Profile } from '@/lib/types'

export default function FindMatches() {
  const [isSnackbarVisible, SetIsSnackbarVisible] = useState(false)
  const { user, profile } = useAuth()
  const [matches, setMatches] = useState<Profile[]>([])
  const [matchIndex, setmatchIndex] = useState(0)
  const connect = () => {
    SetIsSnackbarVisible(true)
  }
  useEffect(() => {
    (async () => {
      console.log(profile);
      const currentYear = new Date().getFullYear();
      let query = supabase.from('user').select('*')
      profile?.interested_gender == 'both' ?
        query = query.in('gender', ['male', 'female']) : query.match({ 'gender': profile?.interested_gender })
      const { data, error } = await query
        .neq('user_id', user?.id)
        .lte('birth_year', currentYear - (profile?.age_range[0]!)).gte('birth_year', currentYear - (profile?.age_range[1]!))
        .returns<Profile[]>()
      console.log('user for match');
      setMatches(data!)
      console.log(data);
    })()

  }, [profile])
  return (
    <SafeAreaView className='flex-1 bg-blue-900 relative'>
      <Snackbar
        style={{ position: 'absolute', backgroundColor: 'black' }}
        visible={isSnackbarVisible}
        onDismiss={() => { SetIsSnackbarVisible(false); }}
        duration={4000}
      >
        you're request has been sent, you can start chatting after the user confirms your request
      </Snackbar>
      <Appbar.Header className='bg-blue-900 mr-2' style={{ backgroundColor: '#1e3a8a', borderBottomColor: '#172554', borderBottomWidth: 1 }}>
        <Appbar.BackAction color='white' onPress={() => { router.back() }} />
        <Appbar.Content color='white' title="find new match" />
        <Button compact mode="outlined" onPress={() => console.log('Pressed')} textColor='#db2777' className='mr-2' rippleColor={'#1e3a8a'}>
          skip
        </Button>
        <Button compact mode="outlined" onPress={() => connect()} textColor='#db2777' rippleColor={'#1e3a8a'}>
          connect
        </Button>
      </Appbar.Header>
      <ScrollView>
        <View id='WRAPPER' className='min-w-[360px] mx-auto flex-1 px-2 justify-center gap-28 pb-8 bg-blue-900 relative'>
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
          <Name me={false} name='test name'></Name>
          <Bio bio='test bio and this is a really nice bio let us enjoy let me test nmre to see how it is' me={false}></Bio>
          <Details me={false}></Details>
        </View>
      </ScrollView>
      <FAB
        icon="connection"
        style={styles.fab} className='bg-pink-600'
        size='medium'
        onPress={() => connect()}
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