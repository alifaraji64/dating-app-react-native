import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import { useAuth } from '@/context/auth-context';
import EditModal from './edit-modal';

const Bio = ({ bio, me }: { bio: string; me: boolean }) => {
    const [visible, setVisible] = useState(false);
    const [editText, setEditText] = useState<string>(bio);
    const { user } = useAuth();

    const showModal = () => {
        setEditText(bio);
        setVisible(true);
    };

    const hideModal = () => {
        setEditText('');
        setVisible(false);
    };

    return (
        <View className="flex-1 justify-between items-center flex -mt-20" id="BIO">
            <EditModal
                editText={editText}
                fieldName="bio"
                hideModal={hideModal}
                setEditText={setEditText}
                setVisible={setVisible}
                uid={user?.id!}
                visible={visible}
            />
            <Shadow distance={10} startColor="rgba(0,0,0,0.3)" style={{ borderRadius: 10 }}>
                <View className="px-6 py-3 flex-1 justify-center items-center flex-col">
                    <Text className="text-pink-400 font-semibold text-lg text-center">
                        {bio}
                    </Text>
                </View>
            </Shadow>
            {me && (
                <Button onPress={showModal} className="flex flex-row justify-start items-center mt-2 self-start">
                    <AntDesign name="edit" size={24} color="white" className="w-10" />
                    <Text className="text-white">Edit Bio</Text>
                </Button>
            )}
        </View>
    );
};

export default React.memo(Bio); 