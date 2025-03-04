import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const BioInput = ({ value, onChangeText }: { value: string; onChangeText: (text: string) => void }) => {
    return (
        <TextInput
            value={value}
            style={{ backgroundColor: '#db2777' }}
            onChangeText={onChangeText}
        />
    );
};

export default React.memo(BioInput);