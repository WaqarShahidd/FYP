import { Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const CustomButton = ({
    onPress,
    text,
    type = 'MAI',
    fgColor,
    bgColor,
    icon,
    icon_type = '',
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
                type === 'TER' ? {} : { width: '100%' },
            ]}
        >
            <Icon
                name={icon}
                size={14}
                style={{ paddingHorizontal: 5 }}
                color={fgColor}
                type={icon_type}
            />
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {},
                ]}
                numberOfLines={1}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 10,
        marginVertical: 8,

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,

        flexDirection: 'row',
    },

    container_MAI: {
        backgroundColor: '#68145c',
    },

    container_TER: { width: '60%' },

    text: { fontWeight: 'bold', color: 'white' },

    text_TER: {
        color: 'gray',
    },
});
export default CustomButton;
