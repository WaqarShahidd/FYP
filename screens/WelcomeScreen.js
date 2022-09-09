import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import CustomButton from '../Components/CustomButton';

const WelcomeScreen = ({ route, navigation }) => {
    const Height = Dimensions.get('window').height;
    const [quote, setQuote] = useState('Loading..');
    const randomQuote = () => {
        fetch('https://api.quotable.io/random')
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setQuote(result.content);
            });
    };
    useEffect(() => {
        randomQuote();
    }, []);

    const onWelcomeSignInPressed = () => {
        navigation.navigate('SignIn', { name: 'SigninScreen' });
    };
    const onWelcomeSingUpPressed = () => {
        navigation.navigate('SignUp', { name: 'SignupScreen' });
    };
    return (
        <View style={[styles.container, { paddingTop: Height * 0.3 }]}>
            <Text style={{ fontSize: 60, color: 'black' }}>
                DOT
                <Text style={[{ color: '#68145c' }]}>EX</Text>
            </Text>
            <Text style={[styles.text_small, {}]}>{quote}</Text>
            <CustomButton text={'Sign In'} onPress={onWelcomeSignInPressed} />
            <CustomButton text={'Sign Up'} onPress={onWelcomeSingUpPressed} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        paddingHorizontal: 100,
    },
    text_small: {
        paddingTop: 0,
        fontSize: 15,
        color: '#68145c',
    },
});
export default WelcomeScreen;
