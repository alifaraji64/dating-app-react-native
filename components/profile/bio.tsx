import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Shadow } from 'react-native-shadow-2'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Button, Modal, Portal, TextInput } from 'react-native-paper'
import { useAuth } from '@/context/auth-context'
import { updateDetail } from '@/actions/profile-details'
import EditModal from './edit-modal'
export default function Bio({ bio, me }: { bio: string, me: boolean }) {
    const [visible, setVisible] = useState(false);
    const [editText, setEditText] = useState<string>("");
    const { user } = useAuth()
    const showModal = () => {
        console.log('11');

        setEditText(bio)
        setVisible(true)
    }
    const hideModal = () => {
        setEditText('')
        setVisible(false);
    }
    return (
        <View className='flex-1 justify-between flex -mt-20' id='BIO'>
            {/* <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: '#1e3a8a', width: '90%', marginHorizontal: 'auto', padding: 20, borderRadius: 10 }}>
                    <View>
                        <TextInput
                            label="Bio"
                            value={editText}
                            style={{ backgroundColor: '#db2777' }}
                            onChangeText={text => setEditText(text)}
                        />
                        <Button mode='outlined'
                            onPress={async () => {
                                try {
                                    await updateDetail({ id: user?.id!, fieldName: 'bio', value: editText })
                                    setVisible(false)
                                } catch (error) {
                                    console.log(error);

                                }

                            }
                            }
                            disabled={editText == bio}
                            textColor='white'
                            className=' mx-auto mt-4'>Edit</Button>
                    </View>
                </Modal>
            </Portal> */}
            <EditModal 
                editText={editText}
                fieldName='bio'
                hideModal={hideModal}
                setEditText={setEditText}
                setVisible={setVisible}
                uid={user?.id!}
                visible={visible}
            />
            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 10 }}>
                <View className='px-6 py-3 flex-1 justify-center items-center flex-col'>
                    <Text className='text-pink-400 font-semibold text-lg text-center'>
                        {bio}
                    </Text>
                </View>
            </Shadow>
            {me ? <Button onPress={() => showModal()} className='flex  flex-row justify-start items-center mt-2'>
                <AntDesign name="edit" size={24} color="white" className=' w-10' />
                <Text className='text-white'>Edit Bio</Text>
            </Button> : null}
        </View>
    )
}