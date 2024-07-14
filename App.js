import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Loginscreen from './screens/Loginscreen';
import { useFonts } from 'expo-font';
import SignupScreen from './screens/SignupScreen';
const Stack= createNativeStackNavigator();
const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={'Home'} component={Home}
        />
         <Stack.Screen name={'Login'} component={Loginscreen}
        />
        <Stack.Screen name={'Signup'} component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})