import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Loginscreen from './src/screens/Loginscreen';
import { useFonts } from 'expo-font';
import SignupScreen from './src/screens/SignupScreen';
import ReusableButton from './src/screens/ReusableButton';
import CardComponent from './src/screens/CardComponent';
import Home from './src/screens/Home';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import { CartContext, CartProvider } from './src/context/CartContext';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarShowLabel: false,
      tabBarActiveTintColor: "#E5B143"
    }}>
      <Tab.Screen name="Home_Stack" component={MyHomeStack}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <FontAwesome name={"home"} size={size} color={color} />
          },
        }}
      />
      {/*<Tab.Screen name="Reorder" component={Home} options={{
        tabBarIcon: ({ size, focused, color }) => {
          return <FontAwesome name={"reorder"} size={size} color={color} />
        },
      }} />*/}
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({ size, color }) => {
          const { carts } = useContext(CartContext);
          return (
            <View style={{ position: 'relative' }}>

              <FontAwesome name={"shopping-cart"} size={size} color={color} />
              <View style={{
                height: 16,
                width: 16,
                borderRadius: 8,
                backgroundColor: color,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: -10,
                right: -5,

              }}>
                <Text style={{
                  fontSize: 10,
                  color: 'white',
                  fontWeight: '500',
                }}>{carts.length}</Text>
              </View>
            </View>
          )
        },
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ size, color }) => {
          return <MaterialIcons name={"account-circle"} size={size} color={color} />
        },
      }} />
    </Tab.Navigator>
  );
}
const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
    //initialRouteName='Product_details'
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Product_details' component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <CartProvider>


      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name={'Welcome'} component={WelcomeScreen}
          />
          <Stack.Screen name={'Login'} component={Loginscreen}
          />
          <Stack.Screen name={'Signup'} component={SignupScreen} />
          <Stack.Screen name={'Card'} component={CardComponent} />
          <Stack.Screen name={'Buttons'} component={ReusableButton} />
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'EditProfile'} component={EditProfileScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default App;

const styles = StyleSheet.create({})