import { View, Text, TouchableOpacity, Pressable, Image, StyleSheet, Dimensions, Modal, } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Shadow } from 'react-native-shadow-2';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import EvilIcons from '@expo/vector-icons/EvilIcons';
export const images = [
  { id: 1, url: 'https://imgs.search.brave.com/jFhYNrlOIMIep1M67Eg6E1OmkKmMvzB6XfqOW3Qc4Mw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzJj/L2RiLzY5MmNkYjli/NWFhMmY5YjA5NDMw/NDhlN2QwNGZjMzAx/LmpwZw' },
  { id: 2, url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8hNgyjKStajqrBg-YcYUAwHaJQ%26pid%3DApi&f=1&ipt=c1a75a50c52123d61239fb44e0387b99c581f02e5b50f705d611b68250a93f5c&ipo=images' },
  { id: 3, url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9YOTTNwl0a1K67suyHnP6gHaJM%26pid%3DApi&f=1&ipt=a4cc2fe1201580e5086e3518d30daef5f10b49eba6b17cfe869cbaafc4859509&ipo=images' },
]
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className='flex-1'>
      <Modal
        transparent
        visible={isVisible}
      >

        <View style={styles.modalBackground} pointerEvents="box-none">
          <View style={styles.modalContainer} className='relative justify-center' pointerEvents="box-none">

            <SwiperFlatList
              autoplayLoop
              showPagination
              paginationActiveColor='#be185d'
              data={images}
              renderItem={({ item }) => (
                <View style={[styles.child,]} className='text-center'>
                  <Image source={{ uri: item.url }} height={500} resizeMode='contain' />
                  <TouchableOpacity className='bg-red-600 mx-auto p-1 rounded-full text-center w-12' onPress={() => {/*DELETE THE PICTURE*/ }}>
                    <EvilIcons name="trash" size={42} color="white" className='text-center' />
                  </TouchableOpacity>
                </View>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}
              className='absolute top-4'
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
      <View className='relative flex-1 justify-center items-center '>
        <View className='absolute top-10 left-2'>
          <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
            <AntDesign name="heart" size={48} color="#be185d" className='p-2' />
          </Shadow>
        </View>
        <View className='absolute top-36 left-2'>
          <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
            <AntDesign name="hearto" size={48} color="#be185d" className='p-2' />
          </Shadow>
        </View>
        <Pressable className='top-12 relative' onPress={() => setIsVisible(true)}>
          <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
            <Image source={{ uri: 'https://imgs.search.brave.com/jFhYNrlOIMIep1M67Eg6E1OmkKmMvzB6XfqOW3Qc4Mw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzJj/L2RiLzY5MmNkYjli/NWFhMmY5YjA5NDMw/NDhlN2QwNGZjMzAx/LmpwZw' }} className='w-56 h-56 border-4 border-pink-700 rounded-full mx-auto'></Image>
          </Shadow>
        </Pressable>
        <View className='absolute top-10 right-2'>
          <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
            <AntDesign name="hearto" size={48} color="#be185d" className='p-2' />
          </Shadow>
        </View>
        <View className='absolute top-36 right-2'>
          <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 100 }}>
            <AntDesign name="heart" size={48} color="#be185d" className='p-2' />
          </Shadow>
        </View>
      </View>
    </View>


  )
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  child: { width: width - 20, justifyContent: 'center' },
  text: { textAlign: 'center' },
});
