import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './screens/SignupScreen';
import Feed from './screens/Feed';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaView style={styles.root}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignupScreen} />
                    <Stack.Screen name="Feed" component={Feed} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
});
export default App;
