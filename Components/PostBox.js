import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native-web';
import { Image } from 'react-native-elements';

const PostBox = () => {
    return (
        <View style={styles.container}>
            <Image />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    postbox: {
        height: 340,
        width: 400,
        maxWidth: 400,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        backgroundColor: 'gray',
        borderRadius: 8,
    },
    imageBox: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },
    textBox: {
        borderRadius: 4,
        color: 'white',
    },
});
export default PostBox;
