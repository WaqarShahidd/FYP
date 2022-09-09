import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import CustomButton from '../Components/CustomButton';
import InputDetails from '../Components/InputDetails';

const SignInScreen = ({ route, navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Height = Dimensions.get('window').height;
    const Width = Dimensions.get('window').width;
    const e = 'h@gmail.com';
    const un = 'huz';
    const ps = '123456789';
    const valid_user = (u_, p_, e, u, p) => {
        if (u_.toLowerCase() === u) {
            if (p_ === p) {
                return true;
            } else if (u_ === e) {
                if (p_ === p) {
                    return true;
                }
            }
        } else {
            return false;
        }
    };
    const onSignInPressed = () => {
        {
            username === ''
                ? Alert.alert('Username / Email required!')
                : password === ''
                ? Alert.alert('Password Required!')
                : valid_user(username, password, e, un, ps)
                ? navigation.navigate('Feed', {
                      name: 'Feed',
                  })
                : (Alert.alert('invalid username or password'),
                  setPassword(''));
        }
    };
    const onForgotPasswordPressed = () => {
        Alert.alert('FORGOT PASSWORD?');
    };
    const onSignInGooglePressed = () => {
        Alert.alert('LOGIN WITH GOOGLE!');
    };
    const onSignInFacebookPressed = () => {
        Alert.alert('LOGIN WITH Facebook!');
    };
    const onSignupPressed = () => {
        navigation.navigate('SignUp', { name: 'SignupScreen' });
    };
    return (
        <ScrollView>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 30,
                    paddingVertical: Height * 0.2,
                }}
            >
                <Text
                    style={{
                        fontSize: 50,
                        color: '#68145c',
                    }}
                >
                    {' '}
                    Sign in{' '}
                </Text>
                <Text
                    style={{ fontSize: 15, color: '#68145c', paddingBottom: 5 }}
                >
                    {' '}
                    Scroll, Like and Share{' '}
                </Text>

                <InputDetails
                    placeholder={'Username / Email'}
                    value={username}
                    setValue={setUsername}
                    autoF={true}
                />
                <InputDetails
                    placeholder={'Password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton
                    text="Forgot Password?"
                    onPress={onForgotPasswordPressed}
                    type="TER"
                />
                <CustomButton text="Sign in" onPress={onSignInPressed} />

                <CustomButton
                    text="Sign in with Google"
                    onPress={onSignInGooglePressed}
                    bgColor={'#FAE9Ea'}
                    fgColor={'#DD4D44'}
                    icon="google"
                    icon_type="font-awesome"
                />
                <CustomButton
                    text="Sign in with Facebook"
                    onPress={onSignInFacebookPressed}
                    bgColor={'#C6DCF5'}
                    fgColor={'#4267B2'}
                    icon="facebook"
                    icon_type="font-awesome"
                />

                <CustomButton
                    text="Don't Have an Account?"
                    onPress={onSignupPressed}
                    type="TER"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
export default SignInScreen;
