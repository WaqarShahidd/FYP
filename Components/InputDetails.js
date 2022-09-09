import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import * as Icons from 'react-native-heroicons/outline';

const InputDetails = ({
    value,
    setValue,
    placeholder,
    secureTextEntry,
    autoF = false,
}) => {
    return (
        <View style={styles.container}>
            {secureTextEntry ? (
                <Icons.LockClosedIcon style={styles.icon} size={20} />
            ) : (
                <Icons.UserIcon style={styles.icon} size={20} />
            )}
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                autoFocus={autoF}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#68145c',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 15,
        alignItems: 'center',
    },
    input: {
        paddingLeft: 10,
    },
    icon: {
        color: 'black',
    },
});
export default InputDetails;
