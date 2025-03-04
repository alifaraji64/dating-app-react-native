import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Modal, Portal, Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { updateDetail } from '@/actions/profile-details';
import { Profile } from '@/lib/types';
import BioInput from './bio-input'; // Import the isolated TextInput component
import { birthYearSelectItems, countrySelectItems, genderSelectItems, goalSelectItems, interestedInSelectItems } from '@/constants/selector-data';

const EditModal = ({
    setEditText,
    fieldName,
    editText,
    user,
    setVisible,
    visible,
    uid,
    hideModal,
}: {
    setEditText: React.Dispatch<React.SetStateAction<any>>;
    fieldName: keyof Profile;
    editText: any;
    user?: Profile;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
    uid: string;
    hideModal: () => void;
}) => {
    const [isSubmitting, setisSubmitting] = useState(false)
    const handleSubmit = useCallback(async () => {
        if (!uid || !fieldName) {
            console.error("UID or fieldName is undefined");
            return;
        }
        setisSubmitting(true)
        try {
            await updateDetail({ id: uid, fieldName: fieldName!, value: editText });
            setVisible(false);
        } catch (error) {
            console.log(error);
        }
        finally {
            setisSubmitting(false)
        }
    }, [uid, fieldName, editText, setVisible]);

    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={{
                    backgroundColor: '#1e3a8a',
                    width: '90%',
                    maxWidth: 360,
                    marginHorizontal: 'auto',
                    padding: 20,
                    borderRadius: 10,
                }}
            >
                <View>
                    {fieldName === 'country' ? (
                        <>
                            <Text className="text-pink-600 pb-2 font-semibold">Country</Text>
                            <RNPickerSelect
                                items={countrySelectItems}
                                onValueChange={setEditText}
                                style={pickerSelectStyles}
                            />
                        </>
                    ) : fieldName === 'gender' ? (
                        <>
                            <Text className="text-pink-600 pb-2 font-semibold">Gender</Text>
                            <RNPickerSelect
                                items={genderSelectItems}
                                onValueChange={setEditText}
                                style={pickerSelectStyles}
                            />
                        </>
                    ) : fieldName === 'interested_gender' ? (
                        <>
                            <Text className="text-pink-600 pb-2 font-semibold">Interested In</Text>
                            <RNPickerSelect
                                items={interestedInSelectItems}
                                onValueChange={setEditText}
                                style={pickerSelectStyles}
                            />
                        </>
                    ) : fieldName === 'birth_year' ? (
                        <>
                            <Text className="text-pink-600 pb-2 font-semibold">Birth Year</Text>
                            <RNPickerSelect
                                items={birthYearSelectItems}
                                onValueChange={setEditText}
                                style={pickerSelectStyles}
                            />
                        </>
                    ) : fieldName === 'goal' ? (
                        <>
                            <Text className="text-pink-600 pb-2 font-semibold">Relationship Goal</Text>
                            <RNPickerSelect
                                items={goalSelectItems}
                                onValueChange={setEditText}
                                style={pickerSelectStyles}
                            />
                        </>
                    ) : fieldName === 'age_range' ? (
                        <>
                            <Text className="text-pink-600 pb-2 font-semibold">Preferred Age Range</Text>
                            <MultiSlider
                                values={user?.age_range}
                                sliderLength={300}
                                onValuesChange={setEditText}
                                min={18}
                                max={70}
                                step={1}
                                markerStyle={{ backgroundColor: '#be185d', width: 15, height: 15 }}
                                selectedStyle={{ backgroundColor: 'white' }}
                            />
                            <Text className="text-white">
                                {Array.isArray(editText) ? <>
                                    Selected Range: {editText[0]} - {editText[1]}
                                </> : null}

                            </Text>
                        </>
                    ) : fieldName === 'bio' ? (
                        <BioInput value={editText} onChangeText={setEditText} />
                    ) : null}
                    <Button
                        mode="outlined"
                        onPress={handleSubmit}
                        disabled={editText === user?.[fieldName!] || isSubmitting}
                        textColor="white"
                        className="mx-auto mt-4"
                    >
                        Edit
                    </Button>
                </View>
            </Modal>
        </Portal>
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'white',
        paddingRight: 30,
    },
    inputAndroid: {
        backgroundColor: '#be185d',
        color: 'white',
        margin: 0,
    },
    placeholder: {
        color: '#f472b6',
    },
});

export default React.memo(EditModal);