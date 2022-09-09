import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import CustomButton from '../Components/CustomButton';
import InputDetails from '../Components/InputDetails';

const SignupScreen = ({ route, navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [email, setEmail] = useState('');
    const Height = Dimensions.get('window').height;
    const Width = Dimensions.get('window').width;
    const email_re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const valid_email = (e) => {
        return e.match(email_re);
    };
    const valid_cpass = (cp, p) => {
        return cp === p;
    };
    const valid_password = (p) => {
        return p.length >= 8;
    };
    const onSignUpPressed = () => {
        {
            email === ''
                ? Alert.alert('Email Required!')
                : username === ''
                ? Alert.alert('You have to have a name bro!')
                : password === ''
                ? Alert.alert('Password cannot be empty')
                : cpassword === ''
                ? Alert.alert('Confirm Password cannot be empty')
                : valid_email(email)
                ? valid_password(password)
                    ? valid_cpass(cpassword, password)
                        ? (setCpassword(''),
                          setPassword(''),
                          setEmail(''),
                          setUsername(''),
                          navigation.navigate('SignIn', {
                              name: 'SigninScreen',
                          }))
                        : Alert.alert('Please enter same passwords!')
                    : Alert.alert('Password must contain 8 characters')
                : Alert.alert('invalid email address');
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
    const haveAccountPressed = () => {
        navigation.navigate('SignIn', {
            name: 'SigninScreen',
        });
    };
    return (
        <ScrollView>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 30,
                    paddingVertical: Height * 0.1,
                }}
            >
                <Text
                    style={{
                        fontSize: 50,
                        color: '#68145c',
                    }}
                >
                    {' '}
                    Sign up{' '}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        color: '#68145c',
                        paddingBottom: 5,
                        paddingTop: 5,
                    }}
                >
                    {' '}
                    Introduce Yourself{' '}
                </Text>

                <InputDetails
                    placeholder={'Email'}
                    value={email}
                    setValue={setEmail}
                />
                <InputDetails
                    placeholder={'Username'}
                    value={username}
                    setValue={setUsername}
                />
                <InputDetails
                    placeholder={'Password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <InputDetails
                    placeholder={'Confirm Password'}
                    value={cpassword}
                    setValue={setCpassword}
                    secureTextEntry
                />
                <CustomButton text="Sign up" onPress={onSignUpPressed} />

                <CustomButton
                    text="Sign up with Google"
                    onPress={onSignInGooglePressed}
                    bgColor={'#FAE9Ea'}
                    fgColor={'#DD4D44'}
                    icon="google"
                    icon_type="font-awesome"
                />
                <CustomButton
                    text="Sign up with Facebook"
                    onPress={onSignInFacebookPressed}
                    bgColor={'#C6DCF5'}
                    fgColor={'#4267B2'}
                    icon="facebook"
                    icon_type="font-awesome"
                />
                <CustomButton
                    text="Already Have an Account?"
                    onPress={haveAccountPressed}
                    type="TER"
                />
            </View>
        </ScrollView>
    );
};

export default SignupScreen;
