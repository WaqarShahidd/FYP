import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';

const Feed = (image = '', text = '') => {
    const postinfo = [
        {
            postimage:
                'https://i.pinimg.com/564x/21/90/56/219056f882c103ef33db32c5396e77f8.jpg',
            posttext: '',
        },
    ];
    return (
        <View>
            <View style={styles.postbox}>
                <Image />
            </View>
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

export default Feed;
