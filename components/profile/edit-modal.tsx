import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Modal, Portal, Button, TextInput } from 'react-native-paper'

import RNPickerSelect, { Item } from 'react-native-picker-select';
import { birthYearSelectItems, countrySelectItems, genderSelectItems, goalSelectItems, interestedInSelectItems } from '@/constants/selector-data';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { updateDetail } from '@/actions/profile-details';
import { User } from '@/lib/types';
export default function EditModal({ setEditText, fieldName, editText, user, setVisible, visible, uid, hideModal }: {
    setEditText: React.Dispatch<React.SetStateAction<any>>,
    fieldName: keyof User,
    editText: any,
    user?: User,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    visible: boolean,
    uid: string,
    hideModal: () => void
}) {
    return (
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: '#1e3a8a', width: '90%', marginHorizontal: 'auto', padding: 20, borderRadius: 10 }}>
                <View>
                    {fieldName == 'country' ?
                        <>
                            <Text className='text-pink-600 pb-2 font-semibold'>Country</Text>
                            <RNPickerSelect items={countrySelectItems}
                                onValueChange={(val) => setEditText(val)}
                                activeItemStyle={{ backgroundColor: '#be185d' }}
                                style={pickerSelectStyles}
                            ></RNPickerSelect>
                        </> : fieldName == 'gender' ?
                            <>
                                <Text className='text-pink-600 pb-2 font-semibold'>Insterested In</Text>
                                <RNPickerSelect items={genderSelectItems}
                                    onValueChange={(val) => setEditText(val)}
                                    activeItemStyle={{ backgroundColor: '#be185d' }}
                                    style={pickerSelectStyles}
                                ></RNPickerSelect>
                            </> : fieldName == 'interested_gender' ?
                                <>
                                    <Text className='text-pink-600 pb-2 font-semibold'>Insterested In</Text>
                                    <RNPickerSelect items={interestedInSelectItems}
                                        onValueChange={(val) => setEditText(val)}
                                        activeItemStyle={{ backgroundColor: '#be185d' }}
                                        style={pickerSelectStyles}
                                    ></RNPickerSelect>
                                </>
                                : fieldName == 'birth_year' ?
                                    <>
                                        <Text className='text-pink-600 pb-2 font-semibold'>Birth Year</Text>
                                        <RNPickerSelect items={birthYearSelectItems}
                                            onValueChange={(val) => setEditText(val)}
                                            activeItemStyle={{ backgroundColor: '#be185d' }}
                                            style={pickerSelectStyles}
                                        ></RNPickerSelect>
                                    </> : fieldName == 'goal' ? <>
                                        <Text className='text-pink-600 pb-2 font-semibold'>Relationship Goal</Text>
                                        <RNPickerSelect items={goalSelectItems}
                                            onValueChange={(val) => setEditText(val)}
                                            activeItemStyle={{ backgroundColor: '#be185d' }}
                                            style={pickerSelectStyles}
                                        ></RNPickerSelect></> : fieldName == 'age_range' ? <>
                                            <Text className='text-pink-600 pb-2 font-semibold'>Preferred Age Range</Text>
                                            <MultiSlider
                                                values={user?.age_range}
                                                sliderLength={300} // Length of the slider
                                                onValuesChange={val => setEditText(val)}
                                                min={18} // Minimum value
                                                max={70} // Maximum value
                                                step={1} // Step size
                                                allowOverlap={false} // Prevent thumbs from overlapping
                                                snapped={true} // Snap to
                                                markerStyle={{ backgroundColor: '#be185d', width: 15, height: 15 }}
                                                selectedStyle={{ backgroundColor: 'white' }}

                                            />
                                            <Text className='text-white'>
                                                Selected Range: {editText[0]} - {editText[1]}
                                            </Text>
                                        </> : fieldName == 'bio' ?
                                        <>
                                            <TextInput
                                                label="Bio"
                                                value={editText}
                                                style={{ backgroundColor: '#db2777' }}
                                                onChangeText={text => setEditText(text)}
                                            />
                                        </> : null}
                    <Button mode='outlined'
                        onPress={async () => {
                            try {
                                await updateDetail({ id: uid, fieldName: fieldName!, value: editText })
                                setVisible(false)
                            } catch (error) {
                                console.log(error);

                            }

                        }
                        }
                        disabled={editText == user?.[fieldName!]}
                        textColor='white'
                        className=' mx-auto mt-4'>Edit</Button>
                </View>
            </Modal>
        </Portal>
    )
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'white', // Change text color for iOS
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        backgroundColor: '#be185d',
        color: 'white',
        margin: 0,
    },
    viewContainer: {
        backgroundColor: 'blue',
        color: 'red'
    },
    placeholder: {
        color: '#f472b6'
    }


});