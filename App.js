import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import Loginscreen from './screens/Loginscreen';
import { useFonts } from 'expo-font';
import SignupScreen from './screens/SignupScreen';
import ReusableButton from './screens/ReusableButton';
import CardComponent from './screens/CardComponent';
const Stack= createNativeStackNavigator();
const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {/*<Stack.Screen name={'Welcome'} component={WelcomeScreen}
        />
         <Stack.Screen name={'Login'} component={Loginscreen}
        />
        <Stack.Screen name={'Signup'} component={SignupScreen}/>
        <Stack.Screen name={'Card'} component={CardComponent}/>*/}
        <Stack.Screen name={'Buttons'} component={ReusableButton}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})